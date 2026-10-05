const fs = require('fs');
const path = require('path');

function replaceGlobally(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/text-neutral-900/g, 'text-white');

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Reverted text-neutral-900 in ${filePath}`);
    }
}

function traverse(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
            replaceGlobally(fullPath);
        }
    }
}

traverse('src');
