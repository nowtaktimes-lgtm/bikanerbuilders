const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. WhatsApp Button text color contrast
    // Change text-white to text-neutral-900 on bg-[#25D366] buttons
    if (content.includes('bg-[#25D366]') && content.includes('text-white')) {
        // We'll just replace 'text-white' with 'text-neutral-900' within the same className string that has 'bg-[#25D366]'
        const parts = content.split(/className="([^"]*bg-\[\#25D366\][^"]*)"/);
        for (let i = 1; i < parts.length; i += 2) {
            parts[i] = parts[i].replace('text-white', 'text-neutral-900');
        }
        content = parts.join('className="').replace(/className=""/g, ''); // Fix join artifact if any, actually a better way:
    }
    // Safer regex for WhatsApp buttons:
    content = content.replace(/className="([^"]*bg-\[\#25D366\][^"]*text-)white([^"]*)"/g, 'className="$1neutral-900$2"');
    
    // Call buttons
    content = content.replace(/className="([^"]*bg-orange-500[^"]*text-)white([^"]*)"/g, 'className="$1neutral-900$2"');
    content = content.replace(/className="([^"]*bg-\[\#EA580C\][^"]*text-)white([^"]*)"/g, 'className="$1neutral-900$2"');

    // 2. Next Image sizes
    // Find <Image ... fill ... /> and inject sizes="(max-width: 768px) 100vw, 578px" if sizes isn't there
    content = content.replace(/<Image([^>]*?fill[^>]*?)>/g, (match, p1) => {
        if (!p1.includes('sizes=')) {
            return `<Image${p1} sizes="(max-width: 768px) 100vw, 578px">`;
        }
        return match;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${filePath}`);
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

// 3. DynamicGoogleMap Lazy Loading
let mapContent = fs.readFileSync('src/app/locations/[slug]/page.tsx', 'utf8');
if (mapContent.includes("import DynamicGoogleMap from '@/components/DynamicGoogleMap';")) {
    mapContent = mapContent.replace(
        "import DynamicGoogleMap from '@/components/DynamicGoogleMap';",
        "import dynamic from 'next/dynamic';\nconst DynamicGoogleMap = dynamic(() => import('@/components/DynamicGoogleMap'), { ssr: false });"
    );
    fs.writeFileSync('src/app/locations/[slug]/page.tsx', mapContent);
    console.log('Lazy loaded map in locations page');
}

// 4. Footer Copyright Text Contrast
let footerContent = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footerContent = footerContent.replace(/text-slate-500/g, 'text-slate-400');
fs.writeFileSync('src/components/Footer.tsx', footerContent);
console.log('Fixed Footer copyright contrast');
