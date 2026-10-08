import React from 'react';
import Link from 'next/link';
import { getAllServices } from '@/lib/api';
import { getCombinedServices } from '@/lib/services';

interface Props {
  currentSlug: string;
}

export default async function OtherServicesLinker({ currentSlug }: Props) {
  const dynamicServices = await getAllServices();
  const allServices = getCombinedServices(dynamicServices);
  
  const otherServices = allServices.filter(s => s.slug !== currentSlug);

  if (otherServices.length === 0) return null;

  return (
    <div className="mt-16 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 not-prose mb-12">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Explore Our Other Services</h3>
      <div className="flex flex-wrap gap-3">
        {otherServices.map((service, idx) => (
          <Link 
            key={idx}
            href={service.uri || `/services/${service.slug}`}
            className="px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-slate-700 font-medium hover:text-[#EA580C] hover:border-orange-300 hover:bg-orange-50 transition-colors shadow-sm"
          >
            {service.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
