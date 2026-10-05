const fs = require('fs');
const path = require('path');

function revertInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Revert WhatsApp buttons
    const waSplit = content.split('bg-[#25D366]');
    for (let i = 1; i < waSplit.length; i++) {
        waSplit[i] = waSplit[i].replace('text-neutral-900', 'text-white');
    }
    content = waSplit.join('bg-[#25D366]');

    // Revert Call buttons
    const callSplit = content.split('bg-orange-500');
    for (let i = 1; i < callSplit.length; i++) {
        callSplit[i] = callSplit[i].replace('text-neutral-900', 'text-white');
    }
    content = callSplit.join('bg-orange-500');

    // Also revert text-slate-400 to text-slate-500 in Footer
    if (filePath.endsWith('Footer.tsx')) {
        content = content.replace(/text-slate-400/g, 'text-slate-500');
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Reverted contrast in ${filePath}`);
    }
}

function traverse(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
            revertInFile(fullPath);
        }
    }
}

traverse('src');
