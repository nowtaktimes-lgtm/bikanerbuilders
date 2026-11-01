import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceTrustBlock from '@/components/ServiceTrustBlock';
import OtherServicesLinker from '@/components/OtherServicesLinker';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.bikanerbuilders.in/services/structural-drawing',
  },
  title: "Structural Drawings & RCC Design in Bikaner | Strong Foundations",
  description: "Structural drawings and RCC framing designs in Bikaner. We provide column layouts, foundation details, beam sizing, and reinforcement schedules.",
  keywords: "Structural Drawings & RCC Framing Design in Bikaner, Bikaner Builders, civil contractor in Bikaner, building construction company, ghar ka naksha, structural drawings bikaner",
};

export default function SEOOptimizedServicePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.bikanerbuilders.in" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.bikanerbuilders.in/services" },
      { "@type": "ListItem", "position": 3, "name": "Structural Drawing", "item": "https://www.bikanerbuilders.in/services/structural-drawing" }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Structural Drawing & RCC Design in Bikaner",
    "serviceType": "Structural Drawing & RCC Detailing",
    "provider": {
      "@type": "GeneralContractor",
      "@id": "https://www.bikanerbuilders.in/#organization",
      "name": "Bikaner Builders",
      "url": "https://www.bikanerbuilders.in"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bikaner"
    },
    "description": "Structural drawings and RCC framing designs in Bikaner. We provide column layouts, foundation details, beam sizing, and reinforcement schedules.",
    "url": "https://www.bikanerbuilders.in/services/structural-drawing"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{ "@type": "Question", "name": "Why do I need a structural drawing?", "acceptedAnswer": { "@type": "Answer", "text": "A structural drawing dictates the exact amount of steel and cement needed for columns and beams. It prevents contractors from using too little (causing cracks) or too much (wasting your money)." } },{ "@type": "Question", "name": "Do you provide bar bending schedules (BBS)?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, our structural detailing includes a complete Bar Bending Schedule so your steel fabricators know exactly how to cut and bend the TMT bars with zero wastage." } },{ "@type": "Question", "name": "Are the buildings designed to be earthquake-resistant?", "acceptedAnswer": { "@type": "Answer", "text": "All RCC framing drawings are detailed adhering strictly to relevant Indian Standard (IS) codes, including IS 456 and IS 13920, for ductile detailing and improved earthquake resistance. While no structure can be guaranteed completely earthquake-proof, proper detailing significantly minimizes risk." } }]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="pt-20">
        
        {/* SEO Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
          <Image
            src="/assets/seo_structural.jpg"
            alt="Structural Drawings & RCC Detailing in Bikaner - Bikaner Builders"
            title="Structural Drawings & RCC Detailing in Bikaner"
            fill
            priority
            className="object-cover opacity-30"
          sizes="(max-width: 768px) 100vw, 578px" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
          
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-xl leading-tight">
              Expert Structural Engineering & Drawings in Bikaner
            </h1>
            <h2 className="text-xl md:text-2xl text-orange-400 font-bold max-w-3xl mx-auto mb-8 drop-shadow-md">
              Structural drawings and RCC design in Bikaner. We provide column layouts, foundation details, beam sizing, and structural safety drawings for buildings.
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
                  <Image src="/assets/seo_structural.jpg" alt="RCC Structural Engineering Blueprint Drawings" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 578px" />
                </div>

                <h2 className="text-3xl font-black text-slate-900 mb-6 border-b-4 border-orange-500 pb-4 inline-block">
                  Detailed Structural Drawings for Safe Buildings in Bikaner
                </h2>
                <p className="text-slate-700 leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: `A beautiful house means nothing without a solid foundation. We provide detailed <strong class="text-slate-900">structural drawings and RCC designs</strong> in Bikaner. Working in coordination with qualified structural engineers, our drawings cover load-bearing coordination, column positioning, beam sizes, and steel reinforcement details to ensure your home is built on a sound and safe framework.` }} />
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Foundation Details & Ground Conditions
                </h3>
                <p className="text-slate-700 leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: `Bikaner has unique sandy soil conditions. Our structural planning and construction team coordinates foundation depth and footing layouts suited to local ground conditions. Where required for multi-story or heavy structures, specialized geotechnical soil testing can be commissioned. We provide complete working drawings for the steel binding team to minimize wastage of TMT bars.` }} />
                
                
                
                {/* 1. Elite Process Section */}
                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  Our Structural Detailing & Coordination Process
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: "The safety of your family depends on the hidden skeleton of your building. Our house planning and construction team coordinates with qualified structural engineers to deliver durable, code-compliant, and economically optimized structural drawings." }}></p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">01</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Foundation Planning & Site Assessment</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Bikaner&apos;s sandy soil requires appropriate foundation depth. We evaluate visible site conditions and coordinate with structural engineers to detail isolated, combined, or raft footings suited to the plot.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">02</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Load Path & Structural Coordination</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Structural drawings are planned to carry dead loads (masonry and concrete), live loads (occupants and furniture), and regional environmental forces in accordance with Indian Standard norms.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">03</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Column & Beam Placement</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">We coordinate column and beam locations with your 2D floor plan so structural elements integrate cleanly without obstructing living spaces or doors.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">04</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Bar Bending Schedule (BBS)</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">We provide clear fabrication drawings and Bar Bending Schedules (BBS) to guide steel binders on site, preventing cutting errors and material wastage.</p>
                  </div>
                </div>

                {/* 2. Materials/Tech Section */}
                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  Software Coordination & Code Standards
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: "We do not rely on guesswork or thumb rules. Structural drawings are detailed following standard structural engineering principles and Indian Standard codes to support safe house construction in Bikaner." }}></p>
                <ul className="space-y-4 mb-12 list-none pl-0">
                  
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">Structural Modeling &amp; Analysis</strong>
                      <span className="text-slate-600 text-sm">Where project scope and height require computational structural modeling (such as for multi-story residential frames or commercial spans), calculations are performed by qualified structural engineering consultants using industry software like STAAD.Pro or ETABS based on verified site loads.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">Applicable IS Code Compliance</strong>
                      <span className="text-slate-600 text-sm">Framing drawings and reinforcement detailing adhere to applicable Bureau of Indian Standards codes, including IS 456 (plain and reinforced concrete) and IS 13920 (ductile design for seismic zones), as specified by the structural consultant.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">Steel Optimization</strong>
                      <span className="text-slate-600 text-sm">Uncalculated thumb rules often lead either to risky under-reinforcement or expensive over-design. Calculated detailing provides appropriate steel reinforcement for safety and economy.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">Zone-Specific Seismic Detailing</strong>
                      <span className="text-slate-600 text-sm">Bikaner falls in Seismic Zone III. Structural drawings incorporate appropriate beam-column junction detailing and stirrup spacing to improve earthquake resistance.</span>
                    </div>
                  </li>
                </ul>

                {/* 3. Why Choose Us Section */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl my-12 text-white not-prose">
                  <h3 className="text-2xl md:text-3xl font-black mb-6 text-white leading-tight">
                    Why Proper Structural Drawings Matter
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-8">
                    Never let an unguided thekedar guess column and beam sizes. Inadequate reinforcement compromises safety, while uncalculated over-reinforcement wastes money. Structural drawings provide clarity and peace of mind.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">Engineered Framing Plans</strong>
                        <span className="text-slate-400 text-sm">Drawings are developed based on standard structural load paths and engineering principles.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">Material Efficiency</strong>
                        <span className="text-slate-400 text-sm">Proper reinforcement detailing helps prevent costly over-ordering of steel and cement.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">Structural Durability</strong>
                        <span className="text-slate-400 text-sm">Designed to support multi-story loads safely and reliably over time.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">On-Site Checking Support</strong>
                        <span className="text-slate-400 text-sm">For our turnkey projects, our site supervisors verify reinforcement spacing and shuttering against the approved structural drawings prior to slab casting.</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cost Guide CTA */}
                <div className="bg-orange-50 rounded-2xl p-6 md:p-8 mt-12 mb-8 border border-orange-100 shadow-sm text-center">
                  <p className="text-slate-800 text-lg mb-6 leading-relaxed">
                    Before finalizing your structural design, estimate your overall project budget with our <Link href="/cost" className="text-orange-600 font-bold hover:underline">2026 House Construction Cost Guide for Bikaner</Link>.
                  </p>
                  <Link href="/cost" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition-transform hover:-translate-y-1">
                    Calculate Construction Cost
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>

                <ServiceTrustBlock slug="structural-drawing" />
              </article>
              
              <OtherServicesLinker currentSlug="structural-drawing" />
              
              {/* FAQ Schema Section */}
              <div className="mt-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <h2 className="text-3xl font-black text-slate-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">Why do I need a structural drawing?</h3><p className="text-slate-600">A structural drawing dictates the exact amount of steel and cement needed for columns and beams. It prevents contractors from using too little (causing cracks) or too much (wasting your money).</p></div>
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">Do you provide bar bending schedules (BBS)?</h3><p className="text-slate-600">Yes, our structural detailing includes a complete Bar Bending Schedule so your steel fabricators know exactly how to cut and bend the TMT bars with zero wastage.</p></div>
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">Are the buildings designed to be earthquake-resistant?</h3><p className="text-slate-600">All RCC framing drawings are detailed adhering strictly to relevant Indian Standard (IS) codes, including IS 456 and IS 13920, for ductile detailing and improved earthquake resistance. While no structure can be guaranteed completely earthquake-proof, proper detailing significantly minimizes risk.</p></div>
                </div>
              </div>
            </div>
            
            {/* Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-2">Book a Free Site Visit</h3>
                <p className="text-slate-600 mb-8 text-base">Our project team will visit your plot in Bikaner and provide a free site consultation.</p>
                
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

