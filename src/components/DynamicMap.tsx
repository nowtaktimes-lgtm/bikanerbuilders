import React from 'react';

interface DynamicMapProps {
  locationQuery: string;
}

export default function DynamicMap({ locationQuery }: DynamicMapProps) {
  if (!locationQuery) return null;

  return (
    <div className="w-full mt-16 mb-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-[#0F172A] mb-4">
          Our Reach in {locationQuery}
        </h2>
        <div className="w-16 h-1 bg-[#EA580C] mx-auto rounded-full"></div>
      </div>
      
      <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2">
        <div className="rounded-xl overflow-hidden">
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(locationQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="400"
            className="border-0 w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map of ${locationQuery}`}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
