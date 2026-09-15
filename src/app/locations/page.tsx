import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getAllLocations } from '@/lib/api';

export const metadata: Metadata = {
  title: 'All Service Areas | Bikaner Builders',
  description: 'Explore the 300+ villages and areas where we provide premium turnkey construction and 2D/3D map services in Bikaner.',
};

const DUMMY_LOCATIONS = [
  "Nokha", "Deshnoke", "Napasar", "Kolayat", 
  "Lunkaransar", "Sri Dungargarh", "Khajuwala", 
  "Pugal", "Bajju", "Chhatargarh"
];

export default async function LocationsPage() {
  const fetchedLocations = await getAllLocations();

  const locations = fetchedLocations && fetchedLocations.length > 0
    ? fetchedLocations
    : DUMMY_LOCATIONS.map(village => ({
        title: village,
        uri: `/locations/construction-in-${village.toLowerCase().replace(' ', '-')}`
      }));

  return (
    <div className="bg-[#0b1121] min-h-screen text-slate-200 pb-24">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
          Our Service Areas in <span className="text-[#EA580C]">Bikaner</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Explore the 300+ villages and areas where we provide premium turnkey construction and 2D/3D map services.
        </p>
      </section>

      {/* Grid Layout */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {locations.map((loc, index) => (
            <Link 
              key={index}
              href={loc.uri}
              className="group block bg-[#0F172A] border border-white/5 rounded-2xl p-6 hover:bg-[#1E293B] hover:border-[#EA580C]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#EA580C] group-hover:bg-[#EA580C] group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white group-hover:text-[#EA580C] transition-colors duration-300">
                      {loc.title}
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">Construction Services</p>
                  </div>
                </div>
                <div className="text-slate-500 group-hover:text-[#EA580C] transition-colors duration-300 transform group-hover:translate-x-1">
                  &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
