async function run() {
  const query = `query GetServiceBySlug { service(id: "urban-service-bikaner", idType: SLUG) { title seo { title } } }`;
  const res = await fetch('https://beckend.bikanerbuilders.in/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  });
  console.log(JSON.stringify(await res.json(), null, 2));
}
run();
