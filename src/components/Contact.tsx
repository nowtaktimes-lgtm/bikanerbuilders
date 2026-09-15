'use client';

import React from 'react';
import Link from 'next/link';

export default function Contact() {
  const phoneNumber = "91XXXXXXXXXX";
  
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      
      {/* Blueprint Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'repeating-linear-gradient(#0F172A 0 1px, transparent 1px 100%), repeating-linear-gradient(90deg, #0F172A 0 1px, transparent 1px 100%)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4 tracking-tight">
            Let&apos;s Build Together
          </h2>
          <div className="w-24 h-1.5 bg-[#EA580C] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to start your project? Contact our engineering team for a free consultation and site visit anywhere in Bikaner.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Left Column: Contact Information */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-8">
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50">
              <h3 className="text-2xl font-black text-[#0F172A] mb-8">Contact Details</h3>
              
              <div className="space-y-6">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#EA580C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Direct Call</p>
                    <a href={`tel:+${phoneNumber}`} className="text-xl font-bold text-[#0F172A] hover:text-[#EA580C] transition-colors">
                      +91 {phoneNumber.substring(2)}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#EA580C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Email Us</p>
                    <a href="mailto:info@bikanerbuilders.in" className="text-lg font-bold text-[#0F172A] hover:text-[#EA580C] transition-colors">
                      info@bikanerbuilders.in
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#EA580C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Head Office</p>
                    <p className="text-lg font-bold text-[#0F172A]">
                      Bikaner Builders HQ,<br />
                      Karni Industrial Area,<br />
                      Bikaner, Rajasthan 334004
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#EA580C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Working Hours</p>
                    <p className="text-lg font-bold text-[#0F172A]">
                      Mon - Sat: 9:00 AM - 7:00 PM<br />
                      Sunday: Closed (Site Visits Only)
                    </p>
                  </div>
                </div>

              </div>

              {/* WhatsApp CTA */}
              <div className="mt-10">
                <Link 
                  href={`https://wa.me/${phoneNumber}?text=Namaste,%20mujhe%20apne%20plot%20ka%20naksha%20banwana%20hai.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1fae54] text-white font-black text-lg py-4 rounded-xl transition-colors shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008a.86.86 0 00-.618.291c-.215.233-.822.805-.822 1.96 0 1.155.843 2.27 1.96 2.443.116.175 1.636 2.5 3.96 3.504.552.238.983.38 1.318.487.553.176 1.057.151 1.455.092.445-.067 1.378-.563 1.572-1.107.193-.544.193-1.01.136-1.107-.058-.097-.215-.155-.447-.272z" />
                  </svg>
                  Chat on WhatsApp
                </Link>
              </div>

            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="w-full lg:w-7/12 h-[500px] lg:h-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112702.48398045952!2d73.23746617066922!3d28.01481191395886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fdd7efaf61cfd%3A0xc3974d643b9ccde0!2sBikaner%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Bikaner Builders Office Location"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
