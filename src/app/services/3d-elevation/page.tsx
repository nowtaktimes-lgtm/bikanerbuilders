import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceTrustBlock from '@/components/ServiceTrustBlock';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Top 3D Front Elevation Designers in Bikaner | Bikaner Builders",
  description: "Best 3D front elevation design for residential and commercial buildings in Bikaner. Modern, classic, and Vastu-compliant house front designs.",
  keywords: "Premium 3D Front Elevation Designers in Bikaner, Bikaner Builders, top civil contractor in Bikaner, best building construction company near me, ghar ka naksha, architects in bikaner",
};

export default function SEOOptimizedServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Architectural Rendering",
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
    "description": "Best 3D front elevation design for residential and commercial buildings in Bikaner. Modern, classic, and Vastu-compliant house front designs."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{ "@type": "Question", "name": "How much does a 3D front elevation cost in Bikaner?", "acceptedAnswer": { "@type": "Answer", "text": "The cost depends on the size of the frontage and design details. We offer highly affordable rates for residential 3D elevations starting from just a few thousand rupees with complete material detailing." } },{ "@type": "Question", "name": "Do you provide material details with the 3D design?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We are not just 3D designers, we are a complete building construction company in Bikaner. We provide complete specifications for tiles, HPL, glass, and paint codes." } },{ "@type": "Question", "name": "Is the elevation Vastu compliant?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We ensure balcony placements, main gate positions, and window directions perfectly align with Vastu Shastra." } }]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="pt-20">
        
        {/* SEO Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
          <Image
            src="/assets/seo_3d_elevation.jpg"
            alt="Premium 3D Front Elevation Designers in Bikaner - Bikaner Builders"
            title="Premium 3D Front Elevation Designers in Bikaner"
            fill
            priority
            className="object-cover opacity-30"
          sizes="(max-width: 768px) 100vw, 578px" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
          
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-xl leading-tight">
              Premium 3D Front Elevation Designers in Bikaner
            </h1>
            <h2 className="text-xl md:text-2xl text-orange-400 font-bold max-w-3xl mx-auto mb-8 drop-shadow-md">
              Best 3D front elevation design for residential and commercial buildings in Bikaner. Modern, classic, and Vastu-compliant house front designs.
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
                  <Image src="/assets/seo_3d_elevation.jpg" alt="Modern 3D Front Elevation Villa Design" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 578px" />
                </div>

                <h2 className="text-3xl font-black text-slate-900 mb-6 border-b-4 border-orange-500 pb-4 inline-block">
                  Why We Are The Best 3D Elevation Architects in Bikaner
                </h2>
                <p className="text-slate-700 leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: `Are you searching for the <strong class="text-slate-900">best 3D elevation designers in Bikaner</strong>? Your house exterior is the first impression. We specialize in photorealistic 3D rendering, modern house facades, traditional Rajasthan architectural designs, and commercial building elevations. Whether you need a simple single-floor elevation or a luxurious duplex villa design, our expert architects ensure it is 100% Vastu-compliant and climate-ready for extreme temperatures.` }} />
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Materials & Execution (ACP, HPL, CNC)
                </h3>
                <p className="text-slate-700 leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: `Unlike other civil contractors, we design practical elevations. We use locally available materials in Bikaner like HPL sheets, ACP panels, CNC jali designs, toughened glass, and textured paint to ensure your 3D design can actually be built within your budget.` }} />
                
                
                {/* 1. Elite Process Section */}
                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  Our Hyper-Realistic 3D Elevation Process
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: 'Your home's exterior is its signature. As the leading <strong class="text-slate-900">3D elevation designers in Bikaner</strong>, we transform basic 2D maps into breathtaking, photorealistic 3D visual masterpieces before a single brick is laid.' }}></p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">01</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Aesthetic Consultation</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">We discuss your vision—whether you want a Heritage Rajasthani look with Jodhpur stone, an Ultra-Modern box design, or a classic European villa.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">02</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Wireframing & Massing</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Our 3D artists build the core structural blocks in software to establish the proportions, balconies, and overall silhouette of the building.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">03</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Texture & Material Mapping</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">We apply realistic materials like HPL sheets, CNC-cut MS panels, toughened glass, and textured paint to visualize the exact final finish.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">04</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">High-Fidelity Rendering</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Using advanced ray-tracing engines, we generate stunning day and night renders showcasing realistic lighting, shadows, and landscaping.</p>
                  </div>
                </div>

                {/* 2. Materials/Tech Section */}
                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  The Technology Powering Our 3D Designs
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: 'We don't just provide basic 3D views. We deliver cinematic-quality architectural visualizations using the world's most powerful rendering software.' }}></p>
                <ul className="space-y-4 mb-12 list-none pl-0">
                  
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">3ds Max & V-Ray</strong>
                      <span className="text-slate-600 text-sm">We use industry-leading 3D modeling and rendering engines to create textures and lighting that look indistinguishable from real life.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">Weather-Resistant Styling</strong>
                      <span className="text-slate-600 text-sm">We specify exterior materials (like weather-coat paints and UV-resistant claddings) that won't fade in Bikaner extreme heat and dust.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">Lumion Walkthroughs</strong>
                      <span className="text-slate-600 text-sm">Upgrade your package to include a full 4K video walkthrough, allowing you to virtually fly around your future home.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">Accurate Scaling</strong>
                      <span className="text-slate-600 text-sm">Our 3D models are built strictly to scale based on the 2D naksha, ensuring the design can be 100% replicated in reality.</span>
                    </div>
                  </li>
                </ul>

                {/* 3. Why Choose Us Section */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl my-12 text-white not-prose">
                  <h3 className="text-2xl md:text-3xl font-black mb-6 text-white leading-tight">
                    Why Let Us Design Your Home's Facade?
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-8">
                    A generic front elevation can ruin the appeal of an expensive house. We design striking, landmark-worthy exteriors that drastically increase your property's street value and aesthetic dominance.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">Photorealistic Quality</strong>
                        <span className="text-slate-400 text-sm">See the exact future of your home with zero guesswork or surprises.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">Budget-Aware Design</strong>
                        <span className="text-slate-400 text-sm">We design stunning facades using materials that actually fit your construction budget.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">Heritage & Modern Fusion</strong>
                        <span className="text-slate-400 text-sm">Experts at blending traditional Bikaneri arches with contemporary minimalist glasswork.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg">Material Sourcing Help</strong>
                        <span className="text-slate-400 text-sm">We tell your contractor exactly which tiles, colors, and stones to buy to match the 3D.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ServiceTrustBlock slug="3d-elevation" />
              </article>
              
              {/* FAQ Schema Section */}
              <div className="mt-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <h2 className="text-3xl font-black text-slate-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">How much does a 3D front elevation cost in Bikaner?</h3><p className="text-slate-600">The cost depends on the size of the frontage and design details. We offer highly affordable rates for residential 3D elevations starting from just a few thousand rupees with complete material detailing.</p></div>
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">Do you provide material details with the 3D design?</h3><p className="text-slate-600">Yes! We are not just 3D designers, we are a complete building construction company in Bikaner. We provide complete specifications for tiles, HPL, glass, and paint codes.</p></div>
                  <div className="border-b border-slate-200 pb-6"><h3 className="text-xl font-bold text-slate-900 mb-2">Is the elevation Vastu compliant?</h3><p className="text-slate-600">Absolutely. We ensure balcony placements, main gate positions, and window directions perfectly align with Vastu Shastra.</p></div>
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

