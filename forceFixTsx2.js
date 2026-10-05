const fs = require('fs');
const path = require('path');

function forceFix(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/\/\s*sizes="(max-width: 768px) 100vw, 578px">/g, 'sizes="(max-width: 768px) 100vw, 578px" />');

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Force fixed syntax in ${filePath}`);
    }
}

function traverse(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
            forceFix(fullPath);
        }
    }
}

traverse('src');
