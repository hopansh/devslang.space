const fs = require('fs');
const path = require('path');

// Simple frontmatter parser (no external dependencies needed)
function parseMarkdown(content) {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  if (!match) {
    throw new Error('Invalid frontmatter format. Ensure it starts and ends with ---');
  }

  const yamlBlock = match[1];
  const body = match[2].trim();
  
  const metadata = {};
  yamlBlock.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      
      // Clean up quotes and parse arrays/booleans/numbers
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      } else if (value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      } else if (value.startsWith('[') && value.endsWith(']')) {
        try {
          value = JSON.parse(value.replace(/'/g, '"'));
        } catch (e) {
          value = value.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
        }
      } else if (value === 'true') {
        value = true;
      } else if (value === 'false') {
        value = false;
      } else if (!isNaN(value) && value !== '') {
        value = Number(value);
      }
      metadata[key] = value;
    }
  });

  return { ...metadata, body };
}

// Estimate reading time from body word count (~200 wpm)
function estimateReadingMinutes(body) {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function main() {
  const rootDir = __dirname;
  const articlesDir = path.join(rootDir, 'articles');
  const distDir = path.join(rootDir, 'dist');
  
  // Ignored directories
  const ignoredDirs = ['.git', '.github', 'dist', 'node_modules', '{architecture-patterns,apis-communication,code-quality,frontend-build,data-state,performance-reliability,devx-workflow,ai-llm,culture-career}'];

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }

  if (!fs.existsSync(articlesDir)) {
    console.error('✗ "articles" directory not found in devslang.space.');
    process.exit(1);
  }

  const articles = [];

  // Read all category directories inside articles/
  const entries = fs.readdirSync(articlesDir, { withFileTypes: true });
  
  entries.forEach(entry => {
    if (entry.isDirectory() && !ignoredDirs.includes(entry.name)) {
      const categoryDir = path.join(articlesDir, entry.name);
      const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.md'));
      
      files.forEach(file => {
        try {
          const filePath = path.join(categoryDir, file);
          const content = fs.readFileSync(filePath, 'utf8');
          const rawArticle = parseMarkdown(content);
          
          if (!rawArticle.slug || !rawArticle.name) {
            throw new Error('Missing required frontmatter properties (slug, name)');
          }

          // Extract excerpt from the top blockquote (> ...) in the body
          let excerpt = '';
          const bodyLines = rawArticle.body.split('\n');
          for (let line of bodyLines) {
            line = line.trim();
            if (line.startsWith('>')) {
              excerpt = line.slice(1).trim();
              // Remove markdown bold/italics from the excerpt if any
              excerpt = excerpt.replace(/[\*\_]+/g, '');
              break;
            }
          }

          // Map difficulty code (n, m, s, x, l) to platform's Difficulty enum
          const difficultyMap = {
            'n': 'Newbie',
            'm': 'Mid',
            's': 'Senior',
            'x': '10x',
            'l': 'Lore Master'
          };
          const difficulty = difficultyMap[rawArticle.difficulty] || 'Mid';

          // Map status (just-dropped, deep-lore) to platform's StatusTag
          const statusMap = {
            'just-dropped': 'just dropped',
            'deep-lore': 'deep-lore',
            'rising': 'rising',
            'blazing': 'blazing',
            'solid': 'solid',
            'classic': 'classic',
            'legacy': 'legacy',
            'cringe': 'cringe',
            'overused': 'overused'
          };
          const statusTag = statusMap[rawArticle.status] || 'solid';

          // Construct the canonical Article object expected by the platform
          const dateStr = rawArticle.last_updated ? new Date(rawArticle.last_updated).toISOString() : new Date().toISOString();
          const article = {
            articleId: rawArticle.slug, // Stable, unique ID
            slug: rawArticle.slug,
            title: rawArticle.name,
            topic: rawArticle.slug,
            excerpt: excerpt || 'No summary available.',
            body: rawArticle.body,
            category: entry.name, // The folder name matches the Category enum value (e.g. ai-llm)
            difficulty: difficulty,
            statusTag: statusTag,
            heatScore: rawArticle.heat || 30,
            tags: rawArticle.tags || [],
            readingMinutes: estimateReadingMinutes(rawArticle.body),
            viewCount: 0,
            premium: false,
            approved: true,
            aiAssisted: false,
            submittedBy: rawArticle.contributors ? rawArticle.contributors[0] : 'system',
            createdAt: dateStr,
            updatedAt: dateStr
          };
          
          articles.push(article);
          console.log(`✓ Parsed [${entry.name}]: ${file} (${article.title})`);
        } catch (e) {
          console.error(`✗ Error parsing [${entry.name}/${file}]:`, e.message);
        }
      });
    }
  });

  fs.writeFileSync(path.join(distDir, 'articles.json'), JSON.stringify(articles, null, 2));
  console.log(`\n✓ Successfully compiled ${articles.length} articles to dist/articles.json`);
}

main();
