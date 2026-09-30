import React from 'react';

interface DynamicFAQProps {
  title: string;
  pageType: 'location' | 'service';
}

function getDeterministicIndex(str: string, max: number): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  return hash % max;
}

export default function DynamicFAQ({ title, pageType }: DynamicFAQProps) {
  const locationSets = [
    // Set 0: Logistics & Site Visits
    [
      {
        q: `How do you manage daily site supervision in ${title}?`,
        a: `We assign dedicated site engineers to oversee construction in ${title}, ensuring daily progress tracking and strict quality control on-site.`
      },
      {
        q: `Are transport costs included for ${title}?`,
        a: `Yes, our detailed BOQ includes all logistical and transportation costs specific to ${title}, guaranteeing 100% transparency with zero hidden delivery charges.`
      },
      {
        q: `Can you handle complete turnkey construction in ${title}?`,
        a: `Absolutely. From the initial 2D naksha to the final paint coat, we offer end-to-end turnkey solutions across all areas of ${title}.`
      }
    ],
    // Set 1: Local Climate & Soil
    [
      {
        q: `Do you design foundations suited for ${title}'s specific soil conditions?`,
        a: `Yes, we always conduct a thorough soil analysis before construction in ${title} to engineer a foundation that guarantees long-term structural integrity.`
      },
      {
        q: `Which materials work best for homes in ${title}?`,
        a: `Given the local weather patterns, we recommend and source climate-resistant materials that offer optimal thermal insulation and durability in ${title}.`
      },
      {
        q: `Are the 3D elevations designed for the local environment of ${title}?`,
        a: `Definitely. Our architects design exterior elevations that not only look premium but are practically suited for the dust and heat conditions of ${title}.`
      }
    ],
    // Set 2: Timelines & Approvals
    [
      {
        q: `How long does a standard turnkey project take in ${title}?`,
        a: `Depending on the plot size and requirements, most residential projects in ${title} are completed strictly within the agreed timeline of 8 to 12 months.`
      },
      {
        q: `Do you assist with local municipal approvals in ${title}?`,
        a: `Yes, our team can guide you through the local building bye-laws and necessary documentation required for municipal approvals in ${title}.`
      },
      {
        q: `Is Vastu compliance factored into ${title} projects?`,
        a: `Yes, we ensure 100% Vastu compliance right from the initial floor planning stage for all our clients in ${title}.`
      }
    ]
  ];

  const serviceSets = [
    // Set 0: Quality & BOQ
    [
      {
        q: `How is the pricing calculated for ${title}?`,
        a: `Our pricing for ${title} is based on a highly detailed Bill of Quantities (BOQ), ensuring you only pay for exactly what goes into your project.`
      },
      {
        q: `Can I see the exact brands used for ${title}?`,
        a: `Yes, we provide a complete material specification list upfront. You will know exactly which premium brands are being utilized for ${title}.`
      },
      {
        q: `Are there any hidden charges associated with ${title}?`,
        a: `Never. We pride ourselves on 100% transparency. The final quote provided for ${title} covers all aspects without any surprise costs.`
      }
    ],
    // Set 1: Process & Expertise
    [
      {
        q: `What are the standard steps involved in ${title}?`,
        a: `The process begins with an in-depth consultation, followed by structural planning, 3D visualization, and finally, flawless execution of the ${title}.`
      },
      {
        q: `Are certified engineers handling the ${title} process?`,
        a: `Absolutely. Every phase of ${title} is supervised and executed by our team of certified civil engineers and expert architects.`
      },
      {
        q: `How do you ensure the quality of ${title}?`,
        a: `We conduct multi-level quality checks during the entire lifecycle of ${title}, strictly adhering to modern structural engineering codes.`
      }
    ],
    // Set 2: Customization & Vastu
    [
      {
        q: `Is ${title} fully customizable to Vastu principles?`,
        a: `Yes, our team specializes in deeply integrating Vastu Shastra principles into every aspect of ${title} to ensure a positive living space.`
      },
      {
        q: `Do you provide revisions during the ${title} phase?`,
        a: `Of course. We offer multiple design revisions during the planning stage of ${title} until you are 100% satisfied with the outcome.`
      },
      {
        q: `Can the design for ${title} be tailored to my budget?`,
        a: `Yes, we offer flexible material and design options to customize the ${title} exactly to your financial requirements without compromising structural safety.`
      }
    ]
  ];

  const setIndex = getDeterministicIndex(title, 3);
  const faqs = pageType === 'location' ? locationSets[setIndex] : serviceSets[setIndex];

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
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-4 md:p-6 text-sm md:text-base text-slate-900 group-open:text-orange-600 transition-colors">
              <h3 className="inline m-0 font-inherit text-inherit">{faq.q}</h3>
              <span className="transition group-open:rotate-180 text-orange-500">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="text-slate-600 p-4 md:p-6 pt-0 leading-relaxed text-xs md:text-sm">
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

