export function generateLocationSchema(locationData: any, fullUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Bikaner Builders"
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

export function generateServiceSchema(serviceData: any, fullUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceData?.title || "Construction Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Bikaner Builders"
    },
    "description": serviceData?.excerpt?.replace(/(<([^>]+)>)/gi, "") || serviceData?.content?.replace(/(<([^>]+)>)/gi, "").substring(0, 160) || "Premium construction services.",
    "url": fullUrl
  };
}

export function generateArticleSchema(postData: any, fullUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": postData?.title || "Article",
    "datePublished": postData?.date || new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Bikaner Builders"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bikaner Builders"
    },
    "url": fullUrl
  };
}
