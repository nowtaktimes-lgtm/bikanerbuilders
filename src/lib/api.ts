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
      siteLogo: ""
    };
  }

  return response.data.pages.nodes[0].masterSettings;
}
