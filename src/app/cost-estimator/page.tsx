import React from 'react';
import { Metadata } from 'next';
import CostCalculator from '@/components/CostCalculator';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Construction Cost Calculator in Bikaner | Free Estimate',
  description: 'Calculate your home construction cost instantly with our free online estimator. Get accurate quotes for standard, premium, and luxury builds in Bikaner.',
  alternates: {
    canonical: 'https://bikanerbuilders.in/cost-estimator',
  }
};

export default function CostEstimatorPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-[#0F172A] relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-radial-pattern-light"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-orange-400 font-bold text-sm tracking-widest uppercase mb-6 border border-white/20 backdrop-blur-sm shadow-xl">
            Free Online Tool
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            Construction Cost <span className="text-[#EA580C]">Estimator</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium mb-0 leading-relaxed drop-shadow-md">
            Planning to build your dream home? Use our interactive calculator to get an instant estimate for your construction project in Bikaner.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 relative z-20 -mt-10 md:-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CostCalculator />
          
          <div className="mt-16 max-w-3xl mx-auto text-center prose prose-lg text-gray-600">
            <h2 className="text-2xl font-black text-[#0F172A] mb-4">How does this calculator work?</h2>
            <p>
              Our construction cost calculator uses current market rates in Bikaner to provide you with a highly accurate estimate. The final cost includes the foundation, structure, finishing, plumbing, and electrical work based on the selected quality tier. 
            </p>
            <p>
              Please note that architectural design, 3D elevation, and government approval fees are typically not included in raw per-square-foot construction estimates, but we offer them as part of our full Turnkey packages.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
