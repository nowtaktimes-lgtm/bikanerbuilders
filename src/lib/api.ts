export interface GraphQLError {
  message: string;
  locations?: { line: number; column: number }[];
  path?: (string | number)[];
  extensions?: Record<string, unknown>;
}

export interface GraphQLResponse<T> {
  data?: T;
  errors?: GraphQLError[];
}

export async function fetchGraphQL<T>(query: string, variables: Record<string, unknown> = {}): Promise<GraphQLResponse<T>> {
  const wpApiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://beckend.bikanerbuilders.in/graphql';

  const payload = Object.keys(variables).length > 0 
    ? { query, variables } 
    : { query };

  try {
    const res = await fetch(wpApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      next: {
        revalidate: 60, // ISR: Revalidate every 60 seconds
      },
    });

    if (!res.ok) {
      console.error('Failed to fetch API', res.status);
      return {};
    }

    return await res.json();
  } catch (error) {
    console.error('Network error while fetching WPGraphQL:', error);
    return {};
  }
}

export interface GlobalSettings {
  primaryPhone: string;
  whatsappNumber: string;
  emailAddress: string;
  officeAddress: string;
  siteLogo?: string;
  headerSiteTitle?: string;
  headerButtonText?: string;
  headerButtonLink?: string;
}

export async function getGlobalSettings(): Promise<GlobalSettings> {
  const query = `
    query GetGlobalSettings { 
      pages(where: {title: "Global Site Settings"}) { 
        nodes { 
          masterSettings { 
            primaryPhone 
            whatsappNumber 
            emailAddress 
            officeAddress 
            siteLogo
            headerSiteTitle
            headerButtonText
            headerButtonLink
          } 
        } 
      } 
    }
  `;

  type GlobalSettingsResponse = {
    pages: {
      nodes: {
        masterSettings: GlobalSettings;
      }[];
    };
  };

  const response = await fetchGraphQL<GlobalSettingsResponse>(query);
  
  if (response.errors || !response.data?.pages?.nodes?.[0]?.masterSettings) {
    console.log("Returning fallback global settings because WordPress API is unavailable or missing data.");
    return {
      primaryPhone: "91XXXXXXXXXX",
      whatsappNumber: "91XXXXXXXXXX",
      emailAddress: "info@bikanerbuilders.in",
      officeAddress: "Bikaner Builders HQ, Karni Industrial Area, Bikaner, Rajasthan 334004",
      siteLogo: "",
      headerSiteTitle: "Bikaner Builders",
      headerButtonText: "Get Quote",
      headerButtonLink: "#contact"
    };
  }

  return response.data.pages.nodes[0].masterSettings;
}

export interface LocationNode {
  title: string;
  uri: string;
}

export async function getRecentLocations(): Promise<LocationNode[]> {
  const query = `
    query GetRecentLocations {
      locations(first: 10, where: {orderby: {field: DATE, order: DESC}}) {
        nodes {
          title
          uri
        }
      }
    }
  `;

  type LocationsResponse = {
    locations: {
      nodes: LocationNode[];
    };
  };

  const response = await fetchGraphQL<LocationsResponse>(query);
  
  if (response.errors || !response.data?.locations?.nodes) {
    console.error("Error fetching recent locations from WordPress API.");
    return [];
  }

  return response.data.locations.nodes;
}

export async function getAllLocations(): Promise<LocationNode[]> {
  const query = `
    query GetAllLocations {
      locations(first: 100, where: {orderby: {field: TITLE, order: ASC}}) {
        nodes {
          title
          uri
        }
      }
    }
  `;

  type LocationsResponse = {
    locations: {
      nodes: LocationNode[];
    };
  };

  const response = await fetchGraphQL<LocationsResponse>(query);
  
  if (response.errors || !response.data?.locations?.nodes) {
    console.error("Error fetching all locations from WordPress API.");
    return [];
  }

  return response.data.locations.nodes;
}

export interface ServiceData {
  serviceContent?: string;
  galleryImage1?: string;
  galleryImage2?: string;
  galleryImage3?: string;
  step1Title?: string;
  step1Description?: string;
  step2Title?: string;
  step2Description?: string;
  step3Title?: string;
  step3Description?: string;
  faq1Question?: string;
  faq1Answer?: string;
  faq2Question?: string;
  faq2Answer?: string;
  faq3Question?: string;
  faq3Answer?: string;
}

export interface ServiceNode {
  title: string;
  uri: string;
  serviceData?: ServiceData;
}

export async function getServiceData(slug: string): Promise<ServiceNode | null> {
  const query = `
    query GetServiceBySlug($id: ID!) {
      service(id: $id, idType: URI) {
        title
        uri
        serviceData {
          serviceContent
          galleryImage1
          galleryImage2
          galleryImage3
          step1Title
          step1Description
          step2Title
          step2Description
          step3Title
          step3Description
          faq1Question
          faq1Answer
          faq2Question
          faq2Answer
          faq3Question
          faq3Answer
        }
      }
    }
  `;

  type ServiceResponse = {
    service: ServiceNode;
  };

  const response = await fetchGraphQL<ServiceResponse>(query, { id: slug });
  
  if (response.errors || !response.data?.service) {
    return null;
  }

  return response.data.service;
}
