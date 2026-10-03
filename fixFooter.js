const fs = require('fs');

let c = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// Update Grid Container
c = c.replace(
  '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">',
  '<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-12 mb-16">'
);

// Update Brand Info col-span
c = c.replace(
  '<div className="lg:col-span-2">',
  '<div className="col-span-2 lg:col-span-2">'
);

// Reduce spacing for mobile in lists
c = c.replace(
  /<ul className="space-y-4">/g,
  '<ul className="space-y-3 md:space-y-4">'
);

// Reduce text size for mobile in links
c = c.replace(
  /className="text-gray-600 hover:text-\[\#EA580C\] font-medium transition-colors"/g,
  'className="text-sm md:text-base text-gray-600 hover:text-[#EA580C] font-medium transition-colors"'
);

// Also reduce the heading text size slightly on mobile so it fits nicely
c = c.replace(
  /<h3 className="text-\[\#0F172A\] font-bold text-lg mb-6">/g,
  '<h3 className="text-[#0F172A] font-bold text-base md:text-lg mb-4 md:mb-6">'
);

fs.writeFileSync('src/components/Footer.tsx', c);
console.log('Fixed Footer grid layout and typography');
