export function getFounderQuote(slug: string, formattedName: string): string {
  const specificQuotes: Record<string, string> = {
    'jnv-colony': "In JNV Colony, we focus on durable construction standards, clear material specifications, and structured on-site coordination.",
    'sadul-ganj': "In Sadul Ganj, we focus on functional residential planning, balanced facade design, and quality material execution.",
    'gangashahar': "Building in Gangashahar requires efficient space planning and sound RCC foundations suited for compact plots and narrow lanes."
  };

  if (specificQuotes[slug]) {
    return specificQuotes[slug];
  }

  // Fallbacks for dynamic variation across SEO pages
  const fallbacks = [
    `As a local construction and planning team, we evaluate ground conditions and desert climate factors in ${formattedName} to deliver reliable, organized project execution.`,
    `For residential turnkey projects in ${formattedName}, our focus is on coordinating sound structural drawings with practical floor layouts tailored to client requirements.`,
    `Our approach for homeowners in ${formattedName} centers on clear itemized BOQ contracts, specified materials, and regular on-site milestone supervision.`,
    `From 3D elevations to practical floor plans, our design approach in ${formattedName} focuses on space efficiency, natural ventilation, and coordinated construction.`
  ];

  // Pseudo-random selection based on the slug string to guarantee the same quote is rendered consistently per location
  const charSum = slug.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const index = charSum % fallbacks.length;

  return fallbacks[index];
}
