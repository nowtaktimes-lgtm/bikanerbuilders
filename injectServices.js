const fs = require('fs');
const path = require('path');

const services = {
    '2d-naksha': {
        title1: "Our Scientific Approach to 2D Plot Mapping",
        desc1: "Designing a <strong class=\"text-slate-900\">Ghar Ka Naksha</strong> isn't just about drawing lines; it's about optimizing space, air, and energy. Our elite architects in Bikaner follow a strict protocol to ensure your home is breathable, spacious, and 100% Vastu compliant.",
        steps: [
            { id: "01", title: "Plot & Topography Analysis", desc: "We start by analyzing your plot dimensions, neighboring structures, and sun path in Bikaner to ensure natural lighting and optimal ventilation." },
            { id: "02", title: "Vastu Shastra Integration", desc: "Our Vastu experts carefully align the Brahmasthan, kitchen (Agni Kund), and entrances to channel positive energy and prosperity into your home." },
            { id: "03", title: "Space Optimization", desc: "We maximize your carpet area, eliminating dead spaces and useless corridors. Every inch of your expensive plot is utilized efficiently." },
            { id: "04", title: "Precision Drafting & Delivery", desc: "Using advanced AutoCAD software, we deliver millimeter-perfect floor plans that local civil contractors can easily understand and execute." }
        ],
        title2: "The Tools & Principles Behind Our Nakshas",
        desc2: "A flawless foundation starts with flawless planning. As the premier <strong class=\"text-slate-900\">architectural firm in Bikaner</strong>, we rely on industry-standard software and ancient principles.",
        materials: [
            { title: "AutoCAD Mastery", desc: "We use the latest version of Autodesk AutoCAD for precision drafting, ensuring accurate wall thicknesses and room dimensions." },
            { title: "Rajasthan Climate Focus", desc: "Our layouts emphasize cross-ventilation and shaded courtyards (chowks) to naturally cool your home during Bikaner scorching summers." },
            { title: "Structural Feasibility", desc: "We don't just draw pretty pictures. Every 2D plan is verified by our structural engineers to ensure it can actually be built safely." },
            { title: "Digital & Print Delivery", desc: "You receive high-resolution PDF blueprints and raw DWG files, along with printed A3 copies for your contractor team on-site." }
        ],
        title3: "Why Choose Bikaner Builders for Your House Map?",
        desc3: "Avoid the costly mistakes of hiring inexperienced draftsmen. A poorly planned map can cost you lakhs in wasted space and bad energy. Here is why Bikaner elite choose us for their architectural layouts.",
        usps: [
            { title: "100% Custom Designs", desc: "We never copy-paste templates. Your naksha is uniquely tailored to your lifestyle." },
            { title: "Local Building By-Laws", desc: "We ensure all setbacks and heights comply with UIT Bikaner regulations." },
            { title: "Lightning Fast Delivery", desc: "Get your initial draft within 48-72 hours without compromising on quality." },
            { title: "Free Revisions", desc: "We tweak the layout until you are 100% satisfied with the floor plan." }
        ]
    },
    '3d-elevation': {
        title1: "Our Hyper-Realistic 3D Elevation Process",
        desc1: "Your home's exterior is its signature. As the leading <strong class=\"text-slate-900\">3D elevation designers in Bikaner</strong>, we transform basic 2D maps into breathtaking, photorealistic 3D visual masterpieces before a single brick is laid.",
        steps: [
            { id: "01", title: "Aesthetic Consultation", desc: "We discuss your vision—whether you want a Heritage Rajasthani look with Jodhpur stone, an Ultra-Modern box design, or a classic European villa." },
            { id: "02", title: "Wireframing & Massing", desc: "Our 3D artists build the core structural blocks in software to establish the proportions, balconies, and overall silhouette of the building." },
            { id: "03", title: "Texture & Material Mapping", desc: "We apply realistic materials like HPL sheets, CNC-cut MS panels, toughened glass, and textured paint to visualize the exact final finish." },
            { id: "04", title: "High-Fidelity Rendering", desc: "Using advanced ray-tracing engines, we generate stunning day and night renders showcasing realistic lighting, shadows, and landscaping." }
        ],
        title2: "The Technology Powering Our 3D Designs",
        desc2: "We don't just provide basic 3D views. We deliver cinematic-quality architectural visualizations using the world's most powerful rendering software.",
        materials: [
            { title: "3ds Max & V-Ray", desc: "We use industry-leading 3D modeling and rendering engines to create textures and lighting that look indistinguishable from real life." },
            { title: "Weather-Resistant Styling", desc: "We specify exterior materials (like weather-coat paints and UV-resistant claddings) that won't fade in Bikaner extreme heat and dust." },
            { title: "Lumion Walkthroughs", desc: "Upgrade your package to include a full 4K video walkthrough, allowing you to virtually fly around your future home." },
            { title: "Accurate Scaling", desc: "Our 3D models are built strictly to scale based on the 2D naksha, ensuring the design can be 100% replicated in reality." }
        ],
        title3: "Why Let Us Design Your Home's Facade?",
        desc3: "A generic front elevation can ruin the appeal of an expensive house. We design striking, landmark-worthy exteriors that drastically increase your property's street value and aesthetic dominance.",
        usps: [
            { title: "Photorealistic Quality", desc: "See the exact future of your home with zero guesswork or surprises." },
            { title: "Budget-Aware Design", desc: "We design stunning facades using materials that actually fit your construction budget." },
            { title: "Heritage & Modern Fusion", desc: "Experts at blending traditional Bikaneri arches with contemporary minimalist glasswork." },
            { title: "Material Sourcing Help", desc: "We tell your contractor exactly which tiles, colors, and stones to buy to match the 3D." }
        ]
    },
    'interior-design': {
        title1: "Our Elite Interior Design & Execution Workflow",
        desc1: "True luxury is felt indoors. As the most sought-after <strong class=\"text-slate-900\">interior designers in Bikaner</strong>, we don't just decorate rooms; we engineer lifestyles. From spatial flow to ambient lighting, our turnkey interior process is flawless.",
        steps: [
            { id: "01", title: "Space Planning & Layout", desc: "We analyze the raw floor plan to strategically place furniture, modular kitchens, and wardrobes to maximize movement flow and spatial harmony." },
            { id: "02", title: "Mood Boards & Theming", desc: "We curate premium color palettes, fabric textures, and wood finishes (veneer/laminates) to match your desired aesthetic—from minimal to royal." },
            { id: "03", title: "3D Interior Visualization", desc: "Before buying any materials, we provide 3D renders of your living room, bedrooms, and kitchen so you can approve the exact look." },
            { id: "04", title: "Turnkey Carpentry & Execution", desc: "Our master craftsmen handle the heavy lifting: false ceilings, electrical rerouting, modular woodwork, and final décor placement." }
        ],
        title2: "The Premium Interior Materials We Use",
        desc2: "A beautiful interior must also be durable. We strictly reject low-grade materials, opting only for premium, long-lasting hardware and woods for our <strong class=\"text-slate-900\">luxury interiors in Bikaner</strong>.",
        materials: [
            { title: "BWR/BWP Grade Plywood", desc: "We use boiling water-resistant and termite-proof plywood (Greenply/Century) to ensure your wardrobes and kitchens last generations." },
            { title: "Luxury European Hardware", desc: "Smooth, silent, and seamless. We use premium hinges, tandem boxes, and channels from global leaders like Hettich, Blum, and Hafele." },
            { title: "Smart Ambient Lighting", desc: "We design layered lighting using COB lights, magnetic track lights, and profile LEDs to create a warm, ultra-luxurious hotel-like vibe." },
            { title: "High-End Surface Finishes", desc: "From Italian marble and quartz countertops to PU-coated acrylics and natural wood veneers, our finishing is world-class." }
        ],
        title3: "Why Hire Our Turnkey Interior Experts?",
        desc3: "Managing carpenters, electricians, and painters is a full-time headache. High-Net-Worth clients trust us to transform their bare shells into luxurious living spaces without the daily stress.",
        usps: [
            { title: "End-to-End Execution", desc: "From 3D design to the final polishing, we handle the entire interior project." },
            { title: "Factory-Finish Woodwork", desc: "We use advanced machinery for edge-banding and pressing, ensuring a flawless factory finish." },
            { title: "Exclusive Vendor Tie-Ups", desc: "Get access to premium tiles, lighting, and fabrics at direct wholesale prices." },
            { title: "Strict Quality Control", desc: "No rough edges, no misaligned doors. We deliver perfection down to the millimeter." }
        ]
    },
    'structural-drawing': {
        title1: "Our Rigorous Structural Engineering Process",
        desc1: "The safety of your family depends on the hidden skeleton of your building. As Bikaner's premier <strong class=\"text-slate-900\">structural engineering firm</strong>, we design earthquake-resistant structures that are safe, durable, and economically optimized.",
        steps: [
            { id: "01", title: "Soil Testing & Foundation Planning", desc: "Bikaner sandy soil requires specific foundation depth. We analyze soil bearing capacity to design isolated, combined, or raft foundations accordingly." },
            { id: "02", title: "Load Bearing Analysis", desc: "We meticulously calculate dead loads (concrete/walls), live loads (people/furniture), and dynamic forces (wind/earthquakes) acting on the building." },
            { id: "03", title: "Optimum Column Positioning", desc: "We strategically place columns and beams to ensure maximum structural integrity without interrupting the aesthetic flow of the 2D naksha." },
            { id: "04", title: "Detailed Steel Detailing (BBS)", desc: "We provide comprehensive AutoCAD drawings and a Bar Bending Schedule (BBS) so the local contractor knows exactly how to cut and tie the TMT steel." }
        ],
        title2: "Advanced Software & Safety Standards",
        desc2: "We do not rely on guesswork or thumb rules. Our licensed structural engineers use advanced physics and mathematics to guarantee the safety of your <strong class=\"text-slate-900\">house construction in Bikaner</strong>.",
        materials: [
            { title: "STAAD.Pro & ETABS", desc: "We use world-class structural analysis software to simulate loads and seismic activity, ensuring your building won't crack under pressure." },
            { title: "IS Code Compliance", desc: "All our structural drawings strictly adhere to Indian Standard codes (IS 456, IS 1893) for reinforced concrete and earthquake resistance." },
            { title: "Steel Optimization", desc: "Local contractors often over-use steel 'just to be safe', wasting your money. Our calculated designs save you lakhs in unnecessary TMT bar costs." },
            { title: "Zone-Specific Seismic Design", desc: "Bikaner falls in a specific seismic zone. We detail the column-beam joints with extra ductility to withstand potential tremors." }
        ],
        title3: "Why You Need a Professional Structural Engineer",
        desc3: "Never let a local thekedar guess your steel requirements. A weak column can cause building collapse, while over-engineering wastes your hard-earned money. Here is why you need our technical expertise.",
        usps: [
            { title: "Certified Engineers", desc: "Your structure is designed and approved by licensed, highly qualified civil/structural engineers." },
            { title: "Massive Cost Savings", desc: "Our optimized steel and concrete calculations usually save you much more than our design fee." },
            { title: "Zero Safety Compromise", desc: "Sleep peacefully knowing your multi-story building can handle storms, loads, and time." },
            { title: "On-Site Steel Checking", desc: "We offer site visits to verify that the contractor has tied the steel exactly as per our drawings." }
        ]
    }
};

