import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getGlobalSettings, fetchGraphQL } from '@/lib/api';
import { generateLocationSchema } from '@/lib/schema';
import DynamicMap from '@/components/DynamicMap';

// Types for the WPGraphQL response
interface LocationData {
  pincode?: string;
  customSeoHeading?: string;
}

interface LocationNode {
  title: string;
  featuredImage?: {
    node?: {
      sourceUrl?: string;
    };
  };
  locationData?: LocationData;
}

interface LocationResponse {
  location: LocationNode;
}



/**
 * Fetch specific location data by slug (URI)
 */
async function getLocationData(slug: string): Promise<LocationNode | null> {
  const query = `
    query GetLocationBySlug($id: ID!) {
      location(id: $id, idType: URI) {
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        locationData {
          pincode
          customSeoHeading
        }
      }
    }
  `;

  const response = await fetchGraphQL<LocationResponse>(query, { id: slug });
  
  if (response.errors || !response.data?.location) {
    console.log("Returning mock data for preview because WordPress API is unavailable.");
    const safeSlug = typeof slug === 'string' && slug.length > 0 ? slug : 'location';
    const capSlug = safeSlug.charAt(0).toUpperCase() + safeSlug.slice(1);
    
    // Mock Data Fallback for Preview
    return {
      title: capSlug,
      featuredImage: {
        node: {
          sourceUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1920&auto=format&fit=crop'
        }
      },
      locationData: {
        pincode: '334001',
        customSeoHeading: `Premium Builders & Architects in ${capSlug}`
      }
    };
  }

  return response.data.location;
}

// Generate metadata dynamically for SEO
export async function generateMetadata({ params }: { params: Promise<{ location: string }> }) {
  const resolvedParams = await params;
  const locationNode = await getLocationData(resolvedParams.location);
  
  if (!locationNode) {
    return { title: 'Location Not Found' };
  }
  
  const heading = locationNode.locationData?.customSeoHeading || locationNode.title;

  return {
    title: `${heading} | Bikaner Builders`,
    description: `Premium construction and 2D/3D map services in ${locationNode.title}${locationNode.locationData?.pincode ? ` (${locationNode.locationData.pincode})` : ''}.`,
  };
}

export default async function LocationPage({ params }: { params: Promise<{ location: string }> }) {
  const resolvedParams = await params;
  const [locationNode, globalSettings] = await Promise.all([
    getLocationData(resolvedParams.location),
    getGlobalSettings()
  ]);

  if (!locationNode) {
    notFound();
  }

  const { title, featuredImage, locationData } = locationNode;
  const customSeoHeading = locationData?.customSeoHeading || title;
  const pincode = locationData?.pincode || '';

  const dynamicWhatsappText = `Namaste, mujhe ${title} mein naksha banwana hai.`;
  const whatsappUrl = `https://wa.me/${globalSettings.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(dynamicWhatsappText)}`;
  const telUrl = `tel:${globalSettings.primaryPhone.startsWith('+') ? globalSettings.primaryPhone : '+' + globalSettings.primaryPhone.replace(/[^0-9]/g, '')}`;

  // Hardcode missing API fields to maintain layout structure
  const localPrice2d = '5'; 
  const faqSection = [
    { question: `${title} me 2D map banwane me kitna time lagta hai?`, answer: 'Sirf 3-4 din me first draft (Naksha) ready ho jata hai. Hum Vastu ke anusar design karte hain.' },
    { question: `Kya aap ${title} me construction ka theka (Turnkey) bhi lete hain?`, answer: 'Jee haan, hum with-material construction karte hain jisme A-grade quality cement aur steel use hota hai.' }
  ];

  // Generate FAQ Schema (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqSection.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const fullUrl = `https://bikanerbuilders.in/${resolvedParams.location}`;
  const locationSchema = generateLocationSchema(locationNode, fullUrl);

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      
      {/* Inject FAQ JSON-LD Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Inject Location JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      {/* Premium Dark Theme Hero Section */}
      <section className="bg-[#0F172A] relative py-24 md:py-32 overflow-hidden">
        {featuredImage?.node?.sourceUrl ? (
          <>
            <div className="absolute inset-0 z-0">
              <Image 
                src={featuredImage.node.sourceUrl} 
                alt={`${title} Construction`}
                fill 
                className="object-cover opacity-20"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent z-0"></div>
          </>
        ) : (
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-radial-pattern-light">
          </div>
        )}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-orange-400 font-bold text-sm tracking-widest uppercase mb-6 border border-white/20 backdrop-blur-sm shadow-xl">
            Serving {title} {pincode ? `- ${pincode} ` : ''}& Surrounding Areas
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            {customSeoHeading}
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium mb-10 leading-relaxed drop-shadow-md">
            Expert Vastu-compliant 2D Naksha, stunning 3D Front Elevations, and complete turnkey construction services tailored exclusively for the residents of <strong className="text-white">{title}</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1fae54] text-white font-black text-lg px-8 py-4 rounded-xl shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008a.86.86 0 00-.618.291c-.215.233-.822.805-.822 1.96 0 1.155.843 2.27 1.96 2.443.116.175 1.636 2.5 3.96 3.504.552.238.983.38 1.318.487.553.176 1.057.151 1.455.092.445-.067 1.378-.563 1.572-1.107.193-.544.193-1.01.136-1.107-.058-.097-.215-.155-.447-.272z" /></svg>
              Chat on WhatsApp
            </Link>
            <Link 
              href={telUrl}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
            >
              Call Now
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F172A] mb-4">Transparent Local Pricing</h2>
            <div className="w-16 h-1 bg-[#EA580C] mx-auto rounded-full"></div>
          </div>

          <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden transform hover:-translate-y-1 transition-all">
            <div className="bg-slate-50 p-8 text-center border-b border-slate-100">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-2">2D Vastu Naksha</h3>
              <p className="text-gray-500 font-medium">Customized for plots in {title}</p>
            </div>
            <div className="p-8 text-center">
              <div className="flex justify-center items-baseline mb-6">
                <span className="text-5xl font-black text-[#EA580C]">₹{localPrice2d}</span>
                <span className="text-xl text-gray-500 font-medium ml-2">/ sq.ft.</span>
              </div>
              
              <ul className="space-y-4 mb-8 text-left max-w-xs mx-auto">
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  <span className="font-medium">100% Vastu Compliant Design</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  <span className="font-medium">Furniture Layout Planning</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  <span className="font-medium">Up to 2 Free Revisions</span>
                </li>
              </ul>

              <Link href={whatsappUrl} target="_blank" className="block w-full bg-[#0F172A] hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-colors">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Map Section */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DynamicMap locationQuery={title} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F172A] mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-[#EA580C] mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {faqSection.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
