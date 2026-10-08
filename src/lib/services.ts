import { WpNode } from './api';

export const STATIC_SERVICES = [
  {
    title: "Turnkey Construction",
    slug: "turnkey-construction",
    uri: "/services/turnkey-construction",
    content: "Complete house construction with material. From excavation to premium finishing, we handle everything under one roof.",
    featuredImage: { node: { sourceUrl: "/assets/turnkey_project_handover.jpg" } }
  },
  {
    title: "2D Vastu Naksha",
    slug: "2d-naksha",
    uri: "/services/2d-naksha",
    content: "Expert architectural mapping and 2D floor plans. 100% Vastu-compliant designs for residential and commercial spaces.",
    featuredImage: { node: { sourceUrl: "/assets/seo_2d_naksha.jpg" } }
  },
  {
    title: "3D Front Elevation",
    slug: "3d-elevation",
    uri: "/services/3d-elevation",
    content: "Realistic exterior designs and 3D architectural rendering. See your dream home before construction begins.",
    featuredImage: { node: { sourceUrl: "/assets/seo_3d_elevation.jpg" } }
  },
  {
    title: "POP & Interior Design",
    slug: "interior-design",
    uri: "/services/interior-design",
    content: "Premium false ceilings, modular kitchens, and bespoke interior finishes. Luxury living spaces crafted to perfection.",
    featuredImage: { node: { sourceUrl: "/assets/seo_interior.jpg" } }
  },
  {
    title: "Structural Drawings",
    slug: "structural-drawing",
    uri: "/services/structural-drawing",
    content: "Safe, earthquake-resistant structural engineering designs. Detailed load calculations and steel framing plans.",
    featuredImage: { node: { sourceUrl: "/assets/seo_structural.jpg" } }
  }
];

export function getCombinedServices(dynamicServices: WpNode[] = []) {
  // Deduplicate in case a static service has the same slug as a dynamic one
  const dynamicFiltered = dynamicServices.filter(
    (dyn) => !STATIC_SERVICES.some((stat) => stat.slug === dyn.slug)
  );
  
  return [...STATIC_SERVICES, ...dynamicFiltered];
}