function generateJSX(data) {
    return `
                {/* 1. Elite Process Section */}
                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  ${data.title1}
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: '${data.desc1}' }}></p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  ${data.steps.map(s => `
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">${s.id}</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">${s.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">${s.desc}</p>
                  </div>`).join('')}
                </div>

                {/* 2. Materials/Tech Section */}
                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  ${data.title2}
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: '${data.desc2}' }}></p>
                <ul className="space-y-4 mb-12 list-none pl-0">
                  ${data.materials.map(m => `
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block">${m.title}</strong>
                      <span className="text-slate-600 text-sm">${m.desc}</span>
                    </div>
                  </li>`).join('')}
                </ul>

                {/* 3. Why Choose Us Section */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl my-12 text-white not-prose">
                  <h3 className="text-2xl md:text-3xl font-black mb-6 text-white leading-tight">
                    ${data.title3}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-8">
                    ${data.desc3}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    ${data.usps.map((u, i) => `
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        ${i === 0 ? `<svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>` : 
                           i === 1 ? `<svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>` :
                           i === 2 ? `<svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>` :
                                     `<svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>`}
                      </div>
                      <div>
                        <strong className="block text-white text-lg">${u.title}</strong>
                        <span className="text-slate-400 text-sm">${u.desc}</span>
                      </div>
                    </div>`).join('')}
                  </div>
                </div>
`;
}

for (const [slug, data] of Object.entries(services)) {
    const filePath = path.join('src/app/services', slug, 'page.tsx');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Prevent double injection
        if (!content.includes('1. Elite Process Section')) {
            const insertionPoint = `<ServiceTrustBlock slug="${slug}" />`;
            const jsx = generateJSX(data);
            content = content.replace(insertionPoint, jsx + '\n                ' + insertionPoint);
            fs.writeFileSync(filePath, content);
            console.log(`Updated ${slug}`);
        } else {
            console.log(`Skipping ${slug}, already updated`);
        }
    }
}
