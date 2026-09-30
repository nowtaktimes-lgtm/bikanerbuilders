import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/api';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return { title: 'Not Found' };
  }
  
  const title = post.seo?.title || post.title;
  let description = post.seo?.metaDesc || '';
  if (!description) {
    description = `Explore ${post.title} at Bikaner Builders, the top construction and architectural firm in Bikaner.`;
  }
  
  const imageUrl = post.featuredImage?.node?.sourceUrl || 'https://bikanerbuilders.in/assets/og_bikaner_builders_v2.jpg';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://bikanerbuilders.in/blog/${resolvedParams.slug}`,
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

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
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
            />
          </div>
        )}
        {post.seo?.schemaDetails && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: post.seo.schemaDetails }}
          />
        )}
        <article className="prose prose-lg max-w-4xl mx-auto my-12 px-4 prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-orange-500 hover:prose-a:text-orange-600 prose-img:rounded-2xl prose-img:shadow-lg">
          <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
        </article>
      </div>
    </div>
  );
}
