const fs = require('fs');

let c = fs.readFileSync('src/components/Footer.tsx', 'utf8');

const oldCoreLocationsBlock = `  const coreLocations = [
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

const newCoreLocationsBlock = `  const coreLocations = [
    { name: "Pawanpuri", slug: "pawanpuri-bikaner" },
    { name: "Sadul Ganj", slug: "sadul-ganj-bikaner" },
    { name: "JNV Colony", slug: "jnv-colony-bikaner" },
    { name: "Gangashahar", slug: "gangashahar-bikaner" },
    { name: "Nokha", slug: "nokha" },
    { name: "Deshnoke", slug: "deshnoke" },
    { name: "Napasar", slug: "napasar" },
    { name: "Murlidhar Vyas", slug: "murlidhar-vyas-colony-bikaner" }
  ];
  
  // Deduplicate and limit dynamic locations
  const dynamicLocations = locations
    .filter(loc => {
      const slugStr = loc.slug || loc.title.toLowerCase().replace(/\\s+/g, '-');
      return !coreLocations.some(core => core.slug === slugStr);
    })
    .slice(0, 6);`;

c = c.replace(oldCoreLocationsBlock, newCoreLocationsBlock);

const oldMapBlock = `{coreLocations.map((village, index) => (
              <Link 
                key={index} 
                href={\`/locations/\${village.toLowerCase().replace(/\\s+/g, '-')}\`}
                className="bg-white/10 hover:bg-[#EA580C] text-white px-3 py-1.5 rounded-full text-sm font-bold tracking-wide transition-all border border-white/5 hover:border-transparent"
              >
                {village}
              </Link>
            ))}`;

const newMapBlock = `{coreLocations.map((loc, index) => (
              <Link 
                key={index} 
                href={\`/locations/\${loc.slug}\`}
                className="bg-white/10 hover:bg-[#EA580C] text-white px-3 py-1.5 rounded-full text-sm font-bold tracking-wide transition-all border border-white/5 hover:border-transparent"
              >
                {loc.name}
              </Link>
            ))}`;

c = c.replace(oldMapBlock, newMapBlock);

fs.writeFileSync('src/components/Footer.tsx', c);
console.log('Fixed Footer locations slugs 404s');
