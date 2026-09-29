import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllLocations } from '@/lib/api';
import DynamicPageHero from '@/components/DynamicPageHero';
import BottomCTA from '@/components/BottomCTA';
import DynamicFAQ from '@/components/DynamicFAQ';
import Link from 'next/link';

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
  const locations = await getAllLocations();

  if (!post) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.bikanerbuilders.in" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.bikanerbuilders.in/services" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.bikanerbuilders.in/services/${resolvedParams.slug}` }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {post.seo?.schemaDetails && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: post.seo.schemaDetails }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* TOP: Auto-Generated Hero Banner */}
      <DynamicPageHero title={post.title} image={post.featuredImage?.node?.sourceUrl} category="Services" categoryLink="/services" />
      
      {/* MIDDLE: Modern Overlap & Grid Split */}
      <div className="container mx-auto px-4 -mt-16 md:-mt-24 relative z-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <article className="prose prose-lg md:prose-xl prose-slate max-w-none bg-white p-6 md:p-12 rounded-2xl shadow-xl border border-slate-100 prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-orange-500">
              <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
            </article>

            {/* Dynamic FAQs */}
            <DynamicFAQ pageType="service" title={post.title} />

            {/* Automated SEO Enhancements: Local Grids */}
            {locations && locations.length > 0 && (
              <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Locations We Serve</h3>
                <div className="flex flex-wrap gap-3">
                  {locations.map((loc, idx) => (
                    <Link key={idx} href={`/locations/${loc.slug || loc.title.toLowerCase().replace(/\s+/g, '-')}`} className="px-5 py-2.5 bg-slate-50 hover:bg-orange-50 text-slate-700 hover:text-orange-600 font-medium rounded-full border border-slate-200 hover:border-orange-200 transition-colors text-sm">
                      {loc.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar Widget */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Request a Call Back</h3>
              <p className="text-slate-600 mb-6 text-sm">Need help with {post.title}? Our experts are here to assist you.</p>
              
              <Link href="https://wa.me/919351132772" target="_blank" className="block w-full bg-[#25D366] hover:bg-[#1fae54] text-white text-center font-bold py-3 px-4 rounded-xl mb-4 transition-colors">
                Chat on WhatsApp
              </Link>
              <Link href="tel:+919351132772" className="block w-full bg-slate-900 hover:bg-slate-800 text-white text-center font-bold py-3 px-4 rounded-xl mb-8 transition-colors">
                Call Us Now
              </Link>
              
              <div className="pt-6 border-t border-slate-100 text-center">
                <Link href="/" className="text-slate-500 hover:text-orange-500 text-sm font-medium transition-colors">
                  &larr; Back to Bikaner Builders Home
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* BOTTOM: Auto-Generated Lead CTA */}
      <BottomCTA />
    </main>
  );
}
