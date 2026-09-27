async function run() {
  const query = `query GetAll { services(first: 10) { nodes { title slug uri } } }`;
  const res = await fetch('https://beckend.bikanerbuilders.in/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  });
  console.log(JSON.stringify(await res.json(), null, 2));
}
run();
