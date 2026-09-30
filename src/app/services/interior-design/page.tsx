import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Best Interior Designers & POP Contractors in Bikaner",
  description: "Top interior designers in Bikaner. Get luxury false ceiling, gypsum POP work, modular kitchens, and residential interior decoration.",
  keywords: "Luxury POP & Interior Designers in Bikaner, Bikaner Builders, top civil contractor in Bikaner, best building construction company near me, ghar ka naksha, architects in bikaner",
};

export default function SEOOptimizedServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Interior Design",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Bikaner Builders",
      "image": "https://www.bikanerbuilders.in/icon.svg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No 04, Opp Govt School, Napasar Rd, Ridmalsar Sipahiyan",
        "addressLocality": "Bikaner",
        "addressRegion": "Rajasthan",
        "postalCode": "334022",
        "addressCountry": "IN"
      },
      "telephone": "+919351132772",
      "url": "https://www.bikanerbuilders.in"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bikaner"
    },
    "description": "Top interior designers in Bikaner. Get luxury false ceiling, gypsum POP work, modular kitchens, and residential interior decoration."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{ "@type": "Question", "name": "Do you design modular kitchens in Bikaner?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we are experts in designing and installing modern, highly durable modular kitchens with Hettich/Godrej fittings, acrylic finishes, and smart storage solutions." } },{ "@type": "Question", "name": "What types of false ceilings do you do?", "acceptedAnswer": { "@type": "Answer", "text": "We specialize in Gypsum board false ceilings, Grid ceilings, POP designs, and PVC wall/ceiling panels, complete with modern profile lighting." } },{ "@type": "Question", "name": "Can you work on existing homes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer complete interior renovation and remodeling services for old homes, flats, and commercial shops in Bikaner." } }]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `JSON.stringify(serviceSchema)` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `JSON.stringify(faqSchema)` }} />
      
      <div className="pt-20">
        
        {/* SEO Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
          <Image
            src="/assets/seo_interior.jpg"
            alt="Luxury POP & Interior Designers in Bikaner - Bikaner Builders"
            title="Luxury POP & Interior Designers in Bikaner"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
          
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-xl leading-tight">
              Luxury POP & Interior Designers in Bikaner
            </h1>
            <h2 className="text-xl md:text-2xl text-orange-400 font-bold max-w-3xl mx-auto mb-8 drop-shadow-md">
              Top interior designers in Bikaner. Get luxury false ceiling, gypsum POP work, modular kitchens, and residential interior decoration.
            </h2>
            <Link href="tel:9351132772" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xl px-10 py-5 rounded-full shadow-[0_4px_25px_rgba(234,88,12,0.6)] transition-all hover:-translate-y-1">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008z" /></svg>
              Get a Free Quote on WhatsApp
            </Link>
          </div>
        </section>

        {/* LSI Keyword Rich Content Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg md:prose-xl prose-slate max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">

                <div className="relative w-full h-[400px] mb-10 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <Image src="/assets/seo_interior.jpg" alt="Luxury POP False Ceiling and Interior Design" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>

                <h2 className="text-3xl font-black text-slate-900 mb-6 border-b-4 border-orange-500 pb-4 inline-block">
                  Transform Your Home with Top Interior Decorators in Bikaner
                </h2>
                <p className="text-slate-700 leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: `Your search for the <strong class="text-slate-900">best interior designer in Bikaner</strong> ends here. We provide complete interior solutions including modular kitchens, modern wardrobes, TV units, luxury living room setups, and premium bathroom designs. Our experienced carpenters and interior experts bring your vision to life.` }} />
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Expert False Ceiling & Gypsum POP Work
                </h3>
                <p className="text-slate-700 leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: `A beautiful ceiling changes the entire vibe of a room. As the leading POP contractors in Bikaner, we install modern gypsum false ceilings, LED cove lighting designs, PVC panels, and intricate POP moldings. We ensure flawless finishing with laser alignment.` }} />
                
                {/* Local Trust Block */}
                <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-inner mt-8">
                  <h4 className="text-xl font-bold text-orange-500 mb-3">Rated #1 by Bikaner Residents</h4>
                  <p className="text-slate-300 text-base">
                    Don&apos;t risk your hard-earned money with unverified contractors from random aggregator sites or unverified local contractor lists. Bikaner Builders is a registered, trusted, and highly-rated civil engineering firm in Bikaner. We guarantee 100% transparent pricing and flawless execution.
                  </p>
                </div>
              </article>
              
              {/* FAQ Schema Section */}
              <div className="mt-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <h2 className="text-3xl font-black text-slate-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">Do you design modular kitchens in Bikaner?</h3><p className="text-slate-600">Yes, we are experts in designing and installing modern, highly durable modular kitchens with Hettich/Godrej fittings, acrylic finishes, and smart storage solutions.</p></div>
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">What types of false ceilings do you do?</h3><p className="text-slate-600">We specialize in Gypsum board false ceilings, Grid ceilings, POP designs, and PVC wall/ceiling panels, complete with modern profile lighting.</p></div>
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">Can you work on existing homes?</h3><p className="text-slate-600">Yes! We offer complete interior renovation and remodeling services for old homes, flats, and commercial shops in Bikaner.</p></div>
                </div>
              </div>
            </div>
            
            {/* Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-2">Book a Free Site Visit</h3>
                <p className="text-slate-600 mb-8 text-base">Our senior architect will visit your plot in Bikaner and provide a free consultation.</p>
                
                <Link href="https://wa.me/919351132772" target="_blank" className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1fae54] text-white font-black text-lg py-4 px-4 rounded-xl mb-4 transition-transform hover:-translate-y-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008z" /></svg>
                  WhatsApp Now
                </Link>
                <Link href="tel:+919351132772" className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-lg py-4 px-4 rounded-xl mb-6 transition-transform hover:-translate-y-1">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call +91-9351132772
                </Link>
                
                <div className="pt-6 border-t border-slate-100 text-center">
                  <p className="text-slate-500 text-sm font-medium">Office: Ridmalsar Sipahiyan, Bikaner</p>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </>
  );
}

