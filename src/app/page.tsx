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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up animation-delay-500">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-[#EA580C] hover:bg-[#F97316] text-white font-black text-lg px-8 py-4 rounded-xl shadow-[0_8px_30px_rgba(234,88,12,0.5)] transition-all hover:-translate-y-1"
              >
                Get Free Estimate
              </button>
              <Link 
                href={`tel:${settings.primaryPhone.startsWith('+') ? settings.primaryPhone : '+' + settings.primaryPhone.replace(/[^0-9]/g, '')}`}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
              >
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

      {/* Contact Section */}
      <Contact />

    </>
  );
}
