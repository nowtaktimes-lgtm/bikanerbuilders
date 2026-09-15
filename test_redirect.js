async function checkRedirect() {
  const url = 'https://beckend.bikanerbuilders.in/graphql';
  console.log('Testing:', url);
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ generalSettings { title } }' }),
      redirect: 'manual' // Don't follow redirects automatically, so we can see if it returns 301
    });
    console.log('Status:', res.status);
    console.log('Location header:', res.headers.get('location'));
    const text = await res.text();
    console.log('Body:', text);
  } catch(e) {
    console.error(e);
  }
}
checkRedirect();
