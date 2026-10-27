import { notFound } from 'next/navigation';
import { getPageBySlug } from '@/lib/api';
import Image from 'next/image';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/schema';

const INTERNAL_PAGE_SLUGS = ['global-site-settings', 'header-settings', 'footer-settings'];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  if (INTERNAL_PAGE_SLUGS.includes(resolvedParams.slug)) {
    return { title: 'Not Found' };
  }
  const post = await getPageBySlug(resolvedParams.slug);
  
  if (!post) {
    return { title: 'Not Found' };
  }
  
  const title = post.seo?.title || post.title;
  let description = post.seo?.description || post.seo?.metaDesc || '';
  if (!description) {
    description = `Explore ${post.title} at Bikaner Builders, the top construction and architectural firm in Bikaner.`;
  }
  
  const imageUrl = post.featuredImage?.node?.sourceUrl || 'https://www.bikanerbuilders.in/_next/image?url=%2Fassets%2Fog_bikaner_builders_v2.jpg&w=1200&q=75';

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.bikanerbuilders.in/${resolvedParams.slug}`
    },
    openGraph: {
      title,
      description,
      url: `https://www.bikanerbuilders.in/${resolvedParams.slug}`,
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

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  if (INTERNAL_PAGE_SLUGS.includes(resolvedParams.slug)) {
    notFound();
  }
  const post = await getPageBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const pageUrl = `https://www.bikanerbuilders.in/${resolvedParams.slug}`;
  const webPageSchema = generateWebPageSchema({
    title: post.title,
    description: post.seo?.description || post.content?.replace(/<[^>]+>/g, '').trim().substring(0, 160) || undefined,
    url: pageUrl,
    datePublished: post.date ? new Date(post.date).toISOString() : undefined,
    dateModified: post.modified ? new Date(post.modified).toISOString() : (post.date ? new Date(post.date).toISOString() : undefined)
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.bikanerbuilders.in" },
    { name: post.title, url: pageUrl }
  ]);

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black text-center mb-10 text-slate-900">{post.title}</h1>
        {post.featuredImage?.node?.sourceUrl && (
          <div className="mb-10 text-center relative h-[400px] md:h-[500px] w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src={post.featuredImage.node.sourceUrl} 
              alt={post.title}
              fill
              className="object-cover"
              priority
            sizes="(max-width: 768px) 100vw, 578px" />
          </div>
        )}
        <article className="prose prose-lg max-w-4xl mx-auto my-12 px-4 prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-orange-500 hover:prose-a:text-orange-600 prose-img:rounded-2xl prose-img:shadow-lg">
          <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
        </article>
      </div>
    </div>
  );
}
