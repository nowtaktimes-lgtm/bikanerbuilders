export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateWebPageSchema({
  title,
  description,
  url,
  datePublished,
  dateModified
}: {
  title: string;
  description?: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    "url": url,
    "name": title,
    ...(description ? { "description": description } : {}),
    "isPartOf": {
      "@id": "https://www.bikanerbuilders.in/#website"
    },
    ...(datePublished ? { "datePublished": datePublished } : {}),
    ...(dateModified ? { "dateModified": dateModified } : (datePublished ? { "dateModified": datePublished } : {}))
  };
}

export function generateLocationServiceSchema({
  locationName,
  url,
  description
}: {
  locationName: string;
  url: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Construction & Architectural Services in ${locationName}`,
    "serviceType": "House Construction",
    "provider": {
      "@type": "GeneralContractor",
      "@id": "https://www.bikanerbuilders.in/#organization",
      "name": "Bikaner Builders",
      "url": "https://www.bikanerbuilders.in"
    },
    "areaServed": {
      "@type": "Place",
      "name": locationName
    },
    ...(description ? { "description": description } : {}),
    "url": url
  };
}

export function generateDynamicServiceSchema({
  title,
  url,
  description
}: {
  title: string;
  url: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "serviceType": "Construction Service",
    "provider": {
      "@type": "GeneralContractor",
      "@id": "https://www.bikanerbuilders.in/#organization",
      "name": "Bikaner Builders",
      "url": "https://www.bikanerbuilders.in"
    },
    ...(description ? { "description": description } : {}),
    "url": url
  };
}

export function generateBlogPostSchema({
  title,
  url,
  description,
  imageUrl,
  datePublished,
  dateModified
}: {
  title: string;
  url: string;
  description?: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  // Safeguard: Only use valid public domain images; never output backend/staging URLs or generic substitutes
  const isValidPublicImage =
    imageUrl &&
    imageUrl.startsWith('https://www.bikanerbuilders.in') &&
    !imageUrl.includes('beckend.bikanerbuilders.in') &&
    !imageUrl.includes('localhost');

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    ...(description ? { "description": description } : {}),
    "url": url,
    ...(isValidPublicImage ? { "image": imageUrl } : {}),
    ...(datePublished ? { "datePublished": datePublished } : {}),
    ...(dateModified ? { "dateModified": dateModified } : (datePublished ? { "dateModified": datePublished } : {})),
    "author": {
      "@type": "Organization",
      "@id": "https://www.bikanerbuilders.in/#organization",
      "name": "Bikaner Builders"
    },
    "publisher": {
      "@type": "GeneralContractor",
      "@id": "https://www.bikanerbuilders.in/#organization",
      "name": "Bikaner Builders",
      "url": "https://www.bikanerbuilders.in"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
}

export function generateLocationSchema(locationData: { title?: string } | null | undefined, fullUrl: string) {
  return generateLocationServiceSchema({
    locationName: locationData?.title || "Bikaner",
    url: fullUrl
  });
}

export function generateServiceSchema(serviceData: { title?: string; excerpt?: string; content?: string } | null | undefined, fullUrl: string) {
  return generateDynamicServiceSchema({
    title: serviceData?.title || "Construction Service",
    url: fullUrl,
    description: serviceData?.excerpt?.replace(/(<([^>]+)>)/gi, "") || serviceData?.content?.replace(/(<([^>]+)>)/gi, "").substring(0, 160) || undefined
  });
}

export function generateArticleSchema(postData: { title?: string; date?: string } | null | undefined, fullUrl: string) {
  return generateBlogPostSchema({
    title: postData?.title || "Article",
    url: fullUrl,
    datePublished: postData?.date
  });
}

export function generateGeneralContractorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": "https://www.bikanerbuilders.in/#organization",
    "name": "Bikaner Builders",
    "image": "https://www.bikanerbuilders.in/assets/bikaner_builders_engineering_team.jpg",
    "telephone": "+91-93765-90313",
    "url": "https://www.bikanerbuilders.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No 04, Opp Govt School, Napasar Rd, Ridmalsar Sipahiyan",
      "addressLocality": "Bikaner",
      "addressRegion": "Rajasthan",
      "postalCode": "334022",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.0229,
      "longitude": 73.3119
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bikaner"
      },
      {
        "@type": "City",
        "name": "Nokha"
      },
      {
        "@type": "City",
        "name": "Deshnoke"
      },
      {
        "@type": "City",
        "name": "Napasar"
      }
    ]
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.bikanerbuilders.in/#website",
    "url": "https://www.bikanerbuilders.in",
    "name": "Bikaner Builders",
    "publisher": {
      "@id": "https://www.bikanerbuilders.in/#organization"
    }
  };
}

