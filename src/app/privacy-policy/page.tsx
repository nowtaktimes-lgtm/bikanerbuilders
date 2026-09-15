import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          
          <h1 className="text-4xl font-black text-[#0F172A] mb-8">Privacy Policy</h1>
          <p className="text-gray-500 mb-8 font-medium">Last Updated: October 2023</p>

          <div className="prose prose-slate max-w-none text-gray-600 space-y-6">
            
            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">1. Information We Collect</h2>
              <p>
                When you use the Bikaner Builders website (the "Site") or contact us via our lead forms or WhatsApp, we may collect the following personal information:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Full Name</li>
                <li>Phone Number (Mobile/WhatsApp)</li>
                <li>Email Address</li>
                <li>Project details (e.g., plot dimensions, location in Bikaner)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">2. How We Use Your Data</h2>
              <p>We use the collected information strictly for business purposes:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>To provide estimates for 2D Naksha, 3D Elevation, and construction services.</li>
                <li>To contact you regarding your specific inquiry.</li>
                <li>To schedule site visits and consultations.</li>
              </ul>
              <p className="mt-2 font-semibold text-[#EA580C]">
                *We do not sell, rent, or share your personal data with third-party marketers.*
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">3. Data Protection</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet or any wireless network can be guaranteed to be 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">4. Cookies</h2>
              <p>
                Our Site uses "cookies" to enhance user experience and for Google Ads conversion tracking. You can choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or the practices of this site, please contact us at:
              </p>
              <div className="mt-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <p className="font-bold text-[#0F172A]">Bikaner Builders</p>
                <p>Karni Industrial Area, Bikaner, Rajasthan 334004</p>
                <p>Email: privacy@bikanerbuilders.in</p>
                <p>Phone: +91 98765 43210</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
