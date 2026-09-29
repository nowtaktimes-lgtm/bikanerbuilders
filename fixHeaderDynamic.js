const fs = require('fs');
let header = fs.readFileSync('src/components/Header.tsx', 'utf8');

const desktopStatic = `
                  {/* Dynamic WordPress Services */}
                  {services && services.length > 0 && services.map((service, index) => (
                    <Link key={index} href={service.uri || "#"} className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-[#EA580C]">{service.title}</Link>
                  ))}
                  {/* Hardcoded SEO Static Services */}
                  <Link href="/services/2d-naksha" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-[#EA580C]">2D Vastu Naksha</Link>
                  <Link href="/services/3d-elevation" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-[#EA580C]">3D Front Elevation</Link>
                  <Link href="/services/turnkey-construction" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-[#EA580C]">Turnkey Construction</Link>
                  <Link href="/services/interior-design" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-[#EA580C]">POP & Interior Design</Link>
                  <Link href="/services/structural-drawing" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-[#EA580C]">Structural Drawings</Link>
`;

const mobileStatic = `
            <span className="block mb-4 text-gray-400 text-sm uppercase tracking-widest">Our Services</span>
            {/* Dynamic WordPress Services */}
            {services && services.length > 0 && services.map((service, index) => (
              <Link key={index} href={service.uri || "#"} onClick={() => setMobileMenuOpen(false)} className={\`block text-xl hover:text-[#EA580C] transition-colors \${index !== services.length - 1 ? 'mb-3' : ''}\`}>{service.title}</Link>
            ))}
            {/* Hardcoded SEO Static Services */}
            <Link href="/services/2d-naksha" onClick={() => setMobileMenuOpen(false)} className="block text-xl hover:text-[#EA580C] mb-3 transition-colors mt-3">2D Vastu Naksha</Link>
            <Link href="/services/3d-elevation" onClick={() => setMobileMenuOpen(false)} className="block text-xl hover:text-[#EA580C] mb-3 transition-colors">3D Front Elevation</Link>
            <Link href="/services/turnkey-construction" onClick={() => setMobileMenuOpen(false)} className="block text-xl hover:text-[#EA580C] mb-3 transition-colors">Turnkey Construction</Link>
            <Link href="/services/interior-design" onClick={() => setMobileMenuOpen(false)} className="block text-xl hover:text-[#EA580C] mb-3 transition-colors">POP & Interior Design</Link>
            <Link href="/services/structural-drawing" onClick={() => setMobileMenuOpen(false)} className="block text-xl hover:text-[#EA580C] transition-colors">Structural Drawings</Link>
`;

// Desktop
header = header.replace(/<div className="py-2">[\s\S]*?<\/div>/, '<div className="py-2">' + desktopStatic + '</div>');

// Mobile
header = header.replace(/<div className="text-center">[\s\S]*?<\/div>/, '<div className="text-center">' + mobileStatic + '</div>');

fs.writeFileSync('src/components/Header.tsx', header);
