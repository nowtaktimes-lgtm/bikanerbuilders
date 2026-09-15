'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type Category = 'All' | '3D Elevations' | '2D Floor Plans' | 'Completed Sites' | 'Interiors';

interface Project {
  id: string;
  title: string;
  category: Category;
  imageUrl: string;
}

const CATEGORIES: Category[] = [
  'All', 
  '3D Elevations', 
  '2D Floor Plans', 
  'Completed Sites', 
  'Interiors'
];

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Premium Villa in Nokha',
    category: '3D Elevations',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Modern Duplex Vastu Map',
    category: '2D Floor Plans',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Luxury Gypsum Ceiling',
    category: 'Interiors',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b14666249?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Turnkey Project Handover',
    category: 'Completed Sites',
    imageUrl: 'https://images.unsplash.com/photo-1541888087643-d28bc9d7fb23?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Commercial Front Elevation',
    category: '3D Elevations',
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Modular Kitchen Setup',
    category: 'Interiors',
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = PROJECTS.filter((project) => 
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="portfolio">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4 tracking-tight">
            Our Masterpieces
          </h2>
          <div className="w-24 h-1.5 bg-[#EA580C] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our vast portfolio of structural designs, 3D elevations, and completed construction projects across Bikaner district.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm md:text-base transition-all duration-300 border-2 ${
                activeCategory === category
                  ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-lg'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#EA580C] hover:text-[#EA580C]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-square md:aspect-[4/3]"
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-[#EA580C] text-white text-xs font-bold uppercase tracking-wider rounded-md mb-3 shadow-md">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-400">
              <p className="text-xl font-medium">No projects found for this category.</p>
            </div>
          )}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-[#0F172A] hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_4px_20px_rgba(15,23,42,0.3)] hover:-translate-y-1">
            View Complete Gallery <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

      </div>
    </section>
  );
}
