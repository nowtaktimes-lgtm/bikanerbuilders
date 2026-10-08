import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ServiceTrustBlock from '@/components/ServiceTrustBlock';
import OtherServicesLinker from '@/components/OtherServicesLinker';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Turnkey Construction Services in Bikaner | With Material Contractors",
  description: "Looking for turnkey building contractors in Bikaner? We offer complete house construction with material, 3D elevation, mapping, and finishing. Get BOQ today.",
  alternates: {
    canonical: 'https://bikanerbuilders.in/services/turnkey-construction',
  },
  openGraph: {
    title: 'Turnkey Construction Services in Bikaner | With Material Contractors',
    description: 'Looking for turnkey building contractors in Bikaner? We offer complete house construction with material, 3D elevation, mapping, and finishing. Get BOQ today.',
    images: [
      {
        url: 'https://bikanerbuilders.in/assets/turnkey_project_handover.jpg',
        width: 1200,
        height: 630,
        alt: 'Turnkey Construction Project Handover Bikaner',
      },
    ],
  }
};

export default function TurnkeyConstructionPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is included in Turnkey Construction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Turnkey means complete peace of mind. It includes everything from 2D mapping, 3D elevation, material procurement (steel, cement, bricks), labor management, plumbing, electrical, to final painting and handover."
        }
      },
      {
        "@type": "Question",
        "name": "What is your construction cost per square foot in Bikaner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our turnkey construction rates are highly competitive and depend on the finishing materials you choose. We offer Standard, Premium, and Luxury packages to fit your budget."
        }
      },
      {
        "@type": "Question",
        "name": "Do you use branded materials?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We strictly use top-tier brands like Tata Tiscon/JSW for steel, UltraTech/Ambuja for cement, and premium wires for electricals. Transparency is our core value."
        }
      }
    ]
  };

  return (
    <>
      <Script id="turnkey-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="pt-20">
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] py-20 md:py-32 flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/turnkey_project_handover.jpg"
            alt="Handing over keys for a completed turnkey house construction in Bikaner"
            title="Turnkey Construction Services"
            fill
            priority
            className="object-cover"
          sizes="(max-width: 768px) 100vw, 578px" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
          
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-xl leading-tight">
              Complete Turnkey Construction Services in Bikaner
            </h1>
            <h2 className="text-xl md:text-2xl text-orange-400 font-bold max-w-3xl mx-auto mb-8 drop-shadow-md">
              Best turnkey construction company in Bikaner. We provide A-to-Z house building contractors with material, civil engineering, and finishing.
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
                  <Image src="/assets/seo_turnkey.jpg" alt="Civil Engineers at Construction Site" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 578px" />
                </div>

                <h2 className="text-3xl font-black text-slate-900 mb-6 border-b-4 border-orange-500 pb-4 inline-block">
                  The Most Trusted Building Contractors in Bikaner
                </h2>
                <p className="text-slate-700 leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: `Looking for the <strong class="text-slate-900">best building construction company near me in Bikaner</strong>? Our turnkey construction (With Material Theka) service means you Don&apos;t have to worry about buying cement, steel, or managing labor. From excavation, foundation, and brickwork to premium finishing, plumbing, and electrical wiring, we handle everything under one roof.` }} />
                
                {/* 1. Elite Construction Process Section */}
                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  Our Elite Construction Process in Bikaner
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Building a home is a milestone, and as the <strong>best construction company in Bikaner</strong>, we ensure the journey is as premium as the final product. Our seamless, 4-step execution model guarantees zero stress for you, delivering architectural excellence directly to your doorstep.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">01</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Site Inspection & Vastu Analysis</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Our senior civil engineers and Vastu experts visit your plot in Bikaner to evaluate soil conditions, sun orientation, and spatial dynamics to lay a flawless foundation.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">02</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">3D Elevation & Planning</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">As a leading luxury architecture firm, our in-house designers create precise 2D floor plans and hyper-realistic 3D elevations, giving you a virtual tour of your future home.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">03</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Structural Execution</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Execution is where a <strong>turnkey home builder in Bikaner</strong> truly shines. We handle all labor, procurement, and heavy machinery, ensuring strict adherence to structural engineering codes.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">04</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Quality Testing & Handover</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Before handing over the keys, your property undergoes rigorous 50+ point quality checks covering plumbing pressures, electrical loads, and finishing perfection.</p>
                  </div>
                </div>

                {/* 2. Premium Materials Section */}
                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  The Premium Materials We Use
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  True luxury and durability come from uncompromised material selection. We believe that top-tier <strong>house construction in Bikaner</strong> requires the highest grade raw materials to withstand the harsh desert climate and stand the test of time.
                </p>
                <ul className="space-y-4 mb-12 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">High-Grade Structural Steel</strong>
                      <span className="text-slate-600 text-sm">We exclusively use Fe550D grade TMT bars from industry leaders like Tata Tiscon or JSW, ensuring maximum earthquake resistance and structural integrity.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">Premium Branded Cement</strong>
                      <span className="text-slate-600 text-sm">For robust foundations and flawless plastering, we rely on top-tier cement brands like UltraTech and Ambuja, expertly mixed to exact ratios.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">Top-Tier Electricals & Plumbing</strong>
                      <span className="text-slate-600 text-sm">Safety is paramount. We install fire-retardant Havells/Polycab wiring and leak-proof Ashirvad/Astral CPVC piping for lifetime durability.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">Luxury Interior Finishes</strong>
                      <span className="text-slate-600 text-sm">From premium vitrified tiles and Italian marble to high-end bathroom fittings (Jaquar/Kohler), every finish reflects elite craftsmanship.</span>
                    </div>
                  </li>
                </ul>

                {/* 3. Why Choose Us Section */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl my-12 text-white not-prose">
                  <h3 className="text-2xl md:text-3xl font-black mb-6 text-white leading-tight">
                    Why Choose Bikaner Builders Over Local Contractors?
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-8">
                    High-Net-Worth Individuals (HNIs) and NRI clients choose us because they value their time and demand perfection. Working with unverified local contractors often leads to budget overruns, delayed timelines, and substandard quality. As the premier <strong>turnkey home builder in Bikaner</strong>, we flip the script.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">Single Point of Contact</strong>
                        <span className="text-slate-400 text-sm">No more chasing 10 different vendors.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">Zero Hidden Costs</strong>
                        <span className="text-slate-400 text-sm">Fixed transparent BOQ before we start.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">Strict Timelines</strong>
                        <span className="text-slate-400 text-sm">On-time delivery, guaranteed.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">In-House Architects</strong>
                        <span className="text-slate-400 text-sm">Design and execution under one roof.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cost Guide CTA */}
                <div className="bg-orange-50 rounded-2xl p-6 md:p-8 mt-12 mb-8 border border-orange-100 shadow-sm text-center">
                  <p className="text-slate-800 text-lg mb-6 leading-relaxed">
                    Planning a turnkey home? Check our <Link href="/cost" className="text-orange-600 font-bold hover:underline">2026 House Construction Cost Guide for Bikaner</Link> to understand indicative construction rates, inclusions and budgeting.
                  </p>
                  <Link href="/cost" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition-transform hover:-translate-y-1">
                    Calculate Construction Cost
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>

                <ServiceTrustBlock slug="turnkey-construction" />
              </article>
              
              <OtherServicesLinker currentSlug="turnkey-construction" />
              
              {/* FAQ Schema Section */}
              <div className="mt-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <h2 className="text-3xl font-black text-slate-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">What is included in Turnkey Construction?</h3><p className="text-slate-600">Turnkey means complete peace of mind. It includes everything from 2D mapping, 3D elevation, material procurement (steel, cement, bricks), labor management, plumbing, electrical, to final painting and handover.</p></div>
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">What is your construction cost per square foot in Bikaner?</h3><p className="text-slate-600">Our turnkey construction rates are highly competitive and depend on the finishing materials you choose. We offer Standard, Premium, and Luxury packages to fit your budget.</p></div>
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">Do you use branded materials?</h3><p className="text-slate-600">Absolutely. We strictly use top-tier brands like Tata Tiscon/JSW for steel, UltraTech/Ambuja for cement, and premium wires for electricals. Transparency is our core value.</p></div>
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
