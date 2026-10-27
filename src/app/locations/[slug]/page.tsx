import { notFound } from 'next/navigation';
import { getLocationBySlug, getAllLocations } from '@/lib/api';
import DynamicPageHero from '@/components/DynamicPageHero';
import BottomCTA from '@/components/BottomCTA';
import DynamicFAQ from '@/components/DynamicFAQ';
import ClientMapWrapper from '@/components/ClientMapWrapper';
import Link from 'next/link';
import { formatLocationName } from '@/lib/formatters';
import { getFounderQuote } from '@/lib/quotes';
import { generateLocationServiceSchema } from '@/lib/schema';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getLocationBySlug(resolvedParams.slug);
  
  if (!post) {
    return { title: 'Not Found' };
  }
  
  const title = post.seo?.title || post.title;
  let description = post.seo?.description || post.seo?.metaDesc || '';
  if (!description) {
    // Basic fallback description
    description = `Premium construction and architectural services in ${post.title}. 100% Vastu-compliant designs and turnkey solutions by Bikaner Builders.`;
    if (description.length > 150) description = description.substring(0, 147) + '...';
  }
  
  const imageUrl = post.featuredImage?.node?.sourceUrl || 'https://www.bikanerbuilders.in/_next/image?url=%2Fassets%2Fog_bikaner_builders_v2.jpg&w=1200&q=75';

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.bikanerbuilders.in/locations/${resolvedParams.slug}`
    },
    openGraph: {
      title,
      description,
      url: `https://www.bikanerbuilders.in/locations/${resolvedParams.slug}`,
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

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getLocationBySlug(resolvedParams.slug);
  const locations = await getAllLocations();
  const formattedLocationName = formatLocationName(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const locationUrl = `https://www.bikanerbuilders.in/locations/${resolvedParams.slug}`;
  const locationServiceSchema = generateLocationServiceSchema({
    locationName: formattedLocationName,
    url: locationUrl,
    description: post.seo?.description || `Professional house construction, architectural planning, 2D floor plans, and turnkey building services in ${formattedLocationName}, Bikaner.`
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.bikanerbuilders.in" },
      { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://www.bikanerbuilders.in/locations" },
      { "@type": "ListItem", "position": 3, "name": formattedLocationName, "item": locationUrl }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* TOP: Auto-Generated Hero Banner */}
      <DynamicPageHero title={post.title} breadcrumbTitle={formattedLocationName} image={post.featuredImage?.node?.sourceUrl} category="Locations" categoryLink="/locations" />
      
      {/* MIDDLE: Modern Overlap & Grid Split */}
      <div className="container mx-auto px-4 -mt-16 md:-mt-24 relative z-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <article className="prose max-w-none bg-white p-6 md:p-12 rounded-2xl shadow-xl border border-slate-100 prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-orange-500">
              <div className="text-[17px] leading-[1.8] text-slate-700 [&>p]:mb-5 [&>p:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: (post.content || '').replace(/<img /g, '<img sizes="(max-width: 768px) 100vw, 578px" ') }} />
              {/* Cost Guide CTA */}
              <div className="bg-orange-50 rounded-2xl p-6 md:p-8 mt-12 border border-orange-100 shadow-sm text-center not-prose">
                <p className="text-slate-800 text-lg mb-6 leading-relaxed font-normal">
                  Planning to build in {formattedLocationName}? Check our <Link href="/cost" className="text-orange-600 font-bold hover:underline">Bikaner House Construction Cost Guide</Link> for indicative 2026 construction rates and budgeting factors.
                </p>
                <Link href="/cost" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition-transform hover:-translate-y-1">
                  Calculate Construction Cost
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </article>
            {/* E-E-A-T Block */}
            <div className="mt-8 bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl shadow-xl text-white">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 flex-shrink-0 border-2 border-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.5)]">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-2">Why {formattedLocationName} Residents Choose Us</h2>
                  <p className="text-slate-300 mb-3 text-sm leading-relaxed">
                    "{getFounderQuote(resolvedParams.slug, formattedLocationName)}"
                  </p>
                  <p className="font-bold text-orange-400 text-sm">— Rishad Khan, Founder & Head Civil Engineer</p>
                </div>
              </div>
            </div>


            {/* Construction & Design Services in Location */}
            <div className="mt-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Construction &amp; Design Services in {formattedLocationName}
              </h2>
              <p className="text-slate-600 mb-6 text-sm md:text-base leading-relaxed">
                Whether you are planning a new residential build or architectural design in {formattedLocationName}, our team coordinates your project from initial planning to on-site execution:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link 
                  href="/architect-in-bikaner" 
                  className="p-4 rounded-xl border border-slate-200 hover:border-orange-500 bg-slate-50/50 hover:bg-orange-50/30 transition-all group"
                >
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 mb-1 flex items-center justify-between">
                    Architect in Bikaner
                    <span className="text-orange-500">&rarr;</span>
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-normal">
                    Comprehensive house planning, space layout, and Vastu-oriented design guidance for projects in {formattedLocationName}.
                  </p>
                </Link>

                <Link 
                  href="/services/turnkey-construction" 
                  className="p-4 rounded-xl border border-slate-200 hover:border-orange-500 bg-slate-50/50 hover:bg-orange-50/30 transition-all group"
                >
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 mb-1 flex items-center justify-between">
                    Turnkey House Construction
                    <span className="text-orange-500">&rarr;</span>
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-normal">
                    Complete with-material residential house building with dedicated site supervision and transparent BOQ pricing.
                  </p>
                </Link>

                <Link 
                  href="/services/2d-naksha" 
                  className="p-4 rounded-xl border border-slate-200 hover:border-orange-500 bg-slate-50/50 hover:bg-orange-50/30 transition-all group"
                >
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 mb-1 flex items-center justify-between">
                    2D House Plan &amp; Vastu Naksha
                    <span className="text-orange-500">&rarr;</span>
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-normal">
                    Custom residential floor plans and room layouts optimized for local plot dimensions and natural ventilation.
                  </p>
                </Link>

                <Link 
                  href="/services/3d-elevation" 
                  className="p-4 rounded-xl border border-slate-200 hover:border-orange-500 bg-slate-50/50 hover:bg-orange-50/30 transition-all group"
                >
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 mb-1 flex items-center justify-between">
                    3D Front Elevation Design
                    <span className="text-orange-500">&rarr;</span>
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-normal">
                    Photorealistic 3D exterior concepts to visualize your facade materials and front elevation before building.
                  </p>
                </Link>
              </div>
            </div>

            {/* Dynamic FAQs */}
            <DynamicFAQ pageType="location" title={formattedLocationName} />

            <ClientMapWrapper locationName={formattedLocationName} />

            {/* Automated SEO Enhancements: Local Grids */}
            {locations && locations.length > 0 && (
              <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Other Locations We Serve</h2>
                <div className="flex flex-wrap gap-3">
                  {locations.filter(loc => loc.slug !== resolvedParams.slug).map((loc, idx) => (
                    <Link key={idx} href={`/locations/${loc.slug}`} className="px-5 py-2.5 bg-slate-50 hover:bg-orange-50 text-slate-700 hover:text-orange-600 font-medium rounded-full border border-slate-200 hover:border-orange-200 transition-colors text-sm">
                      {formatLocationName(loc.slug)}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar Widget */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Start Your Project in {formattedLocationName}</h3>
              <p className="text-slate-600 mb-6 text-sm">Need construction or architectural services in {formattedLocationName}? Our experts are here to assist you.</p>
              
              <Link href="https://wa.me/919376590313" target="_blank" className="block w-full bg-[#25D366] hover:bg-[#1fae54] text-white text-center font-bold py-3 px-4 rounded-xl mb-4 transition-colors">
                Chat on WhatsApp
              </Link>
              <Link href="tel:+919376590313" className="block w-full bg-slate-900 hover:bg-slate-800 text-white text-center font-bold py-3 px-4 rounded-xl mb-8 transition-colors">
                Call Us Now
              </Link>
              
              <div className="pt-6 border-t border-slate-100 text-center">
                <Link href="/" className="text-slate-500 hover:text-orange-500 text-sm font-medium transition-colors">
                  &larr; Construction Company &amp; Builders in Bikaner
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
