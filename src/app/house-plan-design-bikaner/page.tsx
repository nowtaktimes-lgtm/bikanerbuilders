import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import OtherServicesLinker from '@/components/OtherServicesLinker';

export const metadata: Metadata = {
  title: 'House Plan Design in Bikaner | 2D Naksha & 3D Elevation',
  description: 'Looking for house plan design in Bikaner? Get 2D floor plans, residential layouts and 3D front elevation designs based on your plot dimensions and requirements.',
  alternates: {
    canonical: 'https://www.bikanerbuilders.in/house-plan-design-bikaner',
  },
  openGraph: {
    title: 'House Plan Design in Bikaner | 2D Naksha & 3D Elevation',
    description: 'Looking for house plan design in Bikaner? Get 2D floor plans, residential layouts and 3D front elevation designs based on your plot dimensions and requirements.',
    url: 'https://www.bikanerbuilders.in/house-plan-design-bikaner',
    siteName: 'Bikaner Builders',
    images: [
      {
        url: 'https://www.bikanerbuilders.in/assets/architect-in-bikaner-house-design.webp',
        width: 1200,
        height: 630,
        alt: 'House Plan Design and 3D Elevation in Bikaner',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'House Plan Design in Bikaner | 2D Naksha & 3D Elevation',
    description: 'Looking for house plan design in Bikaner? Get 2D floor plans, residential layouts and 3D front elevation designs based on your plot dimensions and requirements.',
    images: ['https://www.bikanerbuilders.in/assets/architect-in-bikaner-house-design.webp'],
  },
};

export default function HousePlanDesignBikanerPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.bikanerbuilders.in" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.bikanerbuilders.in/services" },
      { "@type": "ListItem", "position": 3, "name": "House Plan Design in Bikaner", "item": "https://www.bikanerbuilders.in/house-plan-design-bikaner" }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "House Plan Design & 2D/3D Elevation in Bikaner",
    "provider": {
      "@type": "GeneralContractor",
      "@id": "https://www.bikanerbuilders.in/#organization",
      "name": "Bikaner Builders",
      "url": "https://www.bikanerbuilders.in"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bikaner"
    },
    "serviceType": ["House Planning", "2D Floor Plans", "3D Front Elevation", "Vastu Layouts", "Structural Coordination"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is included in house plan design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "House plan design includes space planning, 2D floor layouts (naksha) based on your plot dimensions, room sizing, door and window placement, staircase location, natural lighting and ventilation planning, and exterior 3D elevation concepts."
        }
      },
      {
        "@type": "Question",
        "name": "Can house plans incorporate Vastu guidelines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, residential floor plans can incorporate Vastu principles upon request. This includes appropriate placement of the main entrance, kitchen, pooja space, staircase, and master bedroom according to directional orientation."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a 2D floor plan and a 3D elevation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 2D floor plan is a technical top-down view showing room dimensions, wall thicknesses, door swings, and interior flow. A 3D elevation is a realistic visual rendering showing how the exterior front facade of the building will look once constructed."
        }
      },
      {
        "@type": "Question",
        "name": "Why is structural coordination needed with house planning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A floor plan dictates room layouts and aesthetics, but structural coordination ensures that column, beam, and slab locations are technically sound and properly supported without obstructing functional living spaces. Final structural specifications must be prepared by qualified structural engineers based on site soil and load calculations."
        }
      },
      {
        "@type": "Question",
        "name": "What plot details are needed to start a house plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To start, we need your plot dimensions (width and depth), plot orientation (direction the plot faces), road width, your family requirements (number of bedrooms, floors, parking needs), and any specific Vastu preferences."
        }
      },
      {
        "@type": "Question",
        "name": "Can design plans be coordinated with construction execution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Bikaner Builders provides both house planning designs and turnkey construction execution in Bikaner, allowing homeowners to transition smoothly from approved drawings to on-site construction under coordinated supervision."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] py-20 md:py-32 flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/architect-in-bikaner-house-design.webp"
            alt="Modern residential house plan design and 3D elevation concept in Bikaner"
            title="House Plan Design and 3D Elevation Concept in Bikaner"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 578px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
          
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-xl leading-tight">
              House Plan, 2D Naksha &amp; 3D Elevation Design in Bikaner
            </h1>
            <p className="text-xl md:text-2xl text-orange-400 font-bold max-w-3xl mx-auto mb-8 drop-shadow-md">
              Bikaner Builders provides residential house planning and design services in Bikaner, including 2D floor plans, Vastu-oriented layouts, 3D front elevations, and construction coordination.
            </p>
            <Link href="https://wa.me/919376590313" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xl px-10 py-5 rounded-full shadow-[0_4px_25px_rgba(234,88,12,0.6)] transition-all hover:-translate-y-1">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008z" /></svg>
              Get a Free Consultation on WhatsApp
            </Link>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Article Area */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg md:prose-xl prose-slate max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-orange-500">
                
                <h2 className="text-3xl font-black text-slate-900 mb-6 border-b-4 border-orange-500 pb-4 inline-block mt-0">
                  What Is Included in House Planning &amp; 2D/3D Design in Bikaner?
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  When planning a new home, professional design planning translates your lifestyle needs, budget, and plot dimensions into a practical, buildable layout. Our approach focuses on efficient space planning, ensuring that every square foot serves a functional purpose without creating cramped rooms or wasted circulation corridors.
                </p>
                <p className="text-slate-700 leading-relaxed mb-10">
                  Residential planning in Bikaner prioritizes essential livability factors like natural day-lighting, cross-ventilation, comfortable staircase placement, and privacy between common areas and bedrooms. Where requested, we integrate Vastu orientation principles into the floor plan. Beyond the interior layout, we develop realistic 3D front elevations and ensure that all design concepts coordinate smoothly with structural requirements, material selection, and local construction methods.
                </p>

                <div className="relative w-full h-[400px] my-10 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <Image
                    src="/assets/architectural-planning-bikaner.webp"
                    alt="House planning and 2D floor plan design consultation in Bikaner"
                    title="House Planning and Design Consultation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black/50 text-center p-2 text-sm text-slate-100 italic">
                    House planning and residential layout design concept.
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3" id="services">
                  House Planning &amp; Design Services We Provide in Bikaner
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Bikaner Builders provides a structured range of residential planning and design services to support homeowners, plot owners, and commercial builders across Bikaner:
                </p>
                <ul className="space-y-4 mb-12 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block text-lg">Residential House Planning &amp; Space Layout</strong>
                      <span className="text-slate-600 text-base">Strategic placement of bedrooms, living rooms, kitchen, and utility areas for daily comfort, efficient movement, and privacy.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block text-lg">2D Floor Plans &amp; Vastu Orientation</strong>
                      <span className="text-slate-600 text-base">Detailed top-down mappings of room dimensions, wall thicknesses, door swings, and Vastu directional alignment upon request.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block text-lg">3D Front Elevation &amp; Facade Concepts</strong>
                      <span className="text-slate-600 text-base">Realistic exterior visualizations showcasing modern facade styling, balcony treatments, texture combinations, and exterior lighting.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block text-lg">Structural &amp; Execution Coordination</strong>
                      <span className="text-slate-600 text-base">Aligning room designs with structural load paths and coordinating with qualified engineering drawings before construction starts.</span>
                    </div>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  2D House Plans &amp; Floor Plan Design in Bikaner
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  The foundation of a well-built home begins with an accurate 2D floor plan. By analyzing plot dimensions, road frontage, sun path, and wind direction, we determine the optimal layout for bedrooms, living halls, kitchen, bathrooms, staircases, and parking bays. High-quality <Link href="/services/2d-naksha" className="text-orange-600 font-bold hover:underline">2D house planning</Link> ensures smooth daily circulation, prevents wasted hallway space, and maximizes natural illumination.
                </p>
                <div className="relative w-full h-[400px] my-10 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <Image
                    src="/assets/2d-house-plan-bikaner.webp"
                    alt="2D house floor plan and naksha design for residential plots in Bikaner"
                    title="2D House Floor Plan Design Concept"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-slate-700 leading-relaxed mb-10">
                  Whether you require a traditional <Link href="/services/2d-naksha" className="text-orange-600 font-bold hover:underline">2D Vastu Naksha</Link> or a modern compact floor layout in Bikaner, our residential planning is tailored around your family&apos;s specific lifestyle, plot boundaries, and future expansion requirements.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  3D Front Elevation Design in Bikaner
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  While a 2D plan organizes your internal living spaces, a 3D elevation defines your home&apos;s exterior character and curb appeal. Our <Link href="/services/3d-elevation" className="text-orange-600 font-bold hover:underline">3D front elevation design</Link> service visualizes contemporary facades, entrance canopies, balcony railings, window framing, and color combinations before ground is broken.
                </p>
                <div className="relative w-full h-[400px] my-10 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <Image
                    src="/assets/3d-front-elevation-bikaner.webp"
                    alt="3D front elevation design concept for a residential home in Bikaner"
                    title="3D Front Elevation Design Concept"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="text-slate-700 leading-relaxed mb-10">
                  Visualizing exterior materials such as stone cladding, exterior texture plaster, wood-look louvers, glass railings, and ambient facade lighting helps you finalize finishes with confidence, avoiding expensive alterations during construction.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  Planning Coordination &amp; Structural Engineering
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  There is a clear distinction between architectural planning and structural engineering. While floor plans and elevations determine the aesthetic appeal, room dimensions, and functional layout of a home, structural drawings specify the physical load-bearing elements necessary for safety.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Our house planning coordinates closely with structural engineering requirements. The <Link href="/services/structural-drawing" className="text-orange-600 font-bold hover:underline">structural drawings</Link> must align with the floor plan—ensuring column and beam placements do not cut through living areas, staircases have adequate structural bearing, and foundations are designed safely.
                </p>
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 mb-6 text-sm text-slate-700 leading-relaxed">
                  <strong>Important Technical Note:</strong> Foundation depth, column sizes, beam reinforcement details, and slab specifications must always be determined by qualified structural engineers based on site soil conditions, building height, and engineering load calculations. Statutory building plan approvals must follow local urban development authority (UIT/Municipal Corporation) regulations.
                </div>
                <div className="relative w-full h-[350px] my-10 rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50">
                  <Image
                    src="/assets/architectural-structural-coordination.webp"
                    alt="House planning and structural engineering coordination for construction in Bikaner"
                    title="House Planning and Structural Coordination"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="bg-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl my-12 text-white not-prose">
                  <h3 className="text-2xl md:text-3xl font-black mb-6 text-white leading-tight">
                    Why Climate-Responsive House Planning Matters in Bikaner
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-0">
                    Designing a home in Rajasthan requires localized awareness of extreme temperature variations, dry winds, and intense solar radiation. In Bikaner, thoughtful plot orientation shields primary living zones from harsh south-west afternoon heat. Effective planning incorporates strategic window shading, natural cross-ventilation shafts, courtyards where space permits, and practical dust management. Additionally, local construction considerations—such as groundwater quality, material delivery in congested lanes, and proper drainage slopes—are accounted for during the planning stage.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  Our House Planning &amp; Design Process
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  We follow a structured, step-by-step process to ensure transparency, client participation, and quality results from initial concept to site readiness:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 not-prose">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">01</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Initial Consultation</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Discussing your vision, family member requirements, room preferences, and target budget.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">02</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Plot &amp; Requirement Review</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Analyzing plot dimensions, road frontage, directional orientation, and Vastu guidelines.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">03</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">2D Floor Plan Development</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Drafting and refining detailed room dimensions, circulation passages, and doorway alignments.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">04</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">3D Elevation &amp; Coordination</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Crafting the exterior 3D elevation and coordinating drawing packages for site execution.</p>
                  </div>
                </div>
                <div className="relative w-full h-[350px] my-10 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <Image
                    src="/assets/architectural-design-process-bikaner.webp"
                    alt="House planning and design process from initial concept to construction coordination"
                    title="House Planning and Design Process"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  Planning &amp; Design vs Construction Execution: Understanding the Roles
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  <strong>House planning and design</strong> establishes the spatial layout, room sizes, doorway flow, and 3D exterior concepts on paper and digital models. <strong>Construction execution</strong> handles the physical realization—excavation, foundation pouring, brick masonry, plaster, plumbing, electrical conduit fitting, and final finishing.
                </p>
                <p className="text-slate-700 leading-relaxed mb-10">
                  Bikaner Builders offers both house planning services and complete <Link href="/services/turnkey-construction" className="text-orange-600 font-bold hover:underline">turnkey construction execution</Link> in Bikaner, allowing homeowners to bridge the gap between architectural plans and on-site construction without dealing with conflicting contractors.
                </p>

                {/* Cost Guide CTA */}
                <div className="bg-orange-50 rounded-2xl p-6 md:p-8 mt-12 mb-8 border border-orange-100 shadow-sm text-center not-prose">
                  <p className="text-slate-800 text-lg mb-6 leading-relaxed font-medium">
                    Planning your house construction budget? Clear floor planning and design should always precede construction budgeting. Once your layout is finalized, use our <Link href="/cost" className="text-orange-600 font-bold hover:underline">Construction Cost Guide</Link> to estimate material and labor expenses.
                  </p>
                  <Link href="/cost" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition-transform hover:-translate-y-1">
                    Calculate Construction Cost
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">
                  House Planning Services Across Bikaner &amp; Nearby Areas
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  We provide residential floor planning and 3D elevation services for projects in <Link href="/locations/pawanpuri-bikaner" className="text-orange-600 font-bold hover:underline">Pawanpuri</Link>, <Link href="/locations/jnv-colony-bikaner" className="text-orange-600 font-bold hover:underline">JNV Colony</Link>, <Link href="/locations/gangashahar-bikaner" className="text-orange-600 font-bold hover:underline">Gangashahar</Link>, Sadul Ganj, Nokha, Deshnoke, Napasar, and Murlidhar Vyas Nagar.
                </p>
                
                <div className="bg-slate-100 p-8 rounded-2xl mt-12 mb-12 border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mt-0 mb-4">Why Work with Bikaner Builders?</h3>
                  <p className="mb-0 text-slate-700 leading-relaxed">
                    We believe in honest, practical project delivery. We do not make exaggerated claims or present unverified credentials. Instead, we provide transparent communication, defined design deliverables, practical plot layouts, and coordinated construction support. Learn more <Link href="/about" className="text-orange-600 font-bold hover:underline">about our approach</Link>.
                  </p>
                </div>
              </article>

              <OtherServicesLinker currentSlug="house-plan-design-bikaner" />

              {/* FAQs */}
              <div className="mt-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <h2 className="text-3xl font-black text-slate-900 mb-8">
                  Frequently Asked Questions About House Plan Design in Bikaner
                </h2>
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">What is included in house plan design?</h3>
                    <p className="text-slate-600">House plan design includes space planning, 2D floor layouts (naksha) based on your plot dimensions, room sizing, door and window placement, staircase location, natural lighting and ventilation planning, and exterior 3D elevation concepts.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Can house plans incorporate Vastu guidelines?</h3>
                    <p className="text-slate-600">Yes, residential floor plans can incorporate Vastu principles upon request. This includes appropriate placement of the main entrance, kitchen, pooja space, staircase, and master bedroom according to directional orientation.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">What is the difference between a 2D floor plan and a 3D elevation?</h3>
                    <p className="text-slate-600">A 2D floor plan is a technical top-down view showing room dimensions, wall thicknesses, door swings, and interior flow. A 3D elevation is a realistic visual rendering showing how the exterior front facade of the building will look once constructed.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Why is structural coordination needed with house planning?</h3>
                    <p className="text-slate-600">A floor plan dictates room layouts and aesthetics, but structural coordination ensures that column, beam, and slab locations are technically sound and properly supported without obstructing functional living spaces. Final structural specifications must be prepared by qualified structural engineers based on site soil and load calculations.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">What plot details are needed to start a house plan?</h3>
                    <p className="text-slate-600">To start, we need your plot dimensions (width and depth), plot orientation (direction the plot faces), road width, your family requirements (number of bedrooms, floors, parking needs), and any specific Vastu preferences.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Can design plans be coordinated with construction execution?</h3>
                    <p className="text-slate-600">Yes. Bikaner Builders provides both house planning designs and turnkey construction execution in Bikaner, allowing homeowners to transition smoothly from approved drawings to on-site construction under coordinated supervision.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-2">Book a House Planning Consultation</h3>
                <p className="text-slate-600 mb-8 text-base">Plan your home with clarity. Contact us to discuss your plot dimensions, floor plan requirements, and 3D elevation design.</p>
                
                <Link href="https://wa.me/919376590313" target="_blank" className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1fae54] text-white font-black text-lg py-4 px-4 rounded-xl mb-4 transition-transform hover:-translate-y-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008z" /></svg>
                  WhatsApp Now
                </Link>
                <Link href="tel:+919376590313" className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-lg py-4 px-4 rounded-xl mb-6 transition-transform hover:-translate-y-1">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call +91 93765 90313
                </Link>
                
                <div className="pt-6 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Related Services &amp; Guides</h4>
                  <ul className="space-y-3">
                    <li><Link href="/services/2d-naksha" className="text-orange-600 hover:underline text-sm font-medium">2D Vastu Naksha</Link></li>
                    <li><Link href="/services/3d-elevation" className="text-orange-600 hover:underline text-sm font-medium">3D Front Elevation</Link></li>
                    <li><Link href="/services/structural-drawing" className="text-orange-600 hover:underline text-sm font-medium">Structural Drawings</Link></li>
                    <li><Link href="/services/turnkey-construction" className="text-orange-600 hover:underline text-sm font-medium">Turnkey House Construction</Link></li>
                    <li><Link href="/cost" className="text-orange-600 hover:underline text-sm font-medium">Construction Cost Guide</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </>
  );
}
