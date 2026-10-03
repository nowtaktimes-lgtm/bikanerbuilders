const fs = require('fs');

let c = fs.readFileSync('src/app/page.tsx', 'utf8');

// Update grids to md:grid-cols-4
c = c.replace(
  /<div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-8">/g,
  '<div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">'
);

// Add 4th Service
const service4 = `
            {/* Service 4 */}
            <Link href="/services/interior-design" className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300">
              <div className="relative h-32 md:h-56 overflow-hidden">
                <Image 
                  src="/assets/icon_sofa_1789213727142.png"
                  alt="Premium interior design and POP ceiling work in Bikaner" title="Interior Designers Bikaner" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 to-transparent"></div>
                <h3 className="absolute bottom-3 left-3 md:bottom-6 md:left-6 text-sm md:text-2xl font-black text-white">Interior Design</h3>
              </div>
              <div className="p-3 md:p-6">
                <p className="text-xs md:text-base text-gray-600 mb-2 md:mb-4 line-clamp-2 md:line-clamp-none">Luxury interior designing, space planning, and custom modular kitchen execution.</p>
                <span className="text-[#EA580C] font-bold text-[10px] md:text-sm tracking-wide uppercase group-hover:underline">View Details &rarr;</span>
              </div>
            </Link>
`;

c = c.replace(
  '            </Link>\n\n          </div>',
  '            </Link>\n' + service4 + '\n          </div>'
);

// Add 4th Testimonial
const testimonial4 = `
              <div key={3} className="bg-slate-50 p-4 md:p-8 rounded-3xl border border-slate-100 shadow-sm relative">
                <div className="flex gap-0.5 md:gap-1 mb-2 md:mb-4 text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-xs md:text-base text-slate-600 italic mb-3 md:mb-6 leading-snug md:leading-normal">"Exceptional service from start to finish. They built our dream home within budget and the 3D elevation was exactly what we got in reality!"</p>
                <div className="text-xs md:text-base font-bold text-slate-900 border-t border-slate-200 pt-3 md:pt-4">- Mohit Chaudhary, Pawanpuri</div>
              </div>
`;

// It's currently rendering from an array map for testimonials. I need to add to the array.
c = c.replace(
  '{ name: "Vikram Singh, Nokha", review: "Transparent pricing with no hidden surprises. Aahan and his team are the most reliable contractors I\'ve worked with in Rajasthan." }',
  '{ name: "Vikram Singh, Nokha", review: "Transparent pricing with no hidden surprises. Aahan and his team are the most reliable contractors I\'ve worked with in Rajasthan." },\n              { name: "Mohit Chaudhary, Pawanpuri", review: "Exceptional service from start to finish. They built our dream home within budget and the 3D elevation was exactly what we got in reality!" }'
);

fs.writeFileSync('src/app/page.tsx', c);
console.log('Added 4th item to both sections and updated grid');
