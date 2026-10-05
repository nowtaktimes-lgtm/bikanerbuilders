const fs = require('fs');

let c = fs.readFileSync('src/components/MobileBottomBar.tsx', 'utf8');

c = c.replace('href="/#home"', 'href="/"');

fs.writeFileSync('src/components/MobileBottomBar.tsx', c);

console.log('Fixed MobileBottomBar.tsx');

let h = fs.readFileSync('src/components/Header.tsx', 'utf8');
if(h.includes('href="/#home"')) {
    h = h.replace(/href="\/#home"/g, 'href="/"');
    fs.writeFileSync('src/components/Header.tsx', h);
    console.log('Fixed Header.tsx');
} else {
    console.log('No /#home in Header.tsx');
}
