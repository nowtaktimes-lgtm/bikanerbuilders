const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Schema markup strictly to "+91-93765-90313"
    content = content.replace(/"telephone":\s*"\+?91[\-\s]?9351132772"/g, '"telephone": "+91-93765-90313"');

    // 2. WhatsApp links exactly to "919376590313"
    content = content.replace(/wa\.me\/919351132772/g, 'wa.me/919376590313');
    content = content.replace(/api\.whatsapp\.com\/send\?phone=919351132772/g, 'api.whatsapp.com/send?phone=919376590313');
    
    // In api.ts there is: whatsappNumber: "919351132772"
    content = content.replace(/whatsappNumber:\s*"919351132772"/g, 'whatsappNumber: "919376590313"');
    content = content.replace(/primaryPhone:\s*"919351132772"/g, 'primaryPhone: "919376590313"');

    // 3. tel: links strictly to "tel:+919376590313"
    content = content.replace(/href="tel:\+?91?9351132772"/g, 'href="tel:+919376590313"');

    // 4. UI Display formatting: Call +91-9351132772 -> Call +91 93765 90313
    content = content.replace(/Call \+91-9351132772/g, 'Call +91 93765 90313');
    
    // Title tag: | 9351132772 -> | +91 93765 90313
    content = content.replace(/\| 9351132772/g, '| +91 93765 90313');

    // 5. Catch-all for any remaining basic numbers 9351132772
    // If it's left, just change it to 9376590313 so it doesn't break logic
    content = content.replace(/9351132772/g, '9376590313');

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
console.log('Done replacing phone number.');
