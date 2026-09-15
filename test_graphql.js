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
  try {
    const res = await fetch('http://bikaner-backend.local/graphql', {
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
