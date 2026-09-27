async function run() {
  const query = `query GetServiceBySlug($id: ID!) { service(id: $id, idType: URI) { title slug uri } }`;
  const res = await fetch('https://beckend.bikanerbuilders.in/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { id: '/service/2d-naksha/' } })
  });
  console.log(await res.json());
}
run();
