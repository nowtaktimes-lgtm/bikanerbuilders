import { cache } from 'react';

export interface GraphQLError {
  message: string;
}

export interface GraphQLResponse<T> {
  data?: T;
  errors?: GraphQLError[];
}

export async function fetchGraphQL<T>(query: string, variables: Record<string, unknown> = {}): Promise<GraphQLResponse<T>> {
  const wpApiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://beckend.bikanerbuilders.in/graphql';
  const payload = Object.keys(variables).length > 0 ? { query, variables } : { query };

  try {
    const res = await fetch(wpApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      next: { revalidate: 60 },
    });
    if (!res.ok) return {};
    return await res.json();
  } catch {
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

export interface SeoData {
  title?: string;
  metaDesc?: string;
  schemaDetails?: string;
}

export interface WpNode {
  title: string;
  content: string;
  slug: string;
  featuredImage?: {
    node?: {
      sourceUrl?: string;
    };
  };
  seo?: SeoData;
  uri?: string;
}

const COMMON_FIELDS = `
  title
  content
  slug
  featuredImage {
    node {
      sourceUrl
    }
  }
  seo {
    title
    metaDesc
    schemaDetails
  }
`;

export const getPageBySlug = cache(async (slug: string): Promise<WpNode | null> => {
  const query = `query GetPageBySlug($id: ID!) { page(id: $id, idType: URI) { ${COMMON_FIELDS} } }`;
  const response = await fetchGraphQL<{ page: WpNode }>(query, { id: slug });
  return response.data?.page || null;
});

export const getPostBySlug = cache(async (slug: string): Promise<WpNode | null> => {
  const query = `query GetPostBySlug($id: ID!) { post(id: $id, idType: URI) { ${COMMON_FIELDS} } }`;
  const response = await fetchGraphQL<{ post: WpNode }>(query, { id: slug });
  return response.data?.post || null;
});

export const getLocationBySlug = cache(async (slug: string): Promise<WpNode | null> => {
  const query = `query GetLocationBySlug($id: ID!) { location(id: $id, idType: URI) { ${COMMON_FIELDS} } }`;
  const response = await fetchGraphQL<{ location: WpNode }>(query, { id: slug });
  return response.data?.location || null;
});

export const getServiceBySlug = cache(async (slug: string): Promise<WpNode | null> => {
  const query = `query GetServiceBySlug($id: ID!) { service(id: $id, idType: URI) { ${COMMON_FIELDS} } }`;
  const response = await fetchGraphQL<{ service: WpNode }>(query, { id: slug });
  return response.data?.service || null;
});

export async function getRecentLocations(): Promise<WpNode[]> {
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
  const response = await fetchGraphQL<{ locations: { nodes: WpNode[] } }>(query);
  return response.data?.locations?.nodes || [];
}

export async function getAllLocations(): Promise<WpNode[]> {
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
  const response = await fetchGraphQL<{ locations: { nodes: WpNode[] } }>(query);
  return response.data?.locations?.nodes || [];
}

export async function getAllServices(): Promise<WpNode[]> {
  const query = `
    query GetAllServices {
      services(first: 100, where: {orderby: {field: TITLE, order: ASC}}) {
        nodes {
          title
          uri
        }
      }
    }
  `;
  const response = await fetchGraphQL<{ services: { nodes: WpNode[] } }>(query);
  return response.data?.services?.nodes || [];
}

