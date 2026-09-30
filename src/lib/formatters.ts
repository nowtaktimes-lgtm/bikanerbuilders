export function formatLocationName(slug: string): string {
  if (!slug) return '';
  return slug
    .split('-')
    .map(word => {
      const upper = word.toUpperCase();
      // Capitalize specific known acronyms or any 3-letter isolated words (e.g., JNV, POP, PVC)
      if (['JNV', 'POP', 'PVC', 'RCC', 'BHK'].includes(upper) || (word.length <= 3 && !['IN', 'ON', 'AT', 'TO', 'OF'].includes(upper))) {
        return upper;
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}
