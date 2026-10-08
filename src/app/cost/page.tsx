import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ServiceTrustBlock from '@/components/ServiceTrustBlock';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "House Construction Cost in Bikaner 2026 | Price Per Sq Ft",
  description: "Check the exact house construction cost in Bikaner. Compare standard, premium, and luxury rates per square foot with detailed material specifications.",
  alternates: {
    canonical: 'https://bikanerbuilders.in/cost',
  },
  openGraph: {
    title: 'House Construction Cost in Bikaner 2026 | Price Per Sq Ft',
    description: 'Check the exact house construction cost in Bikaner. Compare standard, premium, and luxury rates per square foot with detailed material specifications.',
    images: [
      {
        url: 'https://bikanerbuilders.in/assets/luxury-house-construction-cost-bikaner.webp',
        width: 1200,
        height: 630,
        alt: 'House Construction Cost in Bikaner',
      },
    ],
  }
};

export default function ConstructionCostBikanerPage() {
  const costPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.bikanerbuilders.in/cost/#webpage",
        "url": "https://www.bikanerbuilders.in/cost/",
        "name": "House Construction Cost in Bikaner 2026 | Price Per Sq Ft",
        "isPartOf": {
          "@id": "https://www.bikanerbuilders.in/#website"
        },
        "breadcrumb": {
          "@id": "https://www.bikanerbuilders.in/cost/#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.bikanerbuilders.in/cost/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.bikanerbuilders.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Construction Cost Guide",
            "item": "https://www.bikanerbuilders.in/cost/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.bikanerbuilders.in/cost/#faq",
        "isPartOf": {
          "@id": "https://www.bikanerbuilders.in/cost/#webpage"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the construction cost for 1000 sq ft in Bikaner?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For a 1000 sq ft plot in Bikaner, a standard quality construction will cost approximately ₹15 Lakhs to ₹16 Lakhs. Premium finishes will cost between ₹18 Lakhs to ₹20 Lakhs."
            }
          },
          {
            "@type": "Question",
            "name": "What is the cost to build a 1200 sq ft house in Bikaner?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Building a 1200 sq ft home (like a 30x40 plot) in Bikaner typically costs ₹18 Lakhs for standard quality, and ₹21.6 Lakhs to ₹24 Lakhs for premium quality finishes."
            }
          },
          {
            "@type": "Question",
            "name": "Does the per sq ft cost include labour?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our turnkey construction rates (₹1500 to ₹2200 per sq ft) include both premium materials and skilled labour. You don't have to hire contractors separately."
            }
          },
          {
            "@type": "Question",
            "name": "How is the quotation prepared?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We prepare a transparent Bill of Quantities (BOQ) after finalizing your 2D floor plan. It details every single material brand, quantity, and cost so there are zero hidden charges."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide architectural maps for free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if you sign a turnkey contract with Bikaner Builders, the 2D Vastu maps and 3D elevations are typically included in the package at no extra cost."
            }
          },
          {
            "@type": "Question",
            "name": "Can I customize the materials during construction?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. The BOQ is flexible. If you decide to upgrade your floor tiles from standard vitrified to Italian marble midway, you only pay the differential material cost."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a 1500 sq ft home?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard 1500 sq ft single-story house in Bikaner takes about 5 to 6 months to complete from foundation to final paint, ensuring proper curing time for the RCC."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build commercial complexes and shops?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we undertake both residential and commercial construction projects, optimizing commercial spaces for maximum ROI and structural safety."
            }
          },
          {
            "@type": "Question",
            "name": "Is GST included in your construction rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GST is generally clearly mentioned in our official BOQ based on current government regulations for construction services."
            }
          },
          {
            "@type": "Question",
            "name": "Does the estimate include architect and structural design?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our turnkey packages include complete 2D maps, 3D elevations, and structural drawings by our in-house engineering team."
            }
          },
          {
            "@type": "Question",
            "name": "Is the boundary wall included in the per sq ft cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, the boundary wall, compound gate, and elevation projections are usually calculated separately as they do not fall under the standard built-up roof area."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script id="cost-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(costPageSchema) }} />
      <div className="pt-20">
        
        {/* 1. Hero Section */}
        <section className="relative h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
          <Image
            src="/assets/luxury-house-construction-cost-bikaner.webp"
            alt="3D front elevation and house construction design for a luxury duplex villa in Bikaner."
            title="House Construction Cost Bikaner - Premium Villa Design"
            fill
            priority
            className="object-cover opacity-60"
            sizes="(max-width: 768px) 100vw, 100vw" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-8">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-xl leading-tight">
              House Construction Cost in Bikaner 2026 <br className="hidden md:block" />
              <span className="text-orange-400 text-3xl md:text-5xl">Complete Price & Estimate Guide</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
              Transparent, data-driven construction rates based on built-up area, material specifications, and local Bikaner factors.
            </h2>
            <Link href="/cost-estimator" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xl px-10 py-4 rounded-full shadow-[0_4px_25px_rgba(234,88,12,0.6)] transition-all hover:-translate-y-1 mb-8">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              Open Cost Calculator
            </Link>
          </div>
          
          {/* Visible Caption for Hero Image */}
          <div className="absolute bottom-4 right-4 z-10 bg-black/60 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full border border-white/10 shadow-lg">
            Proposed 3D Concept: A premium 30x60 duplex villa design for Bikaner&apos;s climate.
          </div>
        </section>

        {/* SEO Pillar Page Content */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg md:prose-xl prose-slate max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                
                {/* Removed Unverified Claims, added trust heading */}
                <h2 className="text-3xl font-black text-slate-900 mb-6 border-b-4 border-orange-500 pb-4 inline-block">
                  Transparent Construction Estimates for Bikaner Homeowners
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  If you are planning to build a home in Bikaner, understanding the true cost per square foot is the most critical first step. As the premier turnkey construction company in Bikaner, we offer completely transparent, quality-tiered pricing models:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm text-base md:text-lg">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-4 font-bold border-b-0">Quality Tier</th>
                        <th className="p-4 font-bold border-b-0">Cost Per Sq. Ft.</th>
                        <th className="p-4 font-bold border-b-0">Best Suited For</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-900">Basic</td>
                        <td className="p-4 text-orange-600 font-bold">₹1,400 - ₹1,500</td>
                        <td className="p-4 text-slate-600">Rental properties, economy homes</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-900">Standard</td>
                        <td className="p-4 text-orange-600 font-bold">₹1,500 - ₹1,700</td>
                        <td className="p-4 text-slate-600">Middle-class residential homes</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-900">Premium</td>
                        <td className="p-4 text-orange-600 font-bold">₹1,800 - ₹2,000</td>
                        <td className="p-4 text-slate-600">Luxury villas, high-end duplexes</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-900">Luxury / Ultra-Luxury</td>
                        <td className="p-4 text-orange-600 font-bold">₹2,200+</td>
                        <td className="p-4 text-slate-600">Bespoke HNI mansions, imported finishes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {/* 1. Fix Disclaimers & Methodology */}
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-12">
                  <p className="text-sm text-orange-800 m-0 font-medium leading-relaxed">
                    <strong className="text-orange-900">Last Updated: October 2026.</strong> Rates are indicative. Final pricing depends on built-up area, structural design, soil conditions, and selected finishes. Note: Plot area and built-up area are not the same. Actual built-up area depends on sanctioned plans, setbacks, and Bikaner municipal regulations.
                  </p>
                </div>

                {/* Image 2: Raw Construction & Material */}
                <figure className="my-12">
                  <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <Image 
                      src="/assets/building-materials-steel-cement-bikaner.webp" 
                      alt="High grade Fe550D TMT steel and premium cement used for strong house foundation in Bikaner." 
                      title="Premium Construction Materials Bikaner Builders"
                      fill 
                      className="object-cover hover:scale-105 transition-transform duration-700" 
                      sizes="(max-width: 768px) 100vw, 800px" 
                    />
                  </div>
                  <figcaption className="mt-4 text-center text-sm text-slate-500 font-medium italic">
                    Quality Assurance: We use strictly branded Fe550D steel and 43/53 grade cement for maximum structural safety.
                  </figcaption>
                </figure>

                {/* 2. Add a New "House Size-wise Construction Cost" Table */}
                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  House Size-wise Construction Cost
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Here is an estimated breakdown based on the exact built-up area of your property. Prices vary based on the quality tier you choose:
                </p>
                <div className="overflow-x-auto mb-10">
                  <table className="w-full text-left border-collapse rounded-xl overflow-hidden border border-slate-200 shadow-sm text-base">
                    <thead>
                      <tr className="bg-slate-100 text-slate-900">
                        <th className="p-4 font-bold border-b border-slate-200">Built-up Area (Sq Ft)</th>
                        <th className="p-4 font-bold border-b border-slate-200">Standard (Avg ₹1,600/sqft)</th>
                        <th className="p-4 font-bold border-b border-slate-200">Premium (Avg ₹1,900/sqft)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-800">500 sq ft</td>
                        <td className="p-4 text-slate-600 font-medium">₹8,00,000</td>
                        <td className="p-4 text-slate-600 font-medium">₹9,50,000</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-800">600 sq ft</td>
                        <td className="p-4 text-slate-600 font-medium">₹9,60,000</td>
                        <td className="p-4 text-slate-600 font-medium">₹11,40,000</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-800">800 sq ft</td>
                        <td className="p-4 text-slate-600 font-medium">₹12,80,000</td>
                        <td className="p-4 text-slate-600 font-medium">₹15,20,000</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-800">1000 sq ft</td>
                        <td className="p-4 text-slate-600 font-medium">₹16,00,000</td>
                        <td className="p-4 text-slate-600 font-medium">₹19,00,000</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-800">1200 sq ft</td>
                        <td className="p-4 text-slate-600 font-medium">₹19,20,000</td>
                        <td className="p-4 text-slate-600 font-medium">₹22,80,000</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-800">1500 sq ft</td>
                        <td className="p-4 text-slate-600 font-medium">₹24,00,000</td>
                        <td className="p-4 text-slate-600 font-medium">₹28,50,000</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-800">1800 sq ft</td>
                        <td className="p-4 text-slate-600 font-medium">₹28,80,000</td>
                        <td className="p-4 text-slate-600 font-medium">₹34,20,000</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-800">2000 sq ft</td>
                        <td className="p-4 text-slate-600 font-medium">₹32,00,000</td>
                        <td className="p-4 text-slate-600 font-medium">₹38,00,000</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-800">2500 sq ft</td>
                        <td className="p-4 text-slate-600 font-medium">₹40,00,000</td>
                        <td className="p-4 text-slate-600 font-medium">₹47,50,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 3. Add an "Example Calculation: 1200 Sq Ft Premium House" */}
                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  Example Calculation: 1200 Sq Ft Premium House
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  To help you understand where your money goes, here is a rough breakdown for a 1200 sq ft home built with our Premium Package at <strong>₹1,900/sq ft</strong> (Total Estimated Cost: <strong>₹22,80,000</strong>):
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex justify-between items-center">
                    <span className="font-semibold text-slate-800">Structure & RCC (25%)</span>
                    <span className="text-orange-600 font-bold">~₹5,70,000</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex justify-between items-center">
                    <span className="font-semibold text-slate-800">Brickwork & Plaster (18%)</span>
                    <span className="text-orange-600 font-bold">~₹4,10,400</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex justify-between items-center">
                    <span className="font-semibold text-slate-800">Flooring & Tiling (15%)</span>
                    <span className="text-orange-600 font-bold">~₹3,42,000</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex justify-between items-center">
                    <span className="font-semibold text-slate-800">Doors & Windows (12%)</span>
                    <span className="text-orange-600 font-bold">~₹2,73,600</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex justify-between items-center">
                    <span className="font-semibold text-slate-800">Electrical Setup (10%)</span>
                    <span className="text-orange-600 font-bold">~₹2,28,000</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex justify-between items-center">
                    <span className="font-semibold text-slate-800">Plumbing & Sanitary (10%)</span>
                    <span className="text-orange-600 font-bold">~₹2,28,000</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex justify-between items-center">
                    <span className="font-semibold text-slate-800">Paint & Finishes (10%)</span>
                    <span className="text-orange-600 font-bold">~₹2,28,000</span>
                  </div>
                </div>

                {/* 4. Transparency List */}
                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  What Is Included in the Per Sq Ft Cost?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
                  <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl">
                    <h3 className="text-emerald-800 font-bold text-xl mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Included in Cost
                    </h3>
                    <ul className="space-y-3 text-emerald-900 m-0 pl-0 list-none text-base">
                      <li className="flex gap-2"><span className="text-emerald-500 font-bold">✓</span> Foundation & RCC Structure</li>
                      <li className="flex gap-2"><span className="text-emerald-500 font-bold">✓</span> Brickwork & Plastering</li>
                      <li className="flex gap-2"><span className="text-emerald-500 font-bold">✓</span> Flooring (Tiles/Marble)</li>
                      <li className="flex gap-2"><span className="text-emerald-500 font-bold">✓</span> Concealed Electrical Wiring</li>
                      <li className="flex gap-2"><span className="text-emerald-500 font-bold">✓</span> Plumbing & Sanitary Fitting</li>
                      <li className="flex gap-2"><span className="text-emerald-500 font-bold">✓</span> Internal & External Painting</li>
                      <li className="flex gap-2"><span className="text-emerald-500 font-bold">✓</span> Doors & Windows</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-100 p-6 rounded-2xl">
                    <h3 className="text-red-800 font-bold text-xl mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      Not Included
                    </h3>
                    <ul className="space-y-3 text-red-900 m-0 pl-0 list-none text-base">
                      <li className="flex gap-2"><span className="text-red-500 font-bold">✗</span> Plot / Land Cost</li>
                      <li className="flex gap-2"><span className="text-red-500 font-bold">✗</span> UIT / Govt Approval Charges</li>
                      <li className="flex gap-2"><span className="text-red-500 font-bold">✗</span> Borewell & Electricity Meter</li>
                      <li className="flex gap-2"><span className="text-red-500 font-bold">✗</span> Solar Panels</li>
                      <li className="flex gap-2"><span className="text-red-500 font-bold">✗</span> Premium Movable Furniture</li>
                      <li className="flex gap-2"><span className="text-red-500 font-bold">✗</span> Compound Wall (Charged separately)</li>
                    </ul>
                  </div>
                </div>

                {/* 5. Refine Material Brands Wording */}
                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  Indicative Brands Used (or approved equivalent as per project specification)
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  At Bikaner Builders, we never compromise on the skeletal strength of your home. Here is our indicative list of branded materials used in our Turnkey projects:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-orange-100 p-3 rounded-xl text-orange-600 shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    </div>
                    <div>
                      <strong className="block text-slate-900 mb-1">TMT Steel Bars</strong>
                      <span className="text-slate-600 text-sm leading-snug block">Tata Tiscon, JSW Neo, or Jindal Panther (Fe550D)</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-orange-100 p-3 rounded-xl text-orange-600 shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    </div>
                    <div>
                      <strong className="block text-slate-900 mb-1">Cement</strong>
                      <span className="text-slate-600 text-sm leading-snug block">UltraTech, Ambuja, or Shree Cement (43/53 Grade)</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-orange-100 p-3 rounded-xl text-orange-600 shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div>
                      <strong className="block text-slate-900 mb-1">Electricals</strong>
                      <span className="text-slate-600 text-sm leading-snug block">Havells, Polycab, or Anchor (Fire-retardant wiring)</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-orange-100 p-3 rounded-xl text-orange-600 shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                    </div>
                    <div>
                      <strong className="block text-slate-900 mb-1">Plumbing & Pipes</strong>
                      <span className="text-slate-600 text-sm leading-snug block">Astral or Ashirvad (CPVC / UPVC pipes)</span>
                    </div>
                  </div>
                </div>

                {/* Image 3: Premium Finishing */}
                <figure className="my-12">
                  <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <Image 
                      src="/assets/turnkey-interior-finishing-cost-bikaner.webp" 
                      alt="Premium interior finishing, marble flooring, and false ceiling design included in turnkey construction in Bikaner." 
                      title="Turnkey House Interior Finishing Bikaner"
                      fill 
                      className="object-cover hover:scale-105 transition-transform duration-700" 
                      sizes="(max-width: 768px) 100vw, 800px" 
                    />
                  </div>
                  <figcaption className="mt-4 text-center text-sm text-slate-500 font-medium italic">
                    3D Interior Concept: Premium flooring and false ceiling finishing included in our Turnkey Luxury Package.
                  </figcaption>
                </figure>

                {/* 4. Convert "Labour vs Turnkey" to a Comparison Table */}
                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  Labour Contract vs. Turnkey Construction
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Many clients in Bikaner wonder whether they should hire just a labour contractor or give a <strong>Turnkey (With Material)</strong> contract. Here is a clear comparison:
                </p>
                <div className="overflow-x-auto mb-10">
                  <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm border border-slate-200 text-base">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-4 font-bold border-b-0 w-1/2">Feature & Responsibility</th>
                        <th className="p-4 font-bold border-b-0 text-center">Labour Contract</th>
                        <th className="p-4 font-bold border-b-0 text-center text-orange-400">Turnkey (Us)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="p-4 font-medium text-slate-800">Material Purchase & Procurement</td>
                        <td className="p-4 text-center text-red-500 font-bold">Client ❌</td>
                        <td className="p-4 text-center text-emerald-500 font-bold">We do it ✅</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="p-4 font-medium text-slate-800">Labour & Vendor Management</td>
                        <td className="p-4 text-center text-red-500 font-bold">Client ❌</td>
                        <td className="p-4 text-center text-emerald-500 font-bold">We do it ✅</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="p-4 font-medium text-slate-800">Quality Coordination (Plumber, Electrician)</td>
                        <td className="p-4 text-center text-red-500 font-bold">Client ❌</td>
                        <td className="p-4 text-center text-emerald-500 font-bold">We do it ✅</td>
                      </tr>
                      <tr className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="p-4 font-medium text-slate-800">Protection from Material Price Hikes</td>
                        <td className="p-4 text-center text-red-500 font-bold">No ❌</td>
                        <td className="p-4 text-center text-emerald-500 font-bold">Yes ✅</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-4 font-medium text-slate-800">Single-Point Responsibility</td>
                        <td className="p-4 text-center text-red-500 font-bold">No ❌</td>
                        <td className="p-4 text-center text-emerald-500 font-bold">Yes ✅</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 7. Expand Bikaner Local Factors */}
                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  Bikaner Local Construction Factors
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Building a home in Rajasthan presents unique challenges. Your construction cost and execution plan are heavily influenced by the following local factors:
                </p>
                <ul className="space-y-4 text-slate-700 mb-10 pl-0 list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">●</span>
                    <span><strong>Summer Heat & Roof Insulation:</strong> Bikaner&apos;s extreme temperatures require specialized thermal-insulating roof treatments and proper cross-ventilation layout planning.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">●</span>
                    <span><strong>Variable Soil Conditions:</strong> Foundation depth and structural load-bearing capacity must be customized based on precise soil investigation and site-specific bearing capacity in different zones of Bikaner.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">●</span>
                    <span><strong>Material Transportation:</strong> Depending on plot location (e.g., tight lanes in the old city vs. open plots in outer colonies), transportation logistics can affect material delivery costs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">●</span>
                    <span><strong>Curing Challenges:</strong> Rapid evaporation in desert climates requires disciplined, continuous water curing for RCC structures to prevent micro-cracks.</span>
                  </li>
                </ul>

                {/* 6. Expand the "Why Quotes Differ" Checklist */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl my-12 text-white not-prose relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
                  
                  <h2 className="text-2xl md:text-3xl font-black mb-6 text-white leading-tight relative z-10">
                    Why Quotes Differ: 10-Point Checklist to Compare Builders
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-8 relative z-10">
                    If another local contractor offers a price that seems &quot;too good to be true,&quot; they are likely cutting corners. Ask them these 10 questions before signing the contract:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 relative z-10">
                    <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                      <svg className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-slate-200 text-sm"><strong>Which Steel & Cement?</strong> Are they using Fe550D TMT and 53 Grade cement?</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                      <svg className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-slate-200 text-sm"><strong>Is GST Included?</strong> Contractors often hide tax costs until final billing.</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                      <svg className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-slate-200 text-sm"><strong>Is Waterproofing Included?</strong> Is chemical waterproofing part of the BOQ?</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                      <svg className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-slate-200 text-sm"><strong>Boundary Wall included?</strong> Often charged extra by cheap quotes.</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                      <svg className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-slate-200 text-sm"><strong>What is the Door/Window Budget?</strong> Do they provide teak frames or cheap aluminum?</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                      <svg className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-slate-200 text-sm"><strong>Kitchen/Wardrobes included?</strong> Check if modular woodwork is part of the estimate.</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                      <svg className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-slate-200 text-sm"><strong>Architectural Maps?</strong> Do they charge extra for 2D/3D layout planning?</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                      <svg className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-slate-200 text-sm"><strong>Structural Drawing included?</strong> Crucial for earthquake resistance.</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                      <svg className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-slate-200 text-sm"><strong>Flooring specification?</strong> Check price caps per sq ft for tiles/marble.</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                      <svg className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-slate-200 text-sm"><strong>Is Elevation Cost Included?</strong> Complex front elevations cost more.</span>
                    </div>
                  </div>
                </div>

                {/* Related Services Contextual Links */}
                <div className="mt-12 pt-8 border-t border-slate-100 not-prose">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Explore Our Construction Services</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link href="/services/turnkey-construction" className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50 transition-colors group">
                      <span className="font-bold text-slate-800 group-hover:text-orange-600 block mb-1">Turnkey Construction</span>
                      <span className="text-sm text-slate-500">With material building contractor</span>
                    </Link>
                    <Link href="/services/2d-naksha" className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50 transition-colors group">
                      <span className="font-bold text-slate-800 group-hover:text-orange-600 block mb-1">2D Vastu Naksha</span>
                      <span className="text-sm text-slate-500">Expert architectural mapping</span>
                    </Link>
                    <Link href="/services/3d-elevation" className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50 transition-colors group">
                      <span className="font-bold text-slate-800 group-hover:text-orange-600 block mb-1">3D Front Elevation</span>
                      <span className="text-sm text-slate-500">Realistic exterior designs</span>
                    </Link>
                    <Link href="/services/interior-design" className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50 transition-colors group">
                      <span className="font-bold text-slate-800 group-hover:text-orange-600 block mb-1">Interior Design & POP</span>
                      <span className="text-sm text-slate-500">Premium false ceilings & finish</span>
                    </Link>
                    <Link href="/services/structural-drawing" className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50 transition-colors group">
                      <span className="font-bold text-slate-800 group-hover:text-orange-600 block mb-1">Structural Drawings</span>
                      <span className="text-sm text-slate-500">Safe, earthquake-resistant design</span>
                    </Link>
                  </div>
                </div>

                {/* Locations Contextual Links */}
                <div className="mt-8 pt-8 border-t border-slate-100 not-prose mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">View Construction Costs By Area in Bikaner</h3>
                  <div className="flex flex-wrap gap-2">
                    {['pawanpuri', 'jnv-colony', 'gangashahar', 'sadul-ganj', 'nokha', 'deshnoke', 'napasar', 'murlidhar-vyas'].map((loc) => (
                      <Link key={loc} href={`/locations/${loc}`} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:text-orange-600 hover:border-orange-300 hover:bg-orange-50 transition-colors capitalize">
                        {loc.replace('-', ' ')}
                      </Link>
                    ))}
                  </div>
                </div>

                <ServiceTrustBlock slug="construction-cost" />
              </article>
              
              {/* 8. Update FAQs Section */}
              <div className="mt-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <h2 className="text-3xl font-black text-slate-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">What is the construction cost for 1000 sq ft in Bikaner?</h3>
                    <p className="text-slate-600 leading-relaxed">For a 1000 sq ft plot in Bikaner, a standard quality construction will cost approximately ₹15 Lakhs to ₹16 Lakhs. Premium finishes will cost between ₹18 Lakhs to ₹20 Lakhs.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">What is the cost to build a 1200 sq ft house in Bikaner?</h3>
                    <p className="text-slate-600 leading-relaxed">Building a 1200 sq ft home (like a 30x40 plot) in Bikaner typically costs ₹18 Lakhs for standard quality, and ₹21.6 Lakhs to ₹24 Lakhs for premium quality finishes.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Does the per sq ft cost include labour?</h3>
                    <p className="text-slate-600 leading-relaxed">Yes, our turnkey construction rates (₹1500 to ₹2200 per sq ft) include both premium materials and skilled labour. You don&apos;t have to hire contractors separately.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Is GST included in your construction rate?</h3>
                    <p className="text-slate-600 leading-relaxed">GST is generally clearly mentioned in our official BOQ based on current government regulations for construction services.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Does the estimate include architect and structural design?</h3>
                    <p className="text-slate-600 leading-relaxed">Yes, our turnkey packages include complete 2D maps, 3D elevations, and structural drawings by our in-house engineering team.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Is the boundary wall included in the per sq ft cost?</h3>
                    <p className="text-slate-600 leading-relaxed">No, the boundary wall, compound gate, and elevation projections are usually calculated separately as they do not fall under the standard built-up roof area.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">How is the quotation prepared?</h3>
                    <p className="text-slate-600 leading-relaxed">We prepare a transparent Bill of Quantities (BOQ) after finalizing your 2D floor plan. It details every single material brand, quantity, and cost so there are zero hidden charges.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Can I customize the materials during construction?</h3>
                    <p className="text-slate-600 leading-relaxed">Absolutely. The BOQ is flexible. If you decide to upgrade your floor tiles from standard vitrified to Italian marble midway, you only pay the differential material cost.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">How long does it take to build a 1500 sq ft home?</h3>
                    <p className="text-slate-600 leading-relaxed">A standard 1500 sq ft single-story house in Bikaner takes about 5 to 6 months to complete from foundation to final paint, ensuring proper curing time for the RCC.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6 border-b-0 pb-0">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Do you build commercial complexes and shops?</h3>
                    <p className="text-slate-600 leading-relaxed mb-0">Yes, we undertake both residential and commercial construction projects, optimizing commercial spaces for maximum ROI and structural safety.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 10. Sticky Sidebar CTA */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-3">Calculate Your Cost</h3>
                <p className="text-slate-600 mb-8 text-base leading-relaxed">Use our smart online estimator tool or speak directly with our engineers in Bikaner.</p>
                
                <Link href="/cost-estimator" className="flex items-center justify-center gap-3 w-full bg-orange-600 hover:bg-orange-500 text-white font-black text-lg py-4 px-4 rounded-xl mb-4 transition-transform hover:-translate-y-1 shadow-md shadow-orange-600/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  Cost Estimator Tool
                </Link>
                <Link href="https://wa.me/919376590313" target="_blank" className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1fae54] text-white font-black text-lg py-4 px-4 rounded-xl mb-4 transition-transform hover:-translate-y-1 shadow-md shadow-[#25D366]/20">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008z" /></svg>
                  WhatsApp Now
                </Link>
                <Link href="tel:+919376590313" className="flex items-center justify-center gap-3 w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-lg py-4 px-4 rounded-xl mb-8 transition-transform hover:-translate-y-1 shadow-md shadow-slate-900/20">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call +91 93765 90313
                </Link>
                
                <div className="pt-6 border-t border-slate-100 text-center">
                  <p className="text-slate-500 text-sm font-medium">Bikaner Builders Office <br /> <span className="text-slate-400">Ridmalsar Sipahiyan, Bikaner</span></p>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </>
  );
}
