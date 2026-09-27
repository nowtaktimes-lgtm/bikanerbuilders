import React from 'react';

interface DynamicFAQProps {
  title: string;
  pageType: 'location' | 'service';
}

export default function DynamicFAQ({ title, pageType }: DynamicFAQProps) {
  const faqs = pageType === 'location' ? [
    {
      q: `Do you provide construction services across all areas of ${title}?`,
      a: `Yes, our engineering team covers the entirety of ${title}, ensuring timely material delivery and daily site supervision.`
    },
    {
      q: `What is the transportation cost for building materials to ${title}?`,
      a: `We provide a 100% transparent BOQ. Any logistical costs specific to ${title} are clearly discussed upfront with zero hidden charges.`
    },
    {
      q: `Are your 3D elevations and Vastu maps customized for plots in ${title}?`,
      a: `Absolutely. We design strictly according to your plot's dimensions, local climate, and Vastu principles.`
    }
  ] : [
    {
      q: `Why choose Bikaner Builders for ${title}?`,
      a: `With 10+ years of local expertise, we deliver premium ${title} using top-grade materials and government-approved structural standards.`
    },
    {
      q: `What is the estimated timeline and cost for ${title}?`,
      a: `The exact timeline and cost depend on your project's scale, but we guarantee strict adherence to deadlines and a transparent BOQ.`
    },
    {
      q: `Do you handle both material and labor for ${title}?`,
      a: `Yes, we provide end-to-end turnkey solutions, managing all labor and material sourcing for flawless execution.`
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-slate-900 group-open:text-orange-600 transition-colors">
              {faq.q}
              <span className="transition group-open:rotate-180 text-orange-500">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="text-slate-600 p-6 pt-0 leading-relaxed text-base">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
