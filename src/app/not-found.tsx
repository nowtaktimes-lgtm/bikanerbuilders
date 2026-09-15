import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4 pt-20">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-black text-[#0F172A] mb-4 drop-shadow-xl">404</h1>
        <div className="w-24 h-2 bg-[#EA580C] mx-auto mb-8 rounded-full"></div>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Lagta hai aap galat naksha padh rahe hain!
        </h2>
        
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let&apos;s get you back on solid ground.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="bg-[#0F172A] hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_4px_20px_rgba(15,23,42,0.3)] hover:-translate-y-1"
          >
            Back to Home
          </Link>
          <Link 
            href="/contact"
            className="bg-white border-2 border-gray-200 hover:border-[#EA580C] text-gray-700 hover:text-[#EA580C] font-bold py-4 px-8 rounded-xl transition-all"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
