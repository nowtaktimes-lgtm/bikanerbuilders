import React from 'react';
import { Metadata } from 'next';
import CostCalculator from '@/components/CostCalculator';

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
          {/* Task 1: Updated Main Hero Heading */}
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            House Construction Cost <span className="text-[#EA580C]">Estimator Bikaner</span>
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

          {/* Task 2: SEO FAQ Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-[#0F172A] text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-3">
                  What is the current construction rate in Bikaner (2026)?
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Standard construction starts at ₹1,500/sqft, while premium and luxury turnkey projects range between ₹1,800 to ₹2,200/sqft depending on material quality and interior finishes.
                </p>
              </div>
              <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-3">
                  Does this estimate include architectural maps and 3D elevation?
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Raw per-square-foot rates typically cover structural and finishing work. However, our comprehensive Turnkey Packages at Bikaner Builders include free 2D floor plans, 3D elevations, and Vastu consultation.
                </p>
              </div>
              <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-3">
                  Why choose turnkey construction over local contractors in Bikaner?
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Turnkey construction offers a single point of contact, guaranteed quality, fixed timelines, and zero hidden costs. You avoid the daily stress of managing multiple laborers and material vendors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
