import { notFound } from 'next/navigation';
import { getLocationBySlug } from '@/lib/api';
import DynamicPageHero from '@/components/DynamicPageHero';
import BottomCTA from '@/components/BottomCTA';
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getLocationBySlug(resolvedParams.slug);
  
  if (!post) {
    return { title: 'Not Found' };
  }
  
  return {
    title: post.seo?.title || post.title,
    description: post.seo?.metaDesc || '',
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getLocationBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {post.seo?.schemaDetails && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: post.seo.schemaDetails }}
        />
      )}
      
      {/* TOP: Auto-Generated Hero Banner */}
      <DynamicPageHero title={post.title} image={post.featuredImage?.node?.sourceUrl} />
      
      {/* MIDDLE: Auto-Formatted WP Content */}
      <div className="container mx-auto px-4 py-16">
        <article className="prose prose-lg md:prose-xl prose-slate max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-orange-500">
          <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
        </article>
      </div>

      {/* BOTTOM: Auto-Generated Lead CTA */}
      <BottomCTA />
    </main>
  );
}
