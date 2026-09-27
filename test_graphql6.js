async function run() {
  const query = `query GetLocationBySlug { location(id: "nokha", idType: SLUG) { title seo { title metaDesc schemaDetails } } }`;
  const res = await fetch('https://beckend.bikanerbuilders.in/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  });
  console.log(JSON.stringify(await res.json(), null, 2));
}
run();
