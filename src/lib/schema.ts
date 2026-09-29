export function generateLocationSchema(locationData: { title?: string; locationData?: { pincode?: string } } | null | undefined, fullUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Bikaner Builders",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No 04, Opp Govt School, Napasar Rd, Ridmalsar Sipahiyan",
        "addressLocality": "Bikaner",
        "addressRegion": "Rajasthan",
        "postalCode": "334022",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": locationData?.title || "Bikaner",
      "address": {
        "@type": "PostalAddress",
        "postalCode": locationData?.locationData?.pincode || ""
      }
    },
    "url": fullUrl
  };
}

export function generateServiceSchema(serviceData: { title?: string; excerpt?: string; content?: string } | null | undefined, fullUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceData?.title || "Construction Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Bikaner Builders",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No 04, Opp Govt School, Napasar Rd, Ridmalsar Sipahiyan",
        "addressLocality": "Bikaner",
        "addressRegion": "Rajasthan",
        "postalCode": "334022",
        "addressCountry": "IN"
      }
    },
    "description": serviceData?.excerpt?.replace(/(<([^>]+)>)/gi, "") || serviceData?.content?.replace(/(<([^>]+)>)/gi, "").substring(0, 160) || "Premium construction services.",
    "url": fullUrl
  };
}

export function generateArticleSchema(postData: { title?: string; date?: string } | null | undefined, fullUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": postData?.title || "Article",
    "datePublished": postData?.date || new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Bikaner Builders",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No 04, Opp Govt School, Napasar Rd, Ridmalsar Sipahiyan",
        "addressLocality": "Bikaner",
        "addressRegion": "Rajasthan",
        "postalCode": "334022",
        "addressCountry": "IN"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bikaner Builders",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No 04, Opp Govt School, Napasar Rd, Ridmalsar Sipahiyan",
        "addressLocality": "Bikaner",
        "addressRegion": "Rajasthan",
        "postalCode": "334022",
        "addressCountry": "IN"
      }
    },
    "url": fullUrl
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bikaner Builders",
    "image": "https://www.bikanerbuilders.in/assets/bikaner_builders_engineering_team.jpg",
    "telephone": "+919351132772",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No 04, Opp Govt School, Napasar Rd, Ridmalsar Sipahiyan",
      "addressLocality": "Bikaner",
      "addressRegion": "Rajasthan",
      "postalCode": "334022",
      "addressCountry": "IN"
    }
  };
}

