const fs = require('fs');
let header = fs.readFileSync('src/components/Header.tsx', 'utf8');

const desktopMenu = `                <div className="py-2">
                  <Link href="/services/2d-naksha" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-[#EA580C]">2D Vastu Naksha</Link>
                  <Link href="/services/3d-elevation" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-[#EA580C]">3D Front Elevation</Link>
                  <Link href="/services/turnkey-construction" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-[#EA580C]">Turnkey Construction</Link>
                  <Link href="/services/interior-design" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-[#EA580C]">POP & Interior Design</Link>
                  <Link href="/services/structural-drawing" className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-orange-50 hover:text-[#EA580C]">Structural Drawings</Link>
                </div>`;

const mobileMenu = `          <div className="text-center">
            <span className="block mb-4 text-gray-400 text-sm uppercase tracking-widest">Our Services</span>
            <Link href="/services/2d-naksha" onClick={() => setMobileMenuOpen(false)} className="block text-xl hover:text-[#EA580C] mb-3 transition-colors">2D Vastu Naksha</Link>
            <Link href="/services/3d-elevation" onClick={() => setMobileMenuOpen(false)} className="block text-xl hover:text-[#EA580C] mb-3 transition-colors">3D Front Elevation</Link>
            <Link href="/services/turnkey-construction" onClick={() => setMobileMenuOpen(false)} className="block text-xl hover:text-[#EA580C] mb-3 transition-colors">Turnkey Construction</Link>
            <Link href="/services/interior-design" onClick={() => setMobileMenuOpen(false)} className="block text-xl hover:text-[#EA580C] mb-3 transition-colors">POP & Interior Design</Link>
            <Link href="/services/structural-drawing" onClick={() => setMobileMenuOpen(false)} className="block text-xl hover:text-[#EA580C] transition-colors">Structural Drawings</Link>
          </div>`;

header = header.replace(/<div className="py-2">[\s\S]*?<\/div>/, desktopMenu);
header = header.replace(/<div className="text-center">[\s\S]*?<\/div>/, mobileMenu);

fs.writeFileSync('src/components/Header.tsx', header);
