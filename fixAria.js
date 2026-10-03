const fs = require('fs');

const updateAriaLabel = (file, searchStr, replaceStr) => {
  if (fs.existsSync(file)) {
    let c = fs.readFileSync(file, 'utf8');
    if (!c.includes('aria-label=')) {
        c = c.replace(searchStr, replaceStr);
        fs.writeFileSync(file, c);
        console.log(`Updated ${file}`);
    } else {
        console.log(`Already exists in ${file}`);
    }
  }
};

updateAriaLabel(
  'src/components/BottomCTA.tsx', 
  'href={`https://wa.me/', 
  'aria-label="Chat with us on WhatsApp"\n            href={`https://wa.me/'
);

updateAriaLabel(
  'src/components/Contact.tsx', 
  'href={`https://wa.me/', 
  'aria-label="Chat with us on WhatsApp"\n                  href={`https://wa.me/'
);

updateAriaLabel(
  'src/components/CostCalculator.tsx', 
  'href={areaValue > 0 ? whatsappUrl : \'#\'}', 
  'aria-label="Get Detailed PDF Quote on WhatsApp"\n          href={areaValue > 0 ? whatsappUrl : \'#\'}'
);
