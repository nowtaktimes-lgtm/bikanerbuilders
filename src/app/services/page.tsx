import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllServices } from '@/lib/api';
import { getCombinedServices } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Our Services | Bikaner Builders',
  description: 'Explore the comprehensive range of construction, architecture, and interior design services offered by Bikaner Builders.',
};

export default async function ServicesPage() {
  const dynamicServices = await getAllServices();
  const services = getCombinedServices(dynamicServices);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#EA580C]">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-slate-300 font-light leading-relaxed">
            From visionary 2D Nakshas to complete turnkey constructions, we bring your dream spaces to life with unmatched precision and quality.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {services && services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              // Strip HTML tags from content for the excerpt
              const rawText = service.content?.replace(/(<([^>]+)>)/gi, "") || "";
              const excerpt = rawText.length > 120 ? rawText.substring(0, 120) + '...' : rawText;

              return (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl border border-slate-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                >
                  <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                    {service.featuredImage?.node?.sourceUrl ? (
                      <Image 
                        src={service.featuredImage.node.sourceUrl} 
                        alt={service.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                        <span className="text-slate-400 font-bold text-lg">Bikaner Builders</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-[#EA580C] transition-colors">
                      {service.title}
                    </h2>
                    
                    <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                      {excerpt || "Explore our premium services crafted to perfection."}
                    </p>
                    
                    <Link 
                      href={service.uri || `/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-[#EA580C] font-bold text-sm tracking-wide uppercase mt-auto group/btn"
                    >
                      View Details
                      <svg 
                        className="w-4 h-4 transform group-hover/btn:translate-x-2 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-slate-700 mb-4">No Services Found</h3>
            <p className="text-slate-500">Please check back later or add services from the admin panel.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10 text-center">
        <div className="bg-gradient-to-r from-[#EA580C] to-orange-400 rounded-3xl p-10 sm:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-black opacity-10 rounded-full blur-2xl"></div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 relative z-10">
            Ready to Start Your Project?
          </h2>
          <p className="text-orange-50 text-lg mb-8 relative z-10">
            Contact us today for a free consultation and let's build something extraordinary together.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[#EA580C] px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:scale-105 transition-all shadow-xl relative z-10"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}

