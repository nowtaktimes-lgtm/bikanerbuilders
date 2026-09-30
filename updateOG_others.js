const fs = require('fs');

const updateMetadata = (file, getterFn, basePath) => {
  if (!fs.existsSync(file)) return;
  let c = fs.readFileSync(file, 'utf8');
  
  const startIdx = c.indexOf('export async function generateMetadata');
  if (startIdx === -1) return;
  
  const nextExportIdx = c.indexOf('export default', startIdx);
  if (nextExportIdx === -1) return;
  
  const newFn = `export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await ${getterFn}(resolvedParams.slug);
  
  if (!post) {
    return { title: 'Not Found' };
  }
  
  const title = post.seo?.title || post.title;
  let description = post.seo?.metaDesc || '';
  if (!description) {
    description = \`Explore \${post.title} at Bikaner Builders, the top construction and architectural firm in Bikaner.\`;
  }
  
  const imageUrl = post.featuredImage?.node?.sourceUrl || 'https://bikanerbuilders.in/assets/og_bikaner_builders_v2.jpg';

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

updateMetadata('src/app/[slug]/page.tsx', 'getPageBySlug', '');
updateMetadata('src/app/blog/[slug]/page.tsx', 'getPostBySlug', '/blog');
console.log("Other metas updated");
