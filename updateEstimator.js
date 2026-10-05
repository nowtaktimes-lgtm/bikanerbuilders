const fs = require('fs');

let content = fs.readFileSync('src/app/cost-estimator/page.tsx', 'utf8');

if (!content.includes("import Image from 'next/image';")) {
    content = content.replace("import React from 'react';", "import React from 'react';\nimport Image from 'next/image';");
}

const newMetadata = `export const metadata: Metadata = {
  title: 'Construction Cost Calculator in Bikaner | Free Estimate',
  description: 'Calculate your home construction cost instantly with our free online estimator. Get accurate quotes for standard, premium, and luxury builds in Bikaner.',
  alternates: {
    canonical: 'https://bikanerbuilders.in/cost-estimator',
  },
  openGraph: {
    title: 'Construction Cost Calculator in Bikaner | Free Estimate',
    description: 'Calculate your home construction cost instantly with our free online estimator. Get accurate quotes for standard, premium, and luxury builds in Bikaner.',
    images: [
      {
        url: 'https://bikanerbuilders.in/assets/seo_turnkey.jpg',
        width: 1200,
        height: 630,
        alt: 'House Construction Cost Estimator Bikaner',
      },
    ],
  },
};`;

content = content.replace(/export const metadata: Metadata = \{[\s\S]*?canonical:[^\}]*\}\n\};/, newMetadata);

const oldHero = `<section className="bg-[#0F172A] relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-radial-pattern-light"></div>`;

const newHero = `<section className="bg-[#0F172A] relative py-20 md:py-28 overflow-hidden min-h-[400px] flex flex-col justify-center">
        <Image
          src="/assets/seo_turnkey.jpg"
          alt="House Construction Cost Estimator Bikaner - Bikaner Builders"
          title="Construction Cost Calculator Bikaner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 to-[#0F172A]/85 z-0"></div>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-radial-pattern-light z-0"></div>`;

content = content.replace(oldHero, newHero);

fs.writeFileSync('src/app/cost-estimator/page.tsx', content);
console.log('Updated cost-estimator page.tsx');
