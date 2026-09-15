'use client';

import React from 'react';
import Link from 'next/link';
import { useSettings } from '@/components/SettingsProvider';

interface MobileBottomBarProps {
  whatsappMessage?: string;
}

export default function MobileBottomBar({
  whatsappMessage = 'Namaste, mujhe apne plot ka naksha / construction rate chahiye.',
}: MobileBottomBarProps) {
  
  const settings = useSettings();
  const waUrl = `https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const telUrl = `tel:${settings.primaryPhone.startsWith('+') ? settings.primaryPhone : '+' + settings.primaryPhone.replace(/[^0-9]/g, '')}`;

  return (
    <div 
      className="fixed bottom-0 left-0 w-full z-50 flex md:hidden shadow-[0_-8px_20px_rgba(0,0,0,0.12)] bg-white pb-safe"
    >
      <Link 
        href={telUrl}
        className="w-1/2 h-16 bg-[#0F172A] text-white flex items-center justify-center font-bold text-base tracking-wide active:bg-[#1E293B] transition-colors"
        aria-label="Call Us Now"
      >
        <span className="flex items-center gap-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-5 h-5"
          >
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
          </svg>
          Call Now
        </span>
      </Link>

      <Link 
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2 h-16 bg-[#25D366] text-white flex items-center justify-center font-bold text-base tracking-wide active:bg-[#1DA851] transition-colors"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="flex items-center gap-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-6 h-6"
          >
            <path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008a.86.86 0 00-.618.291c-.215.233-.822.805-.822 1.96 0 1.155.843 2.27 1.96 2.443.116.175 1.636 2.5 3.96 3.504.552.238.983.38 1.318.487.553.176 1.057.151 1.455.092.445-.067 1.378-.563 1.572-1.107.193-.544.193-1.01.136-1.107-.058-.097-.215-.155-.447-.272z" />
          </svg>
          WhatsApp Us
        </span>
      </Link>
    </div>
  );
}
