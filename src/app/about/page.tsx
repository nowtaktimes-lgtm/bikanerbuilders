import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="pt-20">
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541888087643-d28bc9d7fb23?q=80&w=1920&auto=format&fit=crop"
          alt="Bikaner Construction Team"
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
