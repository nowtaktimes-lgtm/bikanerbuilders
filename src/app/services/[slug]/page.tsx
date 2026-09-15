import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getGlobalSettings } from '@/lib/api';
import { generateServiceSchema } from '@/lib/schema';

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const globalSettings = await getGlobalSettings();
  
  const telUrl = `tel:${globalSettings.primaryPhone.startsWith('+') ? globalSettings.primaryPhone : '+' + globalSettings.primaryPhone.replace(/[^0-9]/g, '')}`;
  const waUrl = (text: string) => `https://wa.me/${globalSettings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
  // Mock data mapping based on slug
  const serviceData: Record<string, any> = {
    '2d-naksha': {
      title: '2D Vastu Naksha',
      desc: 'Expert floor planning designed strictly with Vastu Shastra principles to maximize space and positive energy.',
      price: '₹5 / sq.ft.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
      features: ['100% Vastu Compliant', '2 Free Revisions', 'Furniture Layout', 'Column Marking'],
    },
    '3d-elevation': {
      title: '3D Front Elevation',
      desc: 'Photorealistic 3D rendering of your dream home exterior before construction begins.',
      price: '₹3,500 / view',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
      features: ['High-Res Day View', 'Material Specifications', 'Color Options', 'Boundary Wall Design'],
    },
    'turnkey-construction': {
      title: 'Turnkey Construction',
      desc: 'Complete hassle-free construction from foundation to handover with premium materials.',
      price: 'Starts ₹1,450 / sq.ft.',
      image: 'https://images.unsplash.com/photo-1541888087643-d28bc9d7fb23?q=80&w=1200&auto=format&fit=crop',
      features: ['A-Grade Materials', 'Timely Handover', 'Dedicated Supervisor', 'Structural Warranty'],
    },
    'interior-design': {
      title: 'POP & Interior Design',
      desc: 'Luxurious false ceilings, modular kitchens, and custom woodwork for a premium living experience.',
      price: 'Custom Quote',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b14666249?q=80&w=1200&auto=format&fit=crop',
      features: ['3D Interior Views', 'Custom Furniture', 'Lighting Design', 'Premium Finishes'],
    }
  };

  const service = serviceData[resolvedParams.slug] || serviceData['turnkey-construction'];
  
  const fullUrl = `https://bikanerbuilders.in/services/${resolvedParams.slug}`;
  const serviceSchema = generateServiceSchema(service, fullUrl);

  return (
    <div className="pt-24 pb-20 bg-slate-50">
      {/* Inject Service JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-6 tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {service.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href={waUrl(`I'm interested in ${service.title}`)}
                className="bg-[#25D366] hover:bg-[#1fae54] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors flex justify-center items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008a.86.86 0 00-.618.291c-.215.233-.822.805-.822 1.96 0 1.155.843 2.27 1.96 2.443.116.175 1.636 2.5 3.96 3.504.552.238.983.38 1.318.487.553.176 1.057.151 1.455.092.445-.067 1.378-.563 1.572-1.107.193-.544.193-1.01.136-1.107-.058-.097-.215-.155-.447-.272z" /></svg>
                Get Quote on WhatsApp
              </Link>
              <Link 
                href={telUrl}
                className="bg-[#EA580C] hover:bg-[#F97316] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors flex justify-center items-center"
              >
                Call Now
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 relative">
          
          {/* Main Content Area */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-black text-[#0F172A] mb-8">What&apos;s Included</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {service.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 text-green-500">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-lg font-bold text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-black text-[#0F172A] mb-8">Pricing Plans</h2>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#EA580C] text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-bl-xl">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Premium Package</h3>
              <p className="text-4xl font-black text-[#EA580C] mb-6">{service.price}</p>
              <p className="text-gray-600 mb-8 border-b border-slate-100 pb-8">
                Comprehensive service tailored for Bikaner&apos;s climate and local authority regulations.
              </p>
              <button className="w-full bg-[#0F172A] hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-colors">
                Select Package
              </button>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-28 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden lg:block">
              <h3 className="text-2xl font-black text-[#0F172A] mb-6">Quick Enquiry</h3>
              
              <div className="flex items-center gap-4 mb-8 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-3xl">🛡️</span>
                <div>
                  <p className="font-bold text-[#0F172A]">100% Quality Assured</p>
                  <p className="text-sm text-gray-500">Trusted by 500+ clients</p>
                </div>
              </div>

              <div className="space-y-4">
                <Link 
                  href={waUrl(`I'm interested in ${service.title}`)}
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1fae54] text-white font-bold py-4 rounded-xl transition-colors shadow-md"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008a.86.86 0 00-.618.291c-.215.233-.822.805-.822 1.96 0 1.155.843 2.27 1.96 2.443.116.175 1.636 2.5 3.96 3.504.552.238.983.38 1.318.487.553.176 1.057.151 1.455.092.445-.067 1.378-.563 1.572-1.107.193-.544.193-1.01.136-1.107-.058-.097-.215-.155-.447-.272z" /></svg>
                  WhatsApp Us
                </Link>
                <Link 
                  href="/contact"
                  className="flex items-center justify-center w-full bg-white border-2 border-[#0F172A] hover:bg-slate-50 text-[#0F172A] font-bold py-4 rounded-xl transition-colors"
                >
                  View Contact Details
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
