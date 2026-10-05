const fs = require('fs');
const path = require('path');

function fixClasses(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Fix the broken className
    content = content.replace(/gap-2className="/g, 'gap-2"');
    content = content.replace(/transition-colorsclassName="/g, 'transition-colors"');
    content = content.replace(/className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-black text-lg px-8 py-4 rounded-full shadow-lg transition-all hover:-translate-y-1className="/g, 'className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-black text-lg px-8 py-4 rounded-full shadow-lg transition-all hover:-translate-y-1"');

    // To be safe, just look for any word ending with className=" at the end of what looks like a class string
    // e.g. text-whiteclassName=" => text-white"
    // The pattern is: any word char or dash or space, followed by className=" but we only want to replace className=" with " if it's at the end of a class list.
    // Let's just fix it universally:
    content = content.replace(/([^ \n])className="/g, (match, p1) => {
        // if p1 is not a quote or space or =, it means it's a corrupted join
        if (p1 !== '=' && p1 !== ' ' && p1 !== '\n') {
            return p1 + '"';
        }
        return match;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed corrupted class string in ${filePath}`);
    }
}

function traverse(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
            fixClasses(fullPath);
        }
    }
}

traverse('src');
