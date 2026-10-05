const fs = require('fs');

let c = fs.readFileSync('src/app/locations/[slug]/page.tsx', 'utf8');
c = c.replace(
  "dangerouslySetInnerHTML={{ __html: post.content || '' }}", 
  "dangerouslySetInnerHTML={{ __html: (post.content || '').replace(/<img /g, '<img sizes=\"(max-width: 768px) 100vw, 578px\" ') }}"
);
fs.writeFileSync('src/app/locations/[slug]/page.tsx', c);
console.log('Fixed locations page img');
