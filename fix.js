const fs = require('fs');
const path = require('path');
function fixFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixFiles(fullPath);
    } else if (fullPath.endsWith('page.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      content = content.replace(/dangerouslySetInnerHTML=\{\{ __html: (.*?) \}\} \/>/g, function(match, p1) {
          if (p1.startsWith('`') && p1.endsWith('`')) return match;
          
          let inner = p1;
          if (inner.startsWith('"') || inner.startsWith("'")) inner = inner.substring(1);
          if (inner.endsWith('"') || inner.endsWith("'")) inner = inner.substring(0, inner.length - 1);
          
          return 'dangerouslySetInnerHTML={{ __html: `' + inner + '` }} />';
      });
      fs.writeFileSync(fullPath, content);
    }
  }
}
fixFiles('src/app/services');
