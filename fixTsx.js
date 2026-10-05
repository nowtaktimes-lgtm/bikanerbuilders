const fs = require('fs');
const path = require('path');

function fixSyntax(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Fix / sizes="..." > to sizes="..." />
    content = content.replace(/\/\s*sizes="(max-width: 768px) 100vw, 578px">\s*>?/g, 'sizes="(max-width: 768px) 100vw, 578px" />');
    
    // Also, if the tag originally ended with > and not />, the regex might have been fine, but usually Next/Image is self-closing />.
    // Let's just fix the exact breakage: / sizes="..." >
    
    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed syntax in ${filePath}`);
    }
}

function traverse(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
            fixSyntax(fullPath);
        }
    }
}

traverse('src');
