const fs = require('fs');

// 1. Fix Footer.tsx
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace(
  /\{locations\.map\(\(loc, index\) => \([\s\S]*?<Link[\s\S]*?href=\{`\/locations\/\$\{loc\.slug \|\| loc\.title\.toLowerCase\(\)\.replace\(\/\\s\+\/g, '-'\)\}`\}[\s\S]*?>[\s\S]*?\{loc\.title\}[\s\S]*?<\/Link>[\s\S]*?\)\)\}/m,
  `{locations.map((loc, index) => {
                  const slugStr = loc.slug || loc.title.toLowerCase().replace(/\\s+/g, '-');
                  const shortName = slugStr.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                  return (
                    <Link 
                      key={\`dyn-\${index}\`} 
                      href={\`/locations/\${slugStr}\`}
                      className="bg-white/10 hover:bg-[#EA580C] text-white px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all border border-white/5 hover:border-transparent"
                    >
                      {shortName}
                    </Link>
                  );
                })}`
);
fs.writeFileSync('src/components/Footer.tsx', footer);

// 2. Fix locations/page.tsx
let locPage = fs.readFileSync('src/app/locations/page.tsx', 'utf8');
locPage = locPage.replace(
  /\{locations\.map\(\(loc, index\) => \([\s\S]*?<Link[\s\S]*?key=\{index\}[\s\S]*?href=\{loc\.uri \|\| '#'\}/m,
  `{locations.map((loc, index) => {
          const slugStr = loc.slug || loc.title.toLowerCase().replace(/\\s+/g, '-');
          const shortName = slugStr.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
          return (
            <Link 
              key={index}
              href={\`/locations/\${slugStr}\`}`
);
locPage = locPage.replace(
  /\{loc\.title\}[\s\S]*?<\/h2>/m,
  `{shortName}\n                    </h2>`
);
// replace closing parenthesis for map loop
locPage = locPage.replace(
  /<\/Link>[\s\S]*?\)\)}/m,
  `</Link>\n          );})}`
);
fs.writeFileSync('src/app/locations/page.tsx', locPage);
