import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceTrustBlock from '@/components/ServiceTrustBlock';
import OtherServicesLinker from '@/components/OtherServicesLinker';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Interior Designers in Bikaner | Home Interior Design",
  description: "Looking for interior designers in Bikaner? Get interior planning, 2D/3D designs and complete execution for modular kitchens, wardrobes, false ceilings, carpentry and home interiors.",
  alternates: {
    canonical: 'https://www.bikanerbuilders.in/services/interior-design',
  },
  openGraph: {
    title: "Interior Designers in Bikaner | Home Interior Design",
    description: "Looking for interior designers in Bikaner? Get interior planning, 2D/3D designs and complete execution for modular kitchens, wardrobes, false ceilings, carpentry and home interiors.",
    url: 'https://www.bikanerbuilders.in/services/interior-design',
    siteName: 'Bikaner Builders',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.bikanerbuilders.in/assets/turnkey-interior-finishing-cost-bikaner.webp',
        width: 1200,
        height: 630,
        alt: 'Interior Design and Turnkey Execution in Bikaner - Bikaner Builders',
      },
    ],
  },
};

export default function InteriorDesignServicePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.bikanerbuilders.in" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.bikanerbuilders.in/services" },
      { "@type": "ListItem", "position": 3, "name": "Interior Design", "item": "https://www.bikanerbuilders.in/services/interior-design" }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Interior Design & Turnkey Execution in Bikaner",
    "serviceType": "Interior Design and Turnkey Interior Execution",
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
    "description": "Looking for interior designers in Bikaner? Get interior planning, 2D/3D designs and complete execution for modular kitchens, wardrobes, false ceilings, carpentry and home interiors.",
    "url": "https://www.bikanerbuilders.in/services/interior-design"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I hire Bikaner Builders for interior design and 3D visualization only?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. If you already have your own contractors or carpenters, you can engage us exclusively for 2D furniture layouts, 3D interior concept renderings, reflected ceiling lighting plans, and a detailed bill of quantities (BOQ) without execution."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in your turnkey interior execution service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our turnkey interior service covers end-to-end execution from approved designs to final handover. This includes custom modular carpentry, false ceiling installation, electrical routing and architectural lighting, wall treatments, painting, on-site supervision, and final cleaning."
        }
      },
      {
        "@type": "Question",
        "name": "How do you design modular kitchens and wardrobes for Bikaner homes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We design modular kitchens and wardrobes tailored to local storage requirements and desert climate conditions. Kitchens feature boiling-water-resistant core boards, smooth soft-close hardware, and organized utility units. Wardrobes are built with floor-to-ceiling storage, edge sealing designed to reduce dust ingress, and customized internal organizers."
        }
      },
      {
        "@type": "Question",
        "name": "What false ceiling and POP options do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We install moisture-resistant gypsum board false ceilings, perimeter LED cove lighting trays, magnetic track profiles, and decorative POP mouldings. All ceilings use rigid galvanized iron (GI) framing aligned with laser levels to minimize the potential for sagging or hairline surface fissures caused by seasonal temperature variations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you undertake interior renovation for existing homes and commercial spaces?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We handle partial and complete interior renovations for established homes, apartments, and commercial spaces in Bikaner. Our team evaluates existing structural beams, electrical conduits, and plumbing before planning remodeling work to minimize disruption."
        }
      },
      {
        "@type": "Question",
        "name": "How do you estimate costs and begin an interior project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We begin with an on-site consultation and dimensional survey in Bikaner to understand your scope and preferences. Based on the layout, we prepare an itemized bill of quantities (BOQ) detailing material specifications, finishes, and costs before execution begins."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="pt-20">
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
          <Image
            src="/assets/seo_interior.jpg"
            alt="Interior Design & Turnkey Execution in Bikaner - Bikaner Builders"
            title="Interior Design & Turnkey Execution in Bikaner"
            fill
            priority
            className="object-cover opacity-30"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
          
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12 py-16">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-xl leading-tight">
              Interior Design & Turnkey Execution in Bikaner
            </h1>
            <p className="text-xl md:text-2xl text-orange-400 font-bold max-w-3xl mx-auto mb-8 drop-shadow-md">
              Looking for interior designers in Bikaner? Get interior planning, 2D/3D designs and complete execution for modular kitchens, wardrobes, false ceilings, carpentry and home interiors.
            </p>
            <Link 
              href="https://wa.me/919376590313" 
              target="_blank" 
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xl px-10 py-5 rounded-full shadow-[0_4px_25px_rgba(234,88,12,0.6)] transition-all hover:-translate-y-1"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008z" /></svg>
              Get a Free Quote on WhatsApp
            </Link>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg md:prose-xl prose-slate max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">

                {/* Conceptual Visualization Graphic */}
                <div className="relative w-full h-[320px] sm:h-[400px] mb-4 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <Image 
                    src="/assets/turnkey-interior-finishing-cost-bikaner.webp" 
                    alt="Interior Design and Turnkey Execution in Bikaner - Modern Concept Visualization" 
                    title="Modern Interior Design Concept Visualization" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-700" 
                    sizes="(max-width: 768px) 100vw, 750px" 
                  />
                </div>
                <p className="text-xs text-slate-500 text-center mb-10 italic">
                  Representative 3D conceptual visualization for modern residential interior layout, lighting, and woodwork.
                </p>

                {/* Section 1: Complete Interior Solutions */}
                <h2 className="text-3xl font-black text-slate-900 mb-6 border-b-4 border-orange-500 pb-4 inline-block">
                  Complete Interior Solutions: From Concept to Execution
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Planning an interior for a newly built home or renovating an existing residence in Bikaner requires balancing functional space planning with durable on-site craftsmanship. At Bikaner Builders, we offer structured interior services tailored to your project stage:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-orange-500 font-black text-3xl block mb-2">01</span>
                    <h3 className="font-bold text-slate-900 text-xl mb-2">Design-Only Services</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      Best suited if you already have personal carpenters or civil contractors and need clear architectural direction and 3D visual concepts before purchasing materials.
                    </p>
                    <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
                      <li>2D Furniture layout and circulation planning</li>
                      <li>3D Photorealistic views of bedrooms, living, and kitchen</li>
                      <li>Reflected ceiling plans (RCP) with electrical points</li>
                      <li>Plumbing and drainage coordination for wet areas</li>
                      <li>Detailed material schedule and bill of quantities (BOQ)</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-orange-500 font-black text-3xl block mb-2">02</span>
                    <h3 className="font-bold text-slate-900 text-xl mb-2">Turnkey Interior Execution</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      Full-scope delivery where our team manages material sourcing, site carpentry, false ceiling framing, electrical installations, painting, and finishing under one roof.
                    </p>
                    <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
                      <li>Site supervision and milestone tracking</li>
                      <li>Bespoke modular kitchen manufacturing and assembly</li>
                      <li>Built-in wardrobes, vanity units, and TV consoles</li>
                      <li>Gypsum false ceiling, POP mouldings, and cove lighting</li>
                      <li>Surface wall finishes, paneling, and final handover</li>
                    </ul>
                  </div>
                </div>

                {/* Section 2: Interior Scope & Craftsmanship */}
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  Interior Scope & Craftsmanship
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Interior work in Bikaner needs special consideration for hot desert summers, fine dust ingress, and intensive daily kitchen usage. We focus on practical durability and clean detailing across every room:
                </p>

                <div className="space-y-6 mb-10 not-prose">
                  <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-orange-200 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                      Modular Kitchens & Smart Utility Storage
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Kitchens designed for Indian cooking habits with clear division between wet prep and cooking zones. We construct sturdy carcasses using boiling-water-resistant plywood, heavy-load drawer channels, tandem boxes, corner carousels, and quartz countertops engineered for enhanced resistance to heat and common kitchen stains under regular use.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-orange-200 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                      Built-in Wardrobes & Storage Units
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Custom floor-to-ceiling wardrobes that maximize vertical height to minimize open dust accumulation zones common in Bikaner homes. Available in sliding and hinged configurations with machine-pressed edge banding designed to help curb fine dust infiltration into storage compartments.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-orange-200 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                      False Ceilings & Gypsum POP Work
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Gypsum board false ceilings suspended on rust-resistant galvanized steel channels. Aside from modern perimeter lighting, false ceilings create an air-gap buffer that can help temper radiant heat transmission from roof slabs during peak summer months.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-orange-200 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                      Architectural Lighting & Electrical Coordination
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Layered lighting schemes combining indirect warm cove lighting, anti-glare COB spotlights, magnetic track channels, and dedicated task lighting for study desks and kitchen counters to create visual depth without harsh glare.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-orange-200 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                      Wall Treatments, Fluted Paneling & Surface Finishes
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Decorative feature walls incorporating acoustic charcoal louvers, fluted composite panels, durable interior laminates, and washable wall paints designed to be easily wiped clean of fine desert dust.
                    </p>
                  </div>
                </div>

                {/* Section 3: Our Step-by-Step Interior Workflow (Original 2x2 Grid) */}
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  Our Step-by-Step Interior Workflow
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  A structured workflow ensures that creative concepts translate into well-built rooms on time and within agreed budget parameters:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 not-prose">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">01</span>
                    <h3 className="font-bold text-slate-900 text-xl mb-2">Site Measurement & Briefing</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      We conduct an on-site survey in Bikaner to measure exact room dimensions, ceiling heights, door swings, and conduit locations while discussing your family's daily routine.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">02</span>
                    <h3 className="font-bold text-slate-900 text-xl mb-2">2D Layout & 3D Visualization</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      We draft functional furniture layouts followed by photorealistic 3D perspectives to preview color palettes, textures, and lighting ambiance before execution starts.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">03</span>
                    <h3 className="font-bold text-slate-900 text-xl mb-2">Itemized BOQ & Material Selection</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      You receive a detailed bill of quantities outlining core ply specifications, hardware fittings, surface laminates, and lighting fixtures for total budget transparency.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">04</span>
                    <h3 className="font-bold text-slate-900 text-xl mb-2">Turnkey Execution & Handover</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Carpenters, electricians, and painters execute the work under on-site supervision, concluding with alignment verification, post-work cleaning, and a room-by-room walkthrough.
                    </p>
                  </div>
                </div>

                {/* Section 4: Material & Finishing Options */}
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  Material & Finishing Options
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Material selection in Bikaner must account for extreme heat cycles, low humidity, and fine dust. We prioritize durable materials selected to withstand dry desert conditions, insect exposure, and surface wear:
                </p>
                <ul className="space-y-4 mb-12 list-none pl-0 not-prose">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block text-base font-bold">Boiling-Water-Resistant (BWR / BWP) Core Plywood</strong>
                      <span className="text-slate-600 text-sm leading-relaxed">Calibrated commercial and marine-grade plywood treated for moisture and borer resistance, formulated to support long-term structural stability under normal kitchen and vanity usage.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block text-base font-bold">Tested Soft-Close Hardware & Concealed Hinges</strong>
                      <span className="text-slate-600 text-sm leading-relaxed">Heavy-duty drawer channels, hydraulic hinges, and lift-up mechanisms designed for smooth operation and durability against desert dust exposure.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block text-base font-bold">Moisture-Resistant Gypsum Board & GI Framing</strong>
                      <span className="text-slate-600 text-sm leading-relaxed">Certified gypsum ceiling boards secured onto galvanized iron perimeter channels, engineered to minimize the risk of sagging, thermal movement, and hairline cracking across ceiling spans.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block text-base font-bold">Durable Surface Finishes & Machine Edge Banding</strong>
                      <span className="text-slate-600 text-sm leading-relaxed">High-pressure decorative laminates, acrylic panels, and natural veneers sealed with machine-applied PVC edge-banding tapes to provide a protective barrier against ambient moisture and edge impact chipping.</span>
                    </div>
                  </li>
                </ul>

                {/* Section 5: Benefits Section (Dark Navy original block) */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl my-12 text-white not-prose">
                  <h2 className="text-2xl md:text-3xl font-black mb-6 text-white leading-tight">
                    Why Choose Bikaner Builders for Interior Projects?
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-8">
                    Managing independent carpenters, painters, and electricians often creates coordination conflicts and unexpected expenses. We provide a consolidated approach from design to on-site execution:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg font-bold">Single-Point Accountability</strong>
                        <span className="text-slate-400 text-sm">One dedicated team coordinates all trades, minimizing coordination gaps between drawings and execution.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg font-bold">Precision Carpentry & Leveling</strong>
                        <span className="text-slate-400 text-sm">Laser-guided ceiling alignment and factory edge banding support clean joints and accurate shutter alignment.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg font-bold">Transparent Itemized BOQ</strong>
                        <span className="text-slate-400 text-sm">Detailed material specifications and quantity estimates prevent surprise costs during execution.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      </div>
                      <div>
                        <strong className="block text-white text-lg font-bold">Climate-Conscious Detailing</strong>
                        <span className="text-slate-400 text-sm">Material selection and layouts optimized for Bikaner's desert heat, dust protection, and airflow.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 6: Construction Cost CTA */}
                <div className="bg-orange-50 rounded-2xl p-6 md:p-8 mt-12 mb-8 border border-orange-100 shadow-sm text-center not-prose">
                  <p className="text-slate-800 text-lg mb-4 leading-relaxed">
                    Planning your complete home project? Explore our <Link href="/cost" className="text-orange-600 font-bold hover:underline">Bikaner House Construction Cost Guide</Link> or calculate estimates with the <Link href="/cost-estimator" className="text-orange-600 font-bold hover:underline">Interactive Cost Estimator</Link>.
                  </p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    Need structural or civil work first? Consult our <Link href="/house-plan-design-bikaner" className="text-orange-600 font-bold hover:underline">House Planning &amp; Design Team</Link>, explore <Link href="/services/turnkey-construction" className="text-orange-600 font-bold hover:underline">Turnkey Construction Services</Link>, or browse our <Link href="/portfolio" className="text-orange-600 font-bold hover:underline">Recent Project Portfolio</Link>.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link href="/cost" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition-transform hover:-translate-y-1">
                      Calculate Construction Cost
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                    <Link href="/cost-estimator" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-3 rounded-full shadow-md transition-transform hover:-translate-y-1">
                      Use Cost Estimator
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </div>

                <ServiceTrustBlock slug="interior-design" />
              </article>
              
              <OtherServicesLinker currentSlug="interior-design" />
              
              {/* FAQ Section */}
              <div className="mt-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <h2 className="text-3xl font-black text-slate-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Can I hire Bikaner Builders for interior design and 3D visualization only?</h3>
                    <p className="text-slate-600 leading-relaxed">Yes. If you already have your own contractors or carpenters, you can engage us exclusively for 2D furniture layouts, 3D interior concept renderings, reflected ceiling lighting plans, and a detailed bill of quantities (BOQ) without execution.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">What is included in your turnkey interior execution service?</h3>
                    <p className="text-slate-600 leading-relaxed">Our turnkey interior service covers end-to-end execution from approved designs to final handover. This includes custom modular carpentry, false ceiling installation, electrical routing and architectural lighting, wall treatments, painting, on-site supervision, and final cleaning.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">How do you design modular kitchens and wardrobes for Bikaner homes?</h3>
                    <p className="text-slate-600 leading-relaxed">We design modular kitchens and wardrobes tailored to local storage requirements and desert climate conditions. Kitchens feature boiling-water-resistant core boards, smooth soft-close hardware, and organized utility units. Wardrobes are built with floor-to-ceiling storage, edge sealing designed to reduce dust ingress, and customized internal organizers.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">What false ceiling and POP options do you offer?</h3>
                    <p className="text-slate-600 leading-relaxed">We install moisture-resistant gypsum board false ceilings, perimeter LED cove lighting trays, magnetic track profiles, and decorative POP mouldings. All ceilings use rigid galvanized iron (GI) framing aligned with laser levels to minimize the potential for sagging or hairline surface fissures caused by seasonal temperature variations.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Do you undertake interior renovation for existing homes and commercial spaces?</h3>
                    <p className="text-slate-600 leading-relaxed">Yes. We handle partial and complete interior renovations for established homes, apartments, and commercial spaces in Bikaner. Our team evaluates existing structural beams, electrical conduits, and plumbing before planning remodeling work to minimize disruption.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">How do you estimate costs and begin an interior project?</h3>
                    <p className="text-slate-600 leading-relaxed">We begin with an on-site consultation and dimensional survey in Bikaner to understand your scope and preferences. Based on the layout, we prepare an itemized bill of quantities (BOQ) detailing material specifications, finishes, and costs before execution begins.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-2">Book an Interior Consultation</h3>
                <p className="text-slate-600 mb-8 text-base leading-relaxed">
                  Speak with our interior team in Bikaner to discuss your home layout, 3D design, or turnkey execution.
                </p>
                
                <Link 
                  href="https://wa.me/919376590313" 
                  target="_blank" 
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1fae54] text-white font-black text-lg py-4 px-4 rounded-xl mb-4 transition-transform hover:-translate-y-1 shadow-md"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008z" /></svg>
                  WhatsApp Now
                </Link>
                <Link 
                  href="tel:+919376590313" 
                  className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-lg py-4 px-4 rounded-xl mb-6 transition-transform hover:-translate-y-1 shadow-md"
                >
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
