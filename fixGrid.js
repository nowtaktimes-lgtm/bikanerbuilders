const fs = require('fs');

let c = fs.readFileSync('src/app/page.tsx', 'utf8');

c = c.replace(
  '<div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-4 md:gap-8 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">',
  '<div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-8">'
);

c = c.replace(
  '              <div key={idx} className="min-w-[85vw] sm:min-w-[300px] snap-center md:min-w-0 md:w-auto bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow text-center">',
  '              <div key={idx} className="bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow text-center">'
);

c = c.replace(
  '                <div className="w-16 h-16 mx-auto bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">',
  '                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-3 md:mb-6">'
);

c = c.replace(
  '                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>',
  '                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>'
);

c = c.replace(
  '                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>',
  '                <h3 className="text-sm md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{step.title}</h3>'
);

c = c.replace(
  '                <p className="text-slate-600">{step.desc}</p>',
  '                <p className="text-xs md:text-base text-slate-600 leading-snug md:leading-normal">{step.desc}</p>'
);

fs.writeFileSync('src/app/page.tsx', c);
console.log('Fixed 2x2 grid layout in page.tsx');
