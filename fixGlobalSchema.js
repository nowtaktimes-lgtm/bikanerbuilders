const fs = require('fs');

let c = fs.readFileSync('src/lib/schema.ts', 'utf8');

c = c.replace(/LocalBusiness/g, 'GeneralContractor');

const oldSchema = `export function generateGeneralContractorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Bikaner Builders",
    "image": "https://www.bikanerbuilders.in/assets/bikaner_builders_engineering_team.jpg",
    "telephone": "+919351132772",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No 04, Opp Govt School, Napasar Rd, Ridmalsar Sipahiyan",
      "addressLocality": "Bikaner",
      "addressRegion": "Rajasthan",
      "postalCode": "334022",
      "addressCountry": "IN"
    }
  };
}`;

const newSchema = `export function generateGeneralContractorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Bikaner Builders",
    "image": "https://www.bikanerbuilders.in/assets/bikaner_builders_engineering_team.jpg",
    "telephone": "+919351132772",
    "url": "https://bikanerbuilders.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No 04, Opp Govt School, Napasar Rd, Ridmalsar Sipahiyan",
      "addressLocality": "Bikaner",
      "addressRegion": "Rajasthan",
      "postalCode": "334022",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.0229,
      "longitude": 73.3119
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bikaner"
      },
      {
        "@type": "City",
        "name": "Nokha"
      },
      {
        "@type": "City",
        "name": "Deshnoke"
      }
    ],
    "priceRange": "₹₹₹"
  };
}`;

c = c.replace(oldSchema, newSchema);

fs.writeFileSync('src/lib/schema.ts', c);

let layout = fs.readFileSync('src/app/layout.tsx', 'utf8');
layout = layout.replace('generateLocalBusinessSchema', 'generateGeneralContractorSchema');
layout = layout.replace('generateLocalBusinessSchema', 'generateGeneralContractorSchema');
fs.writeFileSync('src/app/layout.tsx', layout);

console.log('Fixed GeneralContractor schema');
