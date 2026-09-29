const https = require('https');

function fetchGraphQL(query) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ query });
    const req = https.request('https://www.bikanerbuilders.in/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    }, (res) => {
      let result = '';
      res.on('data', d => result += d);
      res.on('end', () => resolve(JSON.parse(result)));
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function getBackendData() {
  const servicesQuery = `
    query AllServices {
      services(first: 100) {
        nodes {
          title
          slug
        }
      }
    }
  `;
  
  const locationsQuery = `
    query AllLocations {
      locations(first: 100) {
        nodes {
          title
          slug
        }
      }
    }
  `;

  try {
    const servicesData = await fetchGraphQL(servicesQuery);
    const locationsData = await fetchGraphQL(locationsQuery);
    
    console.log('=== DYNAMIC SERVICES (CMS) ===');
    servicesData.data.services.nodes.forEach(s => console.log(`- ${s.title} (/services/${s.slug})`));
    
    console.log('\n=== DYNAMIC LOCATIONS (CMS) ===');
    locationsData.data.locations.nodes.forEach(l => console.log(`- ${l.title} (/locations/${l.slug})`));
  } catch(e) {
    console.error(e);
  }
}

getBackendData();
