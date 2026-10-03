const fs = require('fs');

let c = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace the container
c = c.replace(
  '          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">',
  '          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-4 md:gap-8 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">'
);

// Replace the card wrapper
c = c.replace(
  '              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow text-center">',
  '              <div key={idx} className="min-w-[85vw] sm:min-w-[300px] snap-center md:min-w-0 md:w-auto bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow text-center">'
);

fs.writeFileSync('src/app/page.tsx', c);
console.log('Fixed slider layout in page.tsx');
