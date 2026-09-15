import React from 'react';

export default function TermsConditions() {
  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          
          <h1 className="text-4xl font-black text-[#0F172A] mb-8">Terms & Conditions</h1>
          <p className="text-gray-500 mb-8 font-medium">Last Updated: October 2023</p>

          <div className="prose prose-slate max-w-none text-gray-600 space-y-6">
            
            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">1. Scope of Services</h2>
              <p>
                Bikaner Builders provides architectural planning (2D/3D), interior design, and turnkey construction services in Bikaner, Rajasthan. All designs and construction work are executed based on the finalized agreements signed by both parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">2. Payments & Advance Policies</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-[#0F172A]">Architectural Maps (2D/3D):</strong> A minimum 50% non-refundable advance is required before the commencement of any design work.</li>
                <li><strong className="text-[#0F172A]">Construction (Turnkey):</strong> Payments are tied strictly to project milestones as outlined in the physical contract.</li>
                <li>All quotations provided online or via phone are estimates. Final pricing is subject to a physical site inspection.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">3. Project Timelines</h2>
              <p>
                While we strive to meet all deadlines, timelines for construction and design delivery are estimates. Bikaner Builders is not liable for delays caused by unforeseen circumstances, including but not limited to severe weather, material shortages, or government regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">4. Limitation of Liability</h2>
              <p>
                Bikaner Builders shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use of our services or website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">5. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bikaner, Rajasthan.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
