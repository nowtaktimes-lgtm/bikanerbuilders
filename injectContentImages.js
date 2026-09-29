const fs = require('fs');
const path = require('path');

const pages = [
  { slug: '2d-naksha', img: '/assets/seo_2d_naksha.jpg', alt: 'Professional 2D Vastu Floor Plan Blueprint' },
  { slug: '3d-elevation', img: '/assets/seo_3d_elevation.jpg', alt: 'Modern 3D Front Elevation Villa Design' },
  { slug: 'turnkey-construction', img: '/assets/seo_turnkey.jpg', alt: 'Civil Engineers at Construction Site' },
  { slug: 'interior-design', img: '/assets/seo_interior.jpg', alt: 'Luxury POP False Ceiling and Interior Design' },
  { slug: 'structural-drawing', img: '/assets/seo_structural.jpg', alt: 'RCC Structural Engineering Blueprint Drawings' },
];

for (const p of pages) {
  const filePath = path.join('src', 'app', 'services', p.slug, 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Inject the image tag right after the <article> tag
  const imageTag = `
                <div className="relative w-full h-[400px] mb-10 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <Image src="${p.img}" alt="${p.alt}" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
`;
  
  content = content.replace('<article className="prose prose-lg md:prose-xl prose-slate max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">', '<article className="prose prose-lg md:prose-xl prose-slate max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">\n' + imageTag);
  
  fs.writeFileSync(filePath, content);
}
