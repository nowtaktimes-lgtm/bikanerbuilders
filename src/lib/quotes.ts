export function getFounderQuote(slug: string, formattedName: string): string {
  const specificQuotes: Record<string, string> = {
    'jnv-colony': "JNV Colony's modern lifestyle demands flawless aesthetics and zero-compromise structural safety. We ensure transparent pricing and precision engineering for every premium project here.",
    'sadul-ganj': "Sadul Ganj represents luxury. We focus on high-end architectural symmetry, premium material selection, and Vastu-compliant layouts to match the VIP standards of this area.",
    'gangashahar': "Building in Gangashahar requires smart space management and heavy RCC foundations due to compact plots and narrow lanes. We handle the logistical headaches so you don't have to."
  };

  if (specificQuotes[slug]) {
    return specificQuotes[slug];
  }

  // Fallbacks for dynamic variation across SEO pages
  const fallbacks = [
    `As a local engineering team, we understand the specific soil conditions and climate challenges in ${formattedName}. We've built our reputation on 100% transparent pricing and flawless execution.`,
    `Delivering high-end turnkey projects in ${formattedName} is our specialty. We combine advanced structural engineering with aesthetic perfection to give you a home that stands for generations.`,
    `Our commitment to ${formattedName} residents is simple: no hidden costs, premium material transparency, and strict adherence to project timelines. Your dream home deserves expert supervision.`,
    `From precision 3D elevations to Vastu-compliant floor plans, our approach in ${formattedName} focuses on maximizing space utility while maintaining top-tier structural integrity.`
  ];

  // Pseudo-random selection based on the slug string to guarantee the same quote is rendered consistently per location
  const charSum = slug.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const index = charSum % fallbacks.length;

  return fallbacks[index];
}
