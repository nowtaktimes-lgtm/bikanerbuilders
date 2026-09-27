async function run() {
  const query = `query GetServiceBySlug($id: ID!) { service(id: $id, idType: SLUG) { title content slug featuredImage { node { sourceUrl } } seo { title metaDesc schemaDetails } } }`;
  const res = await fetch('https://beckend.bikanerbuilders.in/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { id: 'urban-service-bikaner' } })
  });
  console.log(JSON.stringify(await res.json(), null, 2));
}
run();
