const fs = require('fs');

// 1. Fix DynamicPageHero.tsx
let heroContent = fs.readFileSync('src/components/DynamicPageHero.tsx', 'utf8');
if (!heroContent.includes('breadcrumbTitle?: string;')) {
  heroContent = heroContent.replace(
    'title: string;',
    'title: string;\n  breadcrumbTitle?: string;'
  );
  heroContent = heroContent.replace(
    'export default function DynamicPageHero({ title, image, category, categoryLink }: DynamicPageHeroProps) {',
    'export default function DynamicPageHero({ title, breadcrumbTitle, image, category, categoryLink }: DynamicPageHeroProps) {'
  );
  heroContent = heroContent.replace(
    '<span className="text-orange-400">{title}</span>',
    '<span className="text-orange-400">{breadcrumbTitle || title}</span>'
  );
  fs.writeFileSync('src/components/DynamicPageHero.tsx', heroContent);
}

// 2. Fix Footer.tsx
let footerContent = fs.readFileSync('src/components/Footer.tsx', 'utf8');
const oldFooterMap = `{locations.map((loc, index) => (
                    <Link 
                      key={\`dyn-\${index}\`} 
                      href={\`/locations/\${loc.slug || loc.title.toLowerCase().replace(/\\s+/g, '-')}\`}
                      className="bg-white/10 hover:bg-[#EA580C] text-white px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all border border-white/5 hover:border-transparent"
                    >
                      {loc.title}
                    </Link>
                  ))}`;
const newFooterMap = `{locations.map((loc, index) => {
                    const slugStr = loc.slug || loc.title.toLowerCase().replace(/\\s+/g, '-');
                    const shortName = slugStr.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                    return (
                      <Link 
                        key={\`dyn-\${index}\`} 
                        href={\`/locations/\${slugStr}\`}
                        className="bg-white/10 hover:bg-[#EA580C] text-white px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all border border-white/5 hover:border-transparent"
                      >
                        {shortName}
                      </Link>
                    );
                  })}`;
footerContent = footerContent.replace(oldFooterMap, newFooterMap);
fs.writeFileSync('src/components/Footer.tsx', footerContent);


// 3. Fix Location Page (src/app/locations/[slug]/page.tsx) to pass breadcrumbTitle
let locPageContent = fs.readFileSync('src/app/locations/[slug]/page.tsx', 'utf8');
locPageContent = locPageContent.replace(
  '<DynamicPageHero title={post.title} image={post.featuredImage?.node?.sourceUrl} category="Locations" categoryLink="/locations" />',
  '<DynamicPageHero title={post.title} breadcrumbTitle={formattedLocationName} image={post.featuredImage?.node?.sourceUrl} category="Locations" categoryLink="/locations" />'
);
fs.writeFileSync('src/app/locations/[slug]/page.tsx', locPageContent);

console.log("Fixes applied successfully.");
