import React from 'react';
import Link from 'next/link';

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-slate-900 border-t border-slate-800 flex justify-around p-3 pb-safe md:hidden">
      <Link href="/" className="flex flex-col items-center gap-1 text-slate-400 hover:text-orange-500 active:text-orange-500 transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        <span className="text-[10px] font-medium tracking-wide">Home</span>
      </Link>
      <Link href="/#services" className="flex flex-col items-center gap-1 text-slate-400 hover:text-orange-500 active:text-orange-500 transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
        <span className="text-[10px] font-medium tracking-wide">Services</span>
      </Link>
      <Link href="/#portfolio" className="flex flex-col items-center gap-1 text-slate-400 hover:text-orange-500 active:text-orange-500 transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
        <span className="text-[10px] font-medium tracking-wide">Gallery</span>
      </Link>
      <Link href="tel:9376590313" className="flex flex-col items-center gap-1 text-orange-500 hover:text-orange-400 active:text-orange-400 transition-colors">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" /></svg>
        <span className="text-[10px] font-medium tracking-wide">Call</span>
      </Link>
    </div>
  );
}
