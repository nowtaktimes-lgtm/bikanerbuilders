import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceTrustBlock from '@/components/ServiceTrustBlock';
import OtherServicesLinker from '@/components/OtherServicesLinker';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Expert 2D Vastu Naksha & Floor Plans in Bikaner",
  description: "Get a 100% Vastu-compliant 2D house naksha in Bikaner. Expert architects for residential duplex, commercial shops, and plot mapping.",
  keywords: "100% Vastu-Compliant 2D Naksha in Bikaner, Bikaner Builders, top civil contractor in Bikaner, best building construction company near me, ghar ka naksha, architects in bikaner",
};

export default function SEOOptimizedServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Architectural Design",
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
      "telephone": "+91-93765-90313",
      "url": "https://www.bikanerbuilders.in"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bikaner"
    },
    "description": "Get a 100% Vastu-compliant 2D house naksha in Bikaner. Expert architects for residential duplex, commercial shops, and plot mapping."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{ "@type": "Question", "name": "Do you make 2D nakshas according to Vastu?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, all our 2D floor plans and house layouts are 100% strictly designed according to Vastu Shastra principles by our expert architects." } },{ "@type": "Question", "name": "How much time does it take to get a 2D floor plan?", "acceptedAnswer": { "@type": "Answer", "text": "Usually, we deliver the first draft of your 2D naksha within 2 to 3 days after understanding your requirements and plot dimensions." } },{ "@type": "Question", "name": "Can you design for commercial properties?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we design complex commercial floor plans, shop layouts, and office spaces maximizing carpet area and utility." } }]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="pt-20">
        
        {/* SEO Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
          <Image
            src="/assets/seo_2d_naksha.jpg"
            alt="100% Vastu-Compliant 2D Naksha in Bikaner - Bikaner Builders"
            title="100% Vastu-Compliant 2D Naksha in Bikaner"
            fill
            priority
            className="object-cover opacity-30"
          sizes="(max-width: 768px) 100vw, 578px" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
          
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-xl leading-tight">
              100% Vastu-Compliant 2D Naksha in Bikaner
            </h1>
            <h2 className="text-xl md:text-2xl text-orange-400 font-bold max-w-3xl mx-auto mb-8 drop-shadow-md">
              Get a 100% Vastu-compliant 2D house naksha in Bikaner. Expert architects for residential duplex, commercial shops, and plot mapping.
            </h2>
            <Link href="tel:9376590313" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xl px-10 py-5 rounded-full shadow-[0_4px_25px_rgba(234,88,12,0.6)] transition-all hover:-translate-y-1">
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
                  <Image src="/assets/seo_2d_naksha.jpg" alt="Professional 2D Vastu Floor Plan Blueprint" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 578px" />
                </div>

                <h2 className="text-3xl font-black text-slate-900 mb-6 border-b-4 border-orange-500 pb-4 inline-block">
                  Best Ghar Ka Naksha & Floor Plan Creators in Bikaner
                </h2>
                <p className="text-slate-700 leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: `Before starting any construction, a perfect <strong class="text-slate-900">ghar ka naksha (floor plan)</strong> is crucial. We are the top architects in Bikaner offering 2D floor plans, architectural layouts, and plot mapping. We optimize every inch of your space for maximum ventilation, natural lighting, and cross-ventilation, which is essential in Rajasthan.` }} />
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Vastu Shastra Experts for Home & Commercial
                </h3>
                <p className="text-slate-700 leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: `A Vastu-compliant home brings peace and prosperity. Our civil engineers and Vastu experts carefully position the kitchen (Agni Kund), master bedroom, pooja room, and water tanks according to strict Vastu principles. We design nakshas for 20x40, 30x60, and custom plot sizes.` }} />
                
                
                
                {/* 1. Elite Process Section */}
                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  Our Scientific Approach to 2D Plot Mapping
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: "Designing a <strong class=\"text-slate-900\">Ghar Ka Naksha</strong> isn't just about drawing lines; it's about optimizing space, air, and energy. Our elite architects in Bikaner follow a strict protocol to ensure your home is breathable, spacious, and 100% Vastu compliant." }}></p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">01</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Plot & Topography Analysis</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">We start by analyzing your plot dimensions, neighboring structures, and sun path in Bikaner to ensure natural lighting and optimal ventilation.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">02</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Vastu Shastra Integration</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Our Vastu experts carefully align the Brahmasthan, kitchen (Agni Kund), and entrances to channel positive energy and prosperity into your home.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">03</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Space Optimization</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">We maximize your carpet area, eliminating dead spaces and useless corridors. Every inch of your expensive plot is utilized efficiently.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">04</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Precision Drafting & Delivery</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Using advanced AutoCAD software, we deliver millimeter-perfect floor plans that local civil contractors can easily understand and execute.</p>
                  </div>
                </div>

                {/* 2. Materials/Tech Section */}
                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  The Tools & Principles Behind Our Nakshas
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: "A flawless foundation starts with flawless planning. As the premier <strong class=\"text-slate-900\">architectural firm in Bikaner</strong>, we rely on industry-standard software and ancient principles." }}></p>
                <ul className="space-y-4 mb-12 list-none pl-0">
                  
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">AutoCAD Mastery</strong>
                      <span className="text-slate-600 text-sm">We use the latest version of Autodesk AutoCAD for precision drafting, ensuring accurate wall thicknesses and room dimensions.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">Rajasthan Climate Focus</strong>
                      <span className="text-slate-600 text-sm">Our layouts emphasize cross-ventilation and shaded courtyards (chowks) to naturally cool your home during Bikaner&apos;s scorching summers.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">Structural Feasibility</strong>
                      <span className="text-slate-600 text-sm">We don&apos;t just draw pretty pictures. Every 2D plan is verified by our structural engineers to ensure it can actually be built safely.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">Digital & Print Delivery</strong>
                      <span className="text-slate-600 text-sm">You receive high-resolution PDF blueprints and raw DWG files, along with printed A3 copies for your contractor team on-site.</span>
                    </div>
                  </li>
                </ul>

                {/* 3. Why Choose Us Section */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl my-12 text-white not-prose">
                  <h3 className="text-2xl md:text-3xl font-black mb-6 text-white leading-tight">
                    Why Choose Bikaner Builders for Your House Map?
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-8">
                    Avoid the costly mistakes of hiring inexperienced draftsmen. A poorly planned map can cost you lakhs in wasted space and bad energy. Here is why Bikaner&apos;s elite choose us for their architectural layouts.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">100% Custom Designs</strong>
                        <span className="text-slate-400 text-sm">We never copy-paste templates. Your naksha is uniquely tailored to your lifestyle.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">Local Building By-Laws</strong>
                        <span className="text-slate-400 text-sm">We ensure all setbacks and heights comply with UIT Bikaner regulations.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">Lightning Fast Delivery</strong>
                        <span className="text-slate-400 text-sm">Get your initial draft within 48-72 hours without compromising on quality.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">Free Revisions</strong>
                        <span className="text-slate-400 text-sm">We tweak the layout until you are 100% satisfied with the floor plan.</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cost Guide CTA */}
                <div className="bg-orange-50 rounded-2xl p-6 md:p-8 mt-12 mb-8 border border-orange-100 shadow-sm text-center">
                  <p className="text-slate-800 text-lg mb-6 leading-relaxed">
                    Planning your house design? Check the <Link href="/cost" className="text-orange-600 font-bold hover:underline">Bikaner House Construction Cost Guide</Link> before finalizing your floor plan and construction budget.
                  </p>
                  <Link href="/cost" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition-transform hover:-translate-y-1">
                    Calculate Construction Cost
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>

                <ServiceTrustBlock slug="2d-naksha" />
              </article>
              
              <OtherServicesLinker currentSlug="2d-naksha" />
              
              {/* FAQ Schema Section */}
              <div className="mt-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <h2 className="text-3xl font-black text-slate-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">Do you make 2D nakshas according to Vastu?</h3><p className="text-slate-600">Yes, all our 2D floor plans and house layouts are 100% strictly designed according to Vastu Shastra principles by our expert architects.</p></div>
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">How much time does it take to get a 2D floor plan?</h3><p className="text-slate-600">Usually, we deliver the first draft of your 2D naksha within 2 to 3 days after understanding your requirements and plot dimensions.</p></div>
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">Can you design for commercial properties?</h3><p className="text-slate-600">Yes, we design complex commercial floor plans, shop layouts, and office spaces maximizing carpet area and utility.</p></div>
                </div>
              </div>
            </div>
            
            {/* Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-2">Book a Free Site Visit</h3>
                <p className="text-slate-600 mb-8 text-base">Our senior architect will visit your plot in Bikaner and provide a free consultation.</p>
                
                <Link href="https://wa.me/919376590313" target="_blank" className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1fae54] text-white font-black text-lg py-4 px-4 rounded-xl mb-4 transition-transform hover:-translate-y-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008z" /></svg>
                  WhatsApp Now
                </Link>
                <Link href="tel:+919376590313" className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-lg py-4 px-4 rounded-xl mb-6 transition-transform hover:-translate-y-1">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call +91 93765 90313
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

