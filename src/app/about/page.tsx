import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Top Civil Contractors & Architects in Bikaner",
  description: "Learn about Bikaner Builders, the #1 turnkey construction company in Bikaner. Led by Rishad Khan, we specialize in Vastu maps, 3D elevations, and home building.",
};

export default function AboutUs() {
  return (
    <div className="pt-20">
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/bikaner_builders_engineering_team.jpg"
          alt="Expert civil engineers and construction team at Bikaner Builders"
          title="Top Building Contractors Bikaner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 to-[#0F172A]/70"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
            Building Bikaner&apos;s Future,<br/>
            <span className="text-[#EA580C]">One Home at a Time</span>
          </h1>
          <p className="text-xl text-gray-200 font-medium max-w-2xl mx-auto">
            Trusted local expertise in 2D Naksha, 3D Elevation, and complete turnkey construction.
          </p>
        </div>
      </section>

      {/* Local Authority SEO Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#0F172A] mb-6">Built for Rajasthan's Climate</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            As Bikaner's premier civil contractors, we understand that building in Rajasthan requires specialized knowledge of extreme temperatures and soil conditions. For over a decade, our expert architects and engineers have been delivering turnkey construction, structural drawings, and 100% Vastu-compliant homes. From strong foundations to heat-resistant 3D elevations and premium interior POP work, we use top-grade materials to ensure your home stands the test of time.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4">Our Core Values</h2>
            <div className="w-20 h-1.5 bg-[#EA580C] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mx-auto mb-6">
                <span className="text-[#EA580C] text-2xl">🕉️</span>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">100% Vastu Compliance</h3>
              <p className="text-gray-600">
                Every 2D naksha and architectural plan we create is designed strictly following traditional Vastu Shastra principles to bring harmony to your home.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mx-auto mb-6">
                <span className="text-[#EA580C] text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden costs. We provide clear material specifications and fixed pricing for our turnkey contracts before breaking ground.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mx-auto mb-6">
                <span className="text-[#EA580C] text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">On-Time Delivery</h3>
              <p className="text-gray-600">
                We respect your time. With our strong network of local laborers and material suppliers in Bikaner, we ensure project handovers on schedule.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership E-E-A-T Block */}
      <section className="py-12 bg-[#0b1121] border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 border border-slate-800 shadow-xl hover:border-slate-700 transition-colors">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 flex-shrink-0 border border-slate-700">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-white mb-1">Rishad Khan</h3>
              <p className="text-sm text-orange-500 font-semibold mb-3 uppercase tracking-wide">Founder & Operations Head</p>
              <p className="text-slate-400 text-sm italic">
                "Committed to delivering 100% transparent, Vastu-compliant, and premium turnkey construction solutions across Bikaner district."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0F172A] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to start your construction journey?</h2>
          <p className="text-gray-300 mb-10 text-lg">Contact our team today for a free site visit and architectural consultation.</p>
          <Link href="/contact" className="inline-block bg-[#EA580C] hover:bg-[#F97316] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-[0_4px_15px_rgba(234,88,12,0.5)] transition-all hover:-translate-y-1">
            Get in Touch Now
          </Link>
        </div>
      </section>

    </div>
  );
}
