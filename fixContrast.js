const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Simple robust string replacement for WhatsApp buttons
    const waSplit = content.split('bg-[#25D366]');
    for (let i = 1; i < waSplit.length; i++) {
        // Look ahead for text-white and replace the first occurrence
        waSplit[i] = waSplit[i].replace('text-white', 'text-neutral-900');
    }
    content = waSplit.join('bg-[#25D366]');

    // Call buttons
    const callSplit = content.split('bg-orange-500');
    for (let i = 1; i < callSplit.length; i++) {
        callSplit[i] = callSplit[i].replace('text-white', 'text-neutral-900');
    }
    content = callSplit.join('bg-orange-500');

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated contrast in ${filePath}`);
    }
}

function traverse(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
            replaceInFile(fullPath);
        }
    }
}

traverse('src');
