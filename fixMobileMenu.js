const fs = require('fs');

let c = fs.readFileSync('src/components/Header.tsx', 'utf8');

// Add the state variable
c = c.replace(
  'const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);',
  'const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);\n  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);'
);

const oldNav = `<nav className="flex flex-col items-center gap-6 text-white text-2xl font-black">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#EA580C] transition-colors">Home</Link>
                    <div className="text-center">
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
</div>
          <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#EA580C] transition-colors mt-2">Portfolio</Link>
          <Link href="/cost-estimator" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#EA580C] transition-colors">Cost Estimator</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#EA580C] transition-colors">About Us</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#EA580C] transition-colors">Contact</Link>
          
          <button onClick={() => { setMobileMenuOpen(false); setQuoteModalOpen(true); }} className="mt-8 bg-[#EA580C] text-white px-8 py-4 rounded-xl text-lg font-black w-full max-w-[200px] text-center">
              {settings?.headerButtonText || 'Get Quote Now'}
            </button>
        </nav>`;

const newNav = `<nav className="flex flex-col items-center gap-5 text-white w-full px-6 overflow-y-auto max-h-[85vh] pb-10">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold hover:text-[#EA580C] transition-colors">Home</Link>
          
          <div className="w-full max-w-xs text-center border-y border-slate-700/50 py-3">
            <button 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)} 
              className="text-2xl font-bold flex items-center justify-center gap-2 w-full hover:text-[#EA580C] transition-colors"
            >
              Services
              <svg className={\`w-5 h-5 transition-transform duration-300 \${mobileServicesOpen ? 'rotate-180' : ''}\`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
            </button>
            
            <div className={\`overflow-hidden transition-all duration-300 \${mobileServicesOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}\`}>
              <div className="flex flex-col gap-3 bg-slate-800/40 rounded-2xl py-4 px-2">
                {/* Dynamic WordPress Services */}
                {services && services.length > 0 && services.map((service, index) => (
                  <Link key={index} href={service.uri || "#"} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-[#EA580C]">{service.title}</Link>
                ))}
                {/* Hardcoded SEO Static Services */}
                <Link href="/services/2d-naksha" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-[#EA580C]">2D Vastu Naksha</Link>
                <Link href="/services/3d-elevation" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-[#EA580C]">3D Front Elevation</Link>
                <Link href="/services/turnkey-construction" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-[#EA580C]">Turnkey Construction</Link>
                <Link href="/services/interior-design" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-[#EA580C]">POP & Interior Design</Link>
                <Link href="/services/structural-drawing" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-[#EA580C]">Structural Drawings</Link>
              </div>
            </div>
          </div>

          <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold hover:text-[#EA580C] transition-colors">Portfolio</Link>
          <Link href="/cost-estimator" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold hover:text-[#EA580C] transition-colors">Cost Estimator</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold hover:text-[#EA580C] transition-colors">About Us</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold hover:text-[#EA580C] transition-colors">Contact</Link>
          
          <button onClick={() => { setMobileMenuOpen(false); setQuoteModalOpen(true); }} className="mt-6 bg-[#EA580C] hover:bg-[#F97316] text-white px-8 py-4 rounded-xl text-lg font-black w-full max-w-[200px] text-center shadow-lg hover:shadow-orange-500/30 transition-all">
            {settings?.headerButtonText || 'Get Quote'}
          </button>
        </nav>`;

if(c.includes(oldNav)) {
    c = c.replace(oldNav, newNav);
    fs.writeFileSync('src/components/Header.tsx', c);
    console.log('Fixed Mobile Header Nav');
} else {
    console.log('Could not find old nav. Let us look at the actual code.');
}
