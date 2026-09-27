import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/lib/api';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getServiceBySlug(resolvedParams.slug);
  
  if (!post) {
    return { title: 'Not Found' };
  }
  
  return {
    title: post.seo?.title || post.title,
    description: post.seo?.metaDesc || '',
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getServiceBySlug(resolvedParams.slug);

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
