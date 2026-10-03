const fs = require('fs');

let c = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// Replace topVillages with coreLocations
const oldTopVillages = `  const topVillages = [
    "Nokha", "Deshnoke", "Napasar", "Kolayat", 
    "Lunkaransar", "Sri Dungargarh", "Khajuwala", 
    "Pugal", "Bajju", "Chhatargarh"
  ];`;
  
const newCoreLocations = `  const coreLocations = [
    "Pawanpuri", "Sadul Ganj", "JNV Colony", "Gangashahar", 
    "Nokha", "Deshnoke", "Napasar", "Ridmalsar Sipahiyan"
  ];
  
  // Deduplicate and limit dynamic locations
  const dynamicLocations = locations
    .filter(loc => {
      const slugStr = loc.slug || loc.title.toLowerCase().replace(/\\s+/g, '-');
      const shortName = formatLocationName(slugStr);
      return !coreLocations.some(core => core.toLowerCase() === shortName.toLowerCase());
    })
    .slice(0, 6);`;

c = c.replace(oldTopVillages, newCoreLocations);

// Replace the SEO Village Silo section
const oldSiloStart = '{/* SEO Village Silo - Bottom Section */}';
const oldSiloEnd = '{/* Copyright */}';

const newSilo = `{/* SEO Village Silo - Bottom Section */}
      <div className="bg-[#0F172A] py-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Top SEO Service Areas */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-white mb-2">Serving Bikaner City & Surrounding Areas</h3>
            <p className="text-slate-400">Top construction service areas</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6">
            {coreLocations.map((village, index) => (
              <Link 
                key={index} 
                href={\`/locations/\${village.toLowerCase().replace(/\\s+/g, '-')}\`}
                className="bg-white/10 hover:bg-[#EA580C] text-white px-3 py-1.5 rounded-full text-sm font-bold tracking-wide transition-all border border-white/5 hover:border-transparent"
              >
                {village}
              </Link>
            ))}
          </div>

          {/* Section 2: Recently Added Locations (Dynamic from WP) */}
          {dynamicLocations.length > 0 && (
            <>
              <div className="text-center mb-6 mt-4 border-t border-white/10 pt-8">
                <h4 className="text-xl font-bold text-white mb-2">Recently Added Locations</h4>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6">
                {dynamicLocations.map((loc, index) => {
                  const slugStr = loc.slug || loc.title.toLowerCase().replace(/\\s+/g, '-');
                  const shortName = formatLocationName(slugStr);
                  return (
                    <Link 
                      key={\`dyn-\${index}\`} 
                      href={\`/locations/\${slugStr}\`}
                      className="bg-white/10 hover:bg-[#EA580C] text-white px-3 py-1.5 rounded-full text-sm font-bold tracking-wide transition-all border border-white/5 hover:border-transparent"
                    >
                      {shortName}
                    </Link>
                  );
                })}
              </div>
            </>
          )}

          {/* Global CTA */}
          <div className="flex justify-center mt-6">
            <Link 
              href="/locations"
              className="bg-transparent hover:bg-white/5 text-[#EA580C] px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all border border-[#EA580C]/50 hover:border-[#EA580C]"
            >
              View All Locations &rarr;
            </Link>
          </div>
        </div>
      </div>

      `;

c = c.substring(0, c.indexOf(oldSiloStart)) + newSilo + c.substring(c.indexOf(oldSiloEnd));

fs.writeFileSync('src/components/Footer.tsx', c);
console.log('Fixed Footer Locations SEO');
