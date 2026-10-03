const fs = require('fs');

let c = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace containers
c = c.replace(
  /<div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-3 md:overflow-visible \[\&::\S+]:hidden">/g,
  '<div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-8">'
);

// Services Replacements
c = c.replace(/className="min-w-\[85vw\] md:min-w-0 snap-center group bg-slate-50/g, 'className="group bg-slate-50');
c = c.replace(/className="relative h-56 overflow-hidden"/g, 'className="relative h-32 md:h-56 overflow-hidden"');
c = c.replace(/className="absolute bottom-6 left-6 text-2xl font-black text-white"/g, 'className="absolute bottom-3 left-3 md:bottom-6 md:left-6 text-sm md:text-2xl font-black text-white"');
c = c.replace(/className="p-6"/g, 'className="p-3 md:p-6"');
c = c.replace(/className="text-gray-600 mb-4"/g, 'className="text-xs md:text-base text-gray-600 mb-2 md:mb-4 line-clamp-2 md:line-clamp-none"');
c = c.replace(/className="text-\[\#EA580C\] font-bold text-sm tracking-wide uppercase group-hover:underline"/g, 'className="text-[#EA580C] font-bold text-[10px] md:text-sm tracking-wide uppercase group-hover:underline"');

// Testimonials Replacements
c = c.replace(/className="min-w-\[85vw\] md:min-w-0 snap-center bg-slate-50 p-6 md:p-8/g, 'className="bg-slate-50 p-4 md:p-8');
c = c.replace(/className="flex gap-1 mb-4 text-orange-500"/g, 'className="flex gap-0.5 md:gap-1 mb-2 md:mb-4 text-orange-500"');
c = c.replace(/className="w-5 h-5"/g, 'className="w-3 h-3 md:w-5 md:h-5"');
c = c.replace(/className="text-slate-600 italic mb-6"/g, 'className="text-xs md:text-base text-slate-600 italic mb-3 md:mb-6 leading-snug md:leading-normal"');
c = c.replace(/className="font-bold text-slate-900 border-t border-slate-200 pt-4"/g, 'className="text-xs md:text-base font-bold text-slate-900 border-t border-slate-200 pt-3 md:pt-4"');

fs.writeFileSync('src/app/page.tsx', c);
console.log('Fixed grids for Services and Testimonials');
