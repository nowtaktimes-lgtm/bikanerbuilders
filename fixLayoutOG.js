const fs = require('fs');

let layout = fs.readFileSync('src/app/layout.tsx', 'utf8');

const replacement = `  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  metadataBase: new URL('https://bikanerbuilders.in'),
  openGraph: {
    title: 'Top Builders in Bikaner | Free Site Visit & Vastu Map | 9351132772',
    description: 'Bikaner me ghar banwana hai? Get 100% Vastu-compliant 3D designs & turnkey construction with a transparent BOQ. Call now to book your FREE site inspection!',
    url: 'https://bikanerbuilders.in',
    siteName: 'Bikaner Builders',
    images: [
      {
        url: '/assets/og_default_bikaner_builders.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Villa in Bikaner by Bikaner Builders',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Builders in Bikaner | Free Site Visit & Vastu Map',
    description: 'Get 100% Vastu-compliant 3D designs & turnkey construction.',
    images: ['/assets/og_default_bikaner_builders.jpg'],
  },
};`;

// replace up to the end of the metadata block
layout = layout.replace(/icons: \{\s*icon: '\/icon\.svg',\s*apple: '\/icon\.svg',\s*\},[\s\S]*?\};/m, replacement);

fs.writeFileSync('src/app/layout.tsx', layout);
console.log('Layout patched');
