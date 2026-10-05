const fs = require('fs');
const path = require('path');

function replaceFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace unescaped single quotes inside JSX text or dangerouslySetInnerHTML
    content = content.replace(/isn't/g, "isn&apos;t");
    content = content.replace(/it's/g, "it&apos;s");
    content = content.replace(/Bikaner's/g, "Bikaner&apos;s");
    content = content.replace(/don't/g, "don&apos;t");
    content = content.replace(/home's/g, "home&apos;s");
    
    // Check if any dangerouslySetInnerHTML has unescaped quotes causing syntax errors
    // Instead of using '...' for dangerouslySetInnerHTML, we should use \`...\` or JSON.stringify or just use double quotes if there are no double quotes inside
    // Wait, earlier I generated dangerouslySetInnerHTML={{ __html: '...' }} and '...' contained a single quote!
    // Since the files are already written with the bad code, let me just replace the whole section starting from "{/* 1. Elite Process Section */}" to `<ServiceTrustBlock`
    
    const startIdx = content.indexOf('{/* 1. Elite Process Section */}');
    const endIdx = content.indexOf('<ServiceTrustBlock', startIdx);
    
    if (startIdx !== -1 && endIdx !== -1) {
        content = content.substring(0, startIdx) + content.substring(endIdx);
        fs.writeFileSync(filePath, content);
        console.log("Stripped from " + filePath);
    } else {
        console.log("Could not find blocks in " + filePath);
    }
}

['2d-naksha', '3d-elevation', 'interior-design', 'structural-drawing'].forEach(slug => {
    replaceFile(path.join('src/app/services', slug, 'page.tsx'));
});
