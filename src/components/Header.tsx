'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSettings } from '@/components/SettingsProvider';

export default function Header() {
  const settings = useSettings();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <Link href="/" className="flex items-center gap-2 z-50">
            {settings?.siteLogo ? (
              <Image 
                src={settings.siteLogo} 
                alt="Bikaner Builders Logo" 
                width={40} 
                height={40} 
                className="w-10 h-10 object-contain"
              />
            ) : (
              <div className="w-10 h-10 bg-[#EA580C] rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg">
                BB
              </div>
            )}
            <span className={`text-2xl font-black tracking-tight ${isScrolled ? 'text-[#0F172A]' : 'text-[#0F172A] drop-shadow-md'}`}>
              {settings?.headerSiteTitle || 'Bikaner Builders'}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className={`font-bold hover:text-[#EA580C] transition-colors ${isScrolled ? 'text-gray-700' : 'text-[#0F172A] drop-shadow-sm'}`}>Home</Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className={`font-bold hover:text-[#EA580C] transition-colors flex items-center gap-1 ${isScrolled ? 'text-gray-700' : 'text-[#0F172A] drop-shadow-sm'}`}>
                Services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200 transform origin-top ${servicesDropdownOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}`}>
                <div className="py-2">
                  <Link href="/services/2d-naksha" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-[#EA580C]">2D Vastu Naksha</Link>
                  <Link href="/services/3d-elevation" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-[#EA580C]">3D Front Elevation</Link>
                  <Link href="/services/turnkey-construction" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-[#EA580C]">Turnkey Construction</Link>
                  <Link href="/services/interior-design" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-[#EA580C]">POP & Interior Design</Link>
                </div>
              </div>
            </div>

            <Link href="/portfolio" className={`font-bold hover:text-[#EA580C] transition-colors ${isScrolled ? 'text-gray-700' : 'text-[#0F172A] drop-shadow-sm'}`}>Portfolio</Link>
            <Link href="/about" className={`font-bold hover:text-[#EA580C] transition-colors ${isScrolled ? 'text-gray-700' : 'text-[#0F172A] drop-shadow-sm'}`}>About</Link>
            <Link href="/contact" className={`font-bold hover:text-[#EA580C] transition-colors ${isScrolled ? 'text-gray-700' : 'text-[#0F172A] drop-shadow-sm'}`}>Contact</Link>
          </nav>

          <div className="hidden lg:block">
            <Link href={settings?.headerButtonLink || '#contact'} className="bg-[#EA580C] hover:bg-[#F97316] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-[0_4px_14px_rgba(234,88,12,0.4)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.6)] hover:-translate-y-0.5">
              {settings?.headerButtonText || 'Get Quote'}
            </Link>
          </div>

          <button 
            className="lg:hidden relative z-50 p-2 text-[#0F172A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2.5 bg-white' : ''}`} />
              <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-[#0F172A] z-40 transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-center items-center ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center gap-6 text-white text-2xl font-black">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#EA580C] transition-colors">Home</Link>
          <div className="text-center">
            <span className="block mb-4 text-gray-400 text-sm uppercase tracking-widest">Our Services</span>
            <Link href="/services/2d-naksha" onClick={() => setMobileMenuOpen(false)} className="block text-xl hover:text-[#EA580C] mb-3 transition-colors">2D Vastu Naksha</Link>
            <Link href="/services/3d-elevation" onClick={() => setMobileMenuOpen(false)} className="block text-xl hover:text-[#EA580C] mb-3 transition-colors">3D Front Elevation</Link>
            <Link href="/services/turnkey-construction" onClick={() => setMobileMenuOpen(false)} className="block text-xl hover:text-[#EA580C] mb-3 transition-colors">Turnkey Construction</Link>
            <Link href="/services/interior-design" onClick={() => setMobileMenuOpen(false)} className="block text-xl hover:text-[#EA580C] transition-colors">POP & Interior Design</Link>
          </div>
          <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#EA580C] transition-colors mt-2">Portfolio</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#EA580C] transition-colors">About Us</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#EA580C] transition-colors">Contact</Link>
          
          <Link href={settings?.headerButtonLink || '#contact'} onClick={() => setMobileMenuOpen(false)} className="mt-8 bg-[#EA580C] text-white px-8 py-4 rounded-xl text-lg font-black w-full max-w-[200px] text-center">
            {settings?.headerButtonText || 'Get Quote Now'}
          </Link>
        </nav>
      </div>
    </header>
  );
}
