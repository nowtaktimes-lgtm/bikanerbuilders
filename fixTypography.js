const fs = require('fs');

const file = 'src/app/locations/[slug]/page.tsx';
let c = fs.readFileSync(file, 'utf8');

c = c.replace(
  /<article className="prose[^>]*>/,
  '<article className="prose max-w-none bg-white p-6 md:p-12 rounded-2xl shadow-xl border border-slate-100 prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-orange-500">'
);

c = c.replace(
  /<div dangerouslySetInnerHTML=\{\{ __html: post\.content \|\| '' \}\} \/>/,
  '<div className="text-[17px] leading-[1.8] text-slate-700 [&>p]:mb-5 [&>p:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.content || \'\' }} />'
);

fs.writeFileSync(file, c);
console.log('Done!');
