async function run() {
  const query = `
    query GetVillageBySlug($id: ID!) {
      villages(id: $id, idType: SLUG) {
        acfVillageData {
          villageName
          heroH1Title
          dynamicWhatsappText
          localPrice2d
          seoArticleContent
          villageFeaturedImage {
            node {
              sourceUrl
            }
          }
          faqSection {
            question
            answer
          }
        }
      }
    }
  `;
  const wpApiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://beckend.bikanerbuilders.in/graphql';
  try {
    const res = await fetch(wpApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { id: "premium-builders-architects-in-nokha" } })
    });
    const json = await res.json();
    console.log(JSON.stringify(json, null, 2));
  } catch (e) {
    console.error(e);
  }
}
run();
