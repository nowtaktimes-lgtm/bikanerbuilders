const fs = require('fs');

const updateMetadata = (file, getterFn, basePath) => {
  if (!fs.existsSync(file)) return;
  let c = fs.readFileSync(file, 'utf8');
  
  // Need to replace the whole generateMetadata block
  const startIdx = c.indexOf('export async function generateMetadata');
  if (startIdx === -1) return;
  
  let endIdx = c.indexOf('}', c.indexOf('return {', startIdx));
  // account for nested braces if any, but since it's just a simple return object it's usually fine
  // let's do a slightly safer replacement:
  const nextExportIdx = c.indexOf('export default', startIdx);
  
  const newFn = `export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await ${getterFn}(resolvedParams.slug);
  
  if (!post) {
    return { title: 'Not Found' };
  }
  
  const title = post.seo?.title || post.title;
  let description = post.seo?.metaDesc || '';
  if (!description) {
    // Basic fallback description
    description = \`Premium construction and architectural services in \${post.title}. 100% Vastu-compliant designs and turnkey solutions by Bikaner Builders.\`;
    if (description.length > 150) description = description.substring(0, 147) + '...';
  }
  
  const imageUrl = post.featuredImage?.node?.sourceUrl || 'https://bikanerbuilders.in/assets/og_default_bikaner_builders.jpg';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: \`https://bikanerbuilders.in${basePath}/\${resolvedParams.slug}\`,
      siteName: 'Bikaner Builders',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

`;

  c = c.substring(0, startIdx) + newFn + c.substring(nextExportIdx);
  fs.writeFileSync(file, c);
}

updateMetadata('src/app/locations/[slug]/page.tsx', 'getLocationBySlug', '/locations');
updateMetadata('src/app/services/[slug]/page.tsx', 'getServiceBySlug', '/services');

console.log("Metadata updated");
