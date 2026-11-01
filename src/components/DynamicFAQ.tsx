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
        q: `How do you manage site supervision in ${title}?`,
        a: `Our project team conducts regular site supervisory visits in ${title} to track construction progress, coordinate trades, and verify workmanship on-site.`
      },
      {
        q: `Are transport costs included for ${title}?`,
        a: `Yes, material transportation and delivery terms for ${title} are outlined in the agreed BOQ before work begins.`
      },
      {
        q: `Can you handle complete turnkey construction in ${title}?`,
        a: `Absolutely. From the initial 2D naksha to the final paint coat, we offer end-to-end turnkey solutions across all areas of ${title}.`
      }
    ],
    // Set 1: Local Climate & Soil
    [
      {
        q: `Do you plan foundations suited for ${title}'s ground conditions?`,
        a: `Yes, our project team assesses visible surface conditions, plot level, and local foundation depth in ${title} to coordinate appropriate foundation layouts. Specialized laboratory soil testing can be arranged separately if required for complex structures.`
      },
      {
        q: `Which materials work best for homes in ${title}?`,
        a: `Given the local weather patterns, we recommend and source climate-resistant materials that offer optimal thermal insulation and durability in ${title}.`
      },
      {
        q: `Are the 3D elevations designed for the local environment of ${title}?`,
        a: `Definitely. Our design team creates exterior elevations that not only look modern but are practically suited for the dust and heat conditions of ${title}.`
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
        a: `Yes, our team can assist you with local building bye-law guidelines and drawing documentation for submissions in ${title}.`
      },
      {
        q: `Is Vastu compliance factored into ${title} projects?`,
        a: `Yes, we integrate traditional Vastu Shastra principles from the initial layout stage for clients in ${title} upon request.`
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
        a: `The itemized BOQ explains the agreed project scope, specifications and charges. Any changes or additional work are discussed with the customer before proceeding.`
      }
    ],
    // Set 1: Process & Expertise
    [
      {
        q: `What are the standard steps involved in ${title}?`,
        a: `The process begins with an in-depth consultation, followed by structural planning, 3D visualization, and finally, disciplined on-site execution of the ${title}.`
      },
      {
        q: `How is quality supervised during the ${title} process?`,
        a: `Every phase of ${title} is overseen by our experienced construction supervision and technical planning team to maintain quality and safety standards.`
      },
      {
        q: `How do you ensure the quality of ${title}?`,
        a: `We conduct stage-wise quality checks during the construction of ${title}, verifying shuttering, reinforcement layouts, and curing in accordance with standard civil engineering norms.`
      }
    ],
    // Set 2: Customization & Vastu
    [
      {
        q: `Is ${title} fully customizable to Vastu principles?`,
        a: `Yes, our design team can integrate traditional Vastu Shastra guidelines into the layout of ${title} upon request to suit your personal preferences.`
      },
      {
        q: `Do you provide revisions during the ${title} phase?`,
        a: `Of course. We offer multiple design revisions during the planning stage of ${title} until you are satisfied with the outcome.`
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

