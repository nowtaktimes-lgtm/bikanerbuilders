'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSettings } from '@/components/SettingsProvider';
import { LocationNode } from '@/lib/api';

interface FooterProps {
  locations?: LocationNode[];
}

export default function Footer({ locations = [] }: FooterProps) {
  const settings = useSettings();
  const currentYear = new Date().getFullYear();
  
  const topVillages = [
    "Nokha", "Deshnoke", "Napasar", "Kolayat", 
    "Lunkaransar", "Sri Dungargarh", "Khajuwala", 
    "Pugal", "Bajju", "Chhatargarh"
  ];

  const displayLocations = locations && locations.length > 0
    ? locations
    : topVillages.map(v => ({
        title: v,
        uri: `/locations/construction-in-${v.toLowerCase().replace(' ', '-')}`
      }));

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-24 md:pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top & Middle Sections (Brand & Quick Links) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              {settings?.siteLogo ? (
                <Image 
                  src={settings.siteLogo} 
                  alt="Bikaner Builders Logo" 
                  width={40} 
                  height={40} 
                  className="w-10 h-10 object-contain"
                />
              ) : (
                <div className="w-10 h-10 bg-[#EA580C] rounded-lg flex items-center justify-center text-white font-black text-xl shadow-md">
                  BB
                </div>
              )}
              <span className="text-2xl font-black tracking-tight text-[#0F172A]">
                Bikaner Builders
              </span>
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-sm">
              Premium construction, 3D architectural elevations, and Vastu-compliant floor planning for Bikaner city and surrounding rural areas. Quality you can trust.
            </p>
            {/* Address */}
            <div className="flex items-start gap-3 text-gray-700 mb-6">
              <svg className="w-5 h-5 mt-1 text-[#EA580C] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span className="font-medium whitespace-pre-line">{settings.officeAddress}</span>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-100 text-[#0F172A] flex items-center justify-center hover:bg-[#EA580C] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-100 text-[#0F172A] flex items-center justify-center hover:bg-[#EA580C] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#0F172A] font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-600 hover:text-[#EA580C] font-medium transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-[#EA580C] font-medium transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-600 hover:text-[#EA580C] font-medium transition-colors">Project Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-[#EA580C] font-medium transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-600 hover:text-[#EA580C] font-medium transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-[#0F172A] font-bold text-lg mb-6">Core Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services/2d-naksha" className="text-gray-600 hover:text-[#EA580C] font-medium transition-colors">2D Vastu Map / Naksha</Link></li>
              <li><Link href="/services/3d-elevation" className="text-gray-600 hover:text-[#EA580C] font-medium transition-colors">3D Front Elevation</Link></li>
              <li><Link href="/services/turnkey-construction" className="text-gray-600 hover:text-[#EA580C] font-medium transition-colors">Turnkey Construction</Link></li>
              <li><Link href="/services/interior-design" className="text-gray-600 hover:text-[#EA580C] font-medium transition-colors">POP & Interior Design</Link></li>
              <li><Link href="/services/structural-drawing" className="text-gray-600 hover:text-[#EA580C] font-medium transition-colors">Structural Drawings</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* SEO Village Silo - Bottom Section */}
      <div className="bg-[#0F172A] py-12 mt-8 rounded-t-3xl md:rounded-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-white mb-2">Recently Added Service Areas in Bikaner</h3>
            <p className="text-slate-400">Find specialized construction services in your local area</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {displayLocations.map((loc, index) => (
              <Link 
                key={index} 
                href={loc.uri}
                className="bg-white/10 hover:bg-[#EA580C] text-white px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all border border-white/5 hover:border-transparent"
              >
                {loc.title}
              </Link>
            ))}
            <Link 
              href="/locations"
              className="bg-transparent hover:bg-white/5 text-[#EA580C] px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all border border-[#EA580C]/50 hover:border-[#EA580C]"
            >
              View All Locations &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#0b1121] py-6 text-center text-slate-500 text-sm font-medium pb-24 md:pb-6">
        <div className="max-w-7xl mx-auto px-4">
          &copy; {currentYear} Bikaner Builders. All Rights Reserved. Designed for Bikaner.
        </div>
      </div>
    </footer>
  );
}
