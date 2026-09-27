'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LeadModal from '@/components/LeadModal';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import { useSettings } from '@/components/SettingsProvider';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const settings = useSettings();

  return (
    <>
      {/* Lead Modal */}
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0F172A]">
        {/* LCP Optimized Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1920&auto=format&fit=crop"
            alt="Modern home construction in Bikaner"
            fill
            priority
            quality={85}
            className="object-cover opacity-60"
            sizes="100vw"
            style={{ 
              objectPosition: "center 40%", 
              filter: "blur(10px)",
              transition: "filter 0.5s ease-out"
            }}
            onLoad={(e) => {
              const target = e.target as HTMLElement;
              target.style.filter = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#EA580C]/20 border border-[#EA580C]/50 text-[#EA580C] font-bold tracking-widest uppercase text-xs sm:text-sm mb-6 backdrop-blur-sm">
            #1 Construction Company in Bikaner
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            Build Your Dream Home <br className="hidden md:block"/>
            <span className="text-[#EA580C]">With Zero Hassle</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-200 mx-auto font-medium drop-shadow-md mb-10">
            Premium Turnkey Construction, 100% Vastu Compliant 2D Maps, and Stunning 3D Elevations at unbeatable rates.
          </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Namaste, Bikaner Builders team.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1fae54] text-white font-black text-lg px-8 py-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008a.86.86 0 00-.618.291c-.215.233-.822.805-.822 1.96 0 1.155.843 2.27 1.96 2.443.116.175 1.636 2.5 3.96 3.504.552.238.983.38 1.318.487.553.176 1.057.151 1.455.092.445-.067 1.378-.563 1.572-1.107.193-.544.193-1.01.136-1.107-.058-.097-.215-.155-.447-.272z" /></svg>
                Chat on WhatsApp
              </Link>
              <Link 
                href={`tel:${settings.primaryPhone.startsWith('+') ? settings.primaryPhone : '+' + settings.primaryPhone.replace(/[^0-9]/g, '')}`}
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Now
              </Link>
            </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4">Our Core Services</h2>
            <div className="w-20 h-1.5 bg-[#EA580C] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <Link href="/services/2d-naksha" className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src="/assets/icon_architecture_1789213681908.png"
                  alt="2D Vastu Map" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-2xl font-black text-white">2D Vastu Map</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Expert floor planning designed strictly with Vastu Shastra principles.</p>
                <span className="text-[#EA580C] font-bold text-sm tracking-wide uppercase group-hover:underline">View Details &rarr;</span>
              </div>
            </Link>

            {/* Service 2 */}
            <Link href="/services/3d-elevation" className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src="/assets/icon_3d_house_1789213697503.png"
                  alt="3D Front Elevation" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-2xl font-black text-white">3D Elevation</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Photorealistic 3D rendering of your dream home exterior before construction.</p>
                <span className="text-[#EA580C] font-bold text-sm tracking-wide uppercase group-hover:underline">View Details &rarr;</span>
              </div>
            </Link>

            {/* Service 3 */}
            <Link href="/services/turnkey-construction" className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src="/assets/why_choose_us_img_1789213667904.png"
                  alt="Turnkey Construction" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-2xl font-black text-white">Construction</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Complete hassle-free construction from foundation to handover with premium materials.</p>
                <span className="text-[#EA580C] font-bold text-sm tracking-wide uppercase group-hover:underline">View Details &rarr;</span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Before/After Transformation Section */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#EA580C] font-bold tracking-widest uppercase text-sm mb-2 block">Real Results</span>
            <h2 className="text-3xl md:text-5xl font-black mb-6">See The Transformation</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Drag the slider to see how we turn raw brickwork into stunning, finished dream homes.
            </p>
          </div>
          
          <div className="mt-10 max-w-5xl mx-auto px-4 md:px-0">
            {/* Note: In a real project, replace these Unsplash links with actual before/after project photos from the /public/assets folder */}
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop"
              beforeAlt="Raw structure"
              afterAlt="Finished Villa"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Section 1: The Expertise & Experience Block */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4">Built for Bikaner: Our Proven Construction Process</h2>
            <div className="w-20 h-1.5 bg-[#EA580C] mx-auto rounded-full mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-slate-600">
              We understand Rajasthan's extreme weather. That's why our 4-step process ensures your home is built using climate-resistant materials, ensuring durability against intense heat and sandstorms.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Free Site Inspection", desc: "Detailed soil & topography analysis before we begin.", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
              { title: "Vastu-Compliant 3D Design", desc: "Scientific space planning for positive energy.", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" },
              { title: "Transparent BOQ", desc: "Clear material selection with zero hidden costs.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
              { title: "Turnkey Handover", desc: "Move-in ready homes delivered on strict deadlines.", icon: "M5 13l4 4L19 7" }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 mx-auto bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: The Authority Block */}
      <section className="py-20 bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800">
              <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop" alt="Bikaner Builders Expert Engineering Team" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-1">CERTIFIED EXPERTS</p>
                <p className="text-2xl font-black">Bikaner Builders Engineering Team</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Expertise You Can Trust</h2>
              <h3 className="text-xl text-orange-500 font-bold mb-6">Led by Expert Civil Engineers</h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                With over a decade of experience as top civil contractors and residential & commercial builders in Bikaner, our team strictly adheres to modern structural engineering codes. Led by top architects and interior designers, we promise 100% transparency in material usage and project timelines, ensuring your investment is completely secure.
              </p>
              <ul className="space-y-4">
                {[
                  "10+ Years Local Experience",
                  "Government Approved Structural Standards",
                  "No Hidden Costs, 100% Transparent BOQ"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span className="font-medium text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Trust Block */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4">What Bikaner Says About Us</h2>
            <div className="w-20 h-1.5 bg-[#EA580C] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Sharma, JNV Colony", review: "Bikaner Builders delivered my home exactly on time. Their material quality is top-notch and the 3D design matching was 100% accurate." },
              { name: "Sunita Jain, Gangashahar", review: "Very professional team. They handled everything from Naksha to final paint. The Vastu compliance really brought peace to our new house." },
              { name: "Vikram Singh, Nokha", review: "Transparent pricing with no hidden surprises. Aahan and his team are the most reliable contractors I've worked with in Rajasthan." }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm relative">
                <div className="flex gap-1 mb-4 text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-slate-600 italic mb-6">"{testimonial.review}"</p>
                <div className="font-bold text-slate-900 border-t border-slate-200 pt-4">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Local SEO FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1.5 bg-[#EA580C] mx-auto rounded-full"></div>
          </div>
          <div className="space-y-6">
            {[
              { q: "What is the cost of house construction in Bikaner?", a: "Our construction cost in Bikaner starts at competitive per sq.ft rates depending on your material choices. We provide a fully customized and transparent BOQ (Bill of Quantities) before starting, ensuring zero hidden charges." },
              { q: "Do you provide Vastu-compliant house maps?", a: "Yes, our expert architects specialize in 100% Vastu-compliant 2D nakshas and 3D elevations, ensuring your new home attracts positive energy and prosperity." },
              { q: "Do you handle material and labor both?", a: "Absolutely. We offer comprehensive turnkey construction solutions. From foundation digging to the final coat of paint, we manage all labor, material sourcing, and project supervision." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-slate-900 group-open:text-orange-600 transition-colors">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="text-slate-600 p-6 pt-0 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Auto-injected FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the cost of house construction in Bikaner?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our construction cost in Bikaner starts at competitive per sq.ft rates depending on your material choices. We provide a fully customized and transparent BOQ (Bill of Quantities) before starting, ensuring zero hidden charges."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide Vastu-compliant house maps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our expert architects specialize in 100% Vastu-compliant 2D nakshas and 3D elevations, ensuring your new home attracts positive energy and prosperity."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle material and labor both?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We offer comprehensive turnkey construction solutions. From foundation digging to the final coat of paint, we manage all labor, material sourcing, and project supervision."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
