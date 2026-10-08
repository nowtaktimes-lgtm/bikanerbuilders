'use client';

import React, { useState, useEffect } from 'react';
import QuoteModal from './QuoteModal';
import Link from 'next/link';
import Image from 'next/image';
import { useSettings } from '@/components/SettingsProvider';
import { WpNode } from '@/lib/api';

interface HeaderProps {
  services?: WpNode[];
}

export default function Header({ services }: HeaderProps) {
  const settings = useSettings();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setQuoteModalOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
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
                  {/* Architecture & Design Group */}
                  <div className="px-6 py-2 text-xs font-black text-slate-400 uppercase tracking-wider">Architecture & Design</div>
                  {(services || []).filter(s => ['architect-in-bikaner', '2d-naksha', '3d-elevation', 'structural-drawing'].includes(s.slug || '')).map((service, index) => (
                    <Link key={`arch-${index}`} href={service.uri || "#"} className="block px-6 py-2 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-[#EA580C]">{service.title}</Link>
                  ))}
                  
                  {/* Construction Group */}
                  <div className="px-6 py-2 mt-2 text-xs font-black text-slate-400 uppercase tracking-wider border-t border-slate-50 pt-4">Construction</div>
                  {(services || []).filter(s => !['architect-in-bikaner', '2d-naksha', '3d-elevation', 'structural-drawing'].includes(s.slug || '')).map((service, index) => (
                    <Link key={`const-${index}`} href={service.uri || "#"} className="block px-6 py-2 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-[#EA580C]">{service.title}</Link>
                  ))}
                  {/* All Services Master Link */}
                  <div className="border-t border-slate-100 mt-2 pt-2">
                    <Link href="/services" className="block px-6 py-3 text-sm font-bold text-[#EA580C] hover:bg-orange-50">View All Services &rarr;</Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/portfolio" className={`font-bold hover:text-[#EA580C] transition-colors ${isScrolled ? 'text-gray-700' : 'text-[#0F172A] drop-shadow-sm'}`}>Portfolio</Link>
            <div 
              className="relative group"
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <button className={`font-bold hover:text-[#EA580C] transition-colors flex items-center gap-1 ${isScrolled ? 'text-gray-700' : 'text-[#0F172A] drop-shadow-sm'}`}>
                Resources
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200 transform origin-top ${resourcesDropdownOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}`}>
                <div className="py-2">
                  <Link href="/cost" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-[#EA580C]">Construction Cost Guide</Link>
                  <Link href="/cost-estimator" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-[#EA580C]">Cost Estimator Tool</Link>
                </div>
              </div>
            </div>
            <Link href="/about" className={`font-bold hover:text-[#EA580C] transition-colors ${isScrolled ? 'text-gray-700' : 'text-[#0F172A] drop-shadow-sm'}`}>About</Link>
            <Link href="/contact" className={`font-bold hover:text-[#EA580C] transition-colors ${isScrolled ? 'text-gray-700' : 'text-[#0F172A] drop-shadow-sm'}`}>Contact</Link>
          </nav>

          <div className="hidden lg:block">
            <button onClick={() => setQuoteModalOpen(true)} className="bg-[#EA580C] hover:bg-[#F97316] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-[0_4px_14px_rgba(234,88,12,0.4)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.6)] hover:-translate-y-0.5">
              {settings?.headerButtonText || 'Get Quote'}
            </button>
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
        <nav className="flex flex-col items-center gap-5 text-white w-full px-6 overflow-y-auto max-h-[85vh] pb-10">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold hover:text-[#EA580C] transition-colors">Home</Link>
          
          <div className="w-full max-w-xs text-center border-y border-slate-700/50 py-3">
            <button 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)} 
              className="text-2xl font-bold flex items-center justify-center gap-2 w-full hover:text-[#EA580C] transition-colors"
            >
              Services
              <svg className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="flex flex-col gap-3 bg-slate-800/40 rounded-2xl py-4 px-2">
                {/* Architecture & Design Group */}
                <div className="px-2 pb-1 text-xs font-black text-slate-500 uppercase tracking-wider">Architecture & Design</div>
                {(services || []).filter(s => ['architect-in-bikaner', '2d-naksha', '3d-elevation', 'structural-drawing'].includes(s.slug || '')).map((service, index) => (
                  <Link key={`m-arch-${index}`} href={service.uri || "#"} onClick={() => setMobileMenuOpen(false)} className="px-2 text-lg font-medium text-slate-300 hover:text-[#EA580C]">{service.title}</Link>
                ))}
                
                {/* Construction Group */}
                <div className="px-2 pb-1 mt-2 text-xs font-black text-slate-500 uppercase tracking-wider border-t border-slate-700/50 pt-3">Construction</div>
                {(services || []).filter(s => !['architect-in-bikaner', '2d-naksha', '3d-elevation', 'structural-drawing'].includes(s.slug || '')).map((service, index) => (
                  <Link key={`m-const-${index}`} href={service.uri || "#"} onClick={() => setMobileMenuOpen(false)} className="px-2 text-lg font-medium text-slate-300 hover:text-[#EA580C]">{service.title}</Link>
                ))}
                <div className="border-t border-slate-700/50 mt-2 pt-3">
                  <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-[#EA580C]">View All Services &rarr;</Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold hover:text-[#EA580C] transition-colors">Portfolio</Link>
          <div className="w-full max-w-xs text-center border-y border-slate-700/50 py-3">
            <button 
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)} 
              className="text-2xl font-bold flex items-center justify-center gap-2 w-full hover:text-[#EA580C] transition-colors"
            >
              Resources
              <svg className={`w-5 h-5 transition-transform duration-300 ${mobileResourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${mobileResourcesOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="flex flex-col gap-3 bg-slate-800/40 rounded-2xl py-4 px-2">
                <Link href="/cost" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-[#EA580C]">Construction Cost Guide</Link>
                <Link href="/cost-estimator" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-[#EA580C]">Cost Estimator Tool</Link>
              </div>
            </div>
          </div>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold hover:text-[#EA580C] transition-colors">About Us</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold hover:text-[#EA580C] transition-colors">Contact</Link>
          
          <button onClick={() => { setMobileMenuOpen(false); setQuoteModalOpen(true); }} className="mt-6 bg-[#EA580C] hover:bg-[#F97316] text-white px-8 py-4 rounded-xl text-lg font-black w-full max-w-[200px] text-center shadow-lg hover:shadow-orange-500/30 transition-all">
            {settings?.headerButtonText || 'Get Quote'}
          </button>
        </nav>
      </div>
    </header>
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
}

