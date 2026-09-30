const fs = require('fs');

const targetFile = 'src/app/locations/[slug]/page.tsx';
let content = fs.readFileSync(targetFile, 'utf8');

// 1. Inject formattedLocationName variable
const varInjection = `  const locations = await getAllLocations();

  const formattedLocationName = resolvedParams.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
`;
content = content.replace('  const locations = await getAllLocations();\n', varInjection);


// 2. Fix Breadcrumb schema
content = content.replace(
  `{ "@type": "ListItem", "position": 3, "name": post.title, "item": \`https://www.bikanerbuilders.in/locations/\${resolvedParams.slug}\` }`,
  `{ "@type": "ListItem", "position": 3, "name": formattedLocationName, "item": \`https://www.bikanerbuilders.in/locations/\${resolvedParams.slug}\` }`
);


// 3. Fix FAQ title
content = content.replace(
  `<DynamicFAQ pageType="location" title={post.title} />`,
  `<DynamicFAQ pageType="location" title={formattedLocationName} />`
);


// 4. Inject E-E-A-T block
const eeatBlock = `
            {/* E-E-A-T Block */}
            <div className="mt-8 bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl shadow-xl text-white">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 flex-shrink-0 border-2 border-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.5)]">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Why {formattedLocationName} Residents Choose Us</h3>
                  <p className="text-slate-300 mb-3 text-sm leading-relaxed">
                    "As a local engineering team, we understand the specific soil conditions and climate challenges in {formattedLocationName}. We've built our reputation on 100% transparent pricing and flawless execution. When you work with us, you're working directly with the experts."
                  </p>
                  <p className="font-bold text-orange-400 text-sm">— Rishad Khan, Founder & Head Civil Engineer</p>
                </div>
              </div>
            </div>
`;
content = content.replace('</article>', '</article>' + eeatBlock);


// 5. Fix "Other Locations We Serve" chips mapping
const oldLocationLoop = `{locations.filter(loc => loc.slug !== resolvedParams.slug).map((loc, idx) => (
                    <Link key={idx} href={\`/locations/\${loc.slug}\`} className="px-5 py-2.5 bg-slate-50 hover:bg-orange-50 text-slate-700 hover:text-orange-600 font-medium rounded-full border border-slate-200 hover:border-orange-200 transition-colors text-sm">
                      {loc.title}
                    </Link>
                  ))}`;
                  
const newLocationLoop = `{locations.filter(loc => loc.slug !== resolvedParams.slug).map((loc, idx) => {
                    const locName = loc.slug ? loc.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : loc.title;
                    return (
                      <Link key={idx} href={\`/locations/\${loc.slug}\`} className="px-5 py-2.5 bg-slate-50 hover:bg-orange-50 text-slate-700 hover:text-orange-600 font-medium rounded-full border border-slate-200 hover:border-orange-200 transition-colors text-sm">
                        {locName}
                      </Link>
                    );
                  })}`;
content = content.replace(oldLocationLoop, newLocationLoop);


// 6. Fix Sidebar text
content = content.replace(
  `<h3 className="text-xl font-bold text-slate-900 mb-4">Start Your Project in {post.title}</h3>`,
  `<h3 className="text-xl font-bold text-slate-900 mb-4">Start Your Project in {formattedLocationName}</h3>`
);
content = content.replace(
  `<p className="text-slate-600 mb-6 text-sm">Need construction or architectural services in {post.title}? Our experts are here to assist you.</p>`,
  `<p className="text-slate-600 mb-6 text-sm">Need construction or architectural services in {formattedLocationName}? Our experts are here to assist you.</p>`
);

fs.writeFileSync(targetFile, content);
