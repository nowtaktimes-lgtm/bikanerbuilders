import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BottomCTA from '@/components/BottomCTA';
import OtherServicesLinker from '@/components/OtherServicesLinker';

export const metadata: Metadata = {
  title: 'Architect in Bikaner | House Plans, 2D Maps & 3D Elevation',
  description: 'Looking for an architect in Bikaner? Explore house planning, 2D floor plans, Vastu-oriented layouts, 3D elevations and architectural design services from Bikaner Builders.',
  alternates: {
    canonical: 'https://www.bikanerbuilders.in/architect-in-bikaner/'
  },
  openGraph: {
    title: 'Architect in Bikaner | House Plans, 2D Maps & 3D Elevation',
    description: 'Looking for an architect in Bikaner? Explore house planning, 2D floor plans, Vastu-oriented layouts, 3D elevations and architectural design services from Bikaner Builders.',
    url: 'https://www.bikanerbuilders.in/architect-in-bikaner/',
    siteName: 'Bikaner Builders',
    images: [
      {
        url: 'https://www.bikanerbuilders.in/assets/architect-in-bikaner-house-design.webp',
        width: 1200,
        height: 630,
        alt: 'Modern residential architectural design concept for an architect in Bikaner',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architect in Bikaner | House Plans, 2D Maps & 3D Elevation',
    description: 'Looking for an architect in Bikaner? Explore house planning, 2D floor plans, Vastu-oriented layouts, 3D elevations and architectural design services from Bikaner Builders.',
    images: ['https://www.bikanerbuilders.in/assets/architect-in-bikaner-house-design.webp'],
  },
};

export default function ArchitectInBikanerPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.bikanerbuilders.in" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.bikanerbuilders.in/services" },
      { "@type": "ListItem", "position": 3, "name": "Architect in Bikaner", "item": "https://www.bikanerbuilders.in/architect-in-bikaner/" }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Architectural Services in Bikaner",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Bikaner Builders",
      "url": "https://www.bikanerbuilders.in"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bikaner"
    },
    "serviceType": ["Architectural Design", "House Planning", "2D Floor Plans", "3D Front Elevation"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does an architect do for a house?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An architect helps with space planning, ensuring your plot dimensions are utilized efficiently for bedrooms, kitchens, bathrooms, and circulation, while considering natural light, ventilation, and exterior aesthetic design."
        }
      },
      {
        "@type": "Question",
        "name": "Can an architect help with Vastu-based planning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, architectural planning can incorporate Vastu principles upon request. This includes appropriate placement of the entrance, kitchen, pooja room, and master bedroom for optimal Vastu alignment."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a 2D plan and 3D elevation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 2D plan is a flat, top-down view showing the layout of rooms, doors, and walls. A 3D elevation is a three-dimensional visual concept showing how the exterior front facade of the house will look once built."
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
            alt="Modern residential architectural design concept for an architect in Bikaner"
            title="Architectural House Design Concept in Bikaner"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 578px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
          
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-xl leading-tight">
              Architect in Bikaner &ndash; House Planning, 2D Maps & 3D Elevation
            </h1>
            <h2 className="text-xl md:text-2xl text-orange-400 font-bold max-w-3xl mx-auto mb-8 drop-shadow-md">
              Bikaner Builders provides architectural planning and design services for residential and commercial projects in Bikaner, including 2D floor plans, Vastu planning, and 3D elevations.
            </h2>
            <Link href="https://wa.me/919376590313" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xl px-10 py-5 rounded-full shadow-[0_4px_25px_rgba(234,88,12,0.6)] transition-all hover:-translate-y-1">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008z" /></svg>
              Get a Free Quote on WhatsApp
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
                  What Does an Architect Do for a House in Bikaner?
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  When planning a new home, an architect plays a crucial role in translating your vision into a practical, buildable reality. Our approach to architectural planning involves a deep understanding of your plot dimensions, specific client requirements, and efficient space planning. 
                </p>
                <p className="text-slate-700 leading-relaxed mb-10">
                  A professional architect in Bikaner focuses on essential elements like natural light, ventilation, optimal circulation between rooms, and staircase placement. Where requested, we also integrate Vastu considerations to align with cultural preferences. Beyond the interior layout, we develop the exterior design and ensure that all architectural plans are practically coordinated with structural requirements, material decisions, and local construction methods.
                </p>

                <div className="relative w-full h-[400px] my-10 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <Image
                    src="/assets/architectural-planning-bikaner.webp"
                    alt="Architectural house planning and design consultation concept"
                    title="Architectural Planning Consultation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black/50 text-center p-2 text-sm text-slate-100 italic">
                    Architectural design concept visualization.
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3" id="services">Architectural Services We Provide in Bikaner</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Bikaner Builders provides a structured range of architectural and planning services to support residential and commercial developments:
                </p>
                <ul className="space-y-4 mb-12 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block text-lg">Residential Architecture & House Planning</strong>
                      <span className="text-slate-600 text-base">Strategic placement of rooms for daily comfort and holistic design planning for independent homes.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block text-lg">2D Floor Plans & Vastu Orientation</strong>
                      <span className="text-slate-600 text-base">Detailed top-down mappings of your entire layout, aligning entries and rooms according to traditional principles.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <strong className="text-slate-900 block text-lg">3D Front Elevation & Structural Coordination</strong>
                      <span className="text-slate-600 text-base">Creating realistic exterior facade concepts and aligning design plans with engineering requirements.</span>
                    </div>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">2D House Plans & Floor Plan Design in Bikaner</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  The foundation of any great house begins with an accurate 2D floor plan. By carefully considering the plot dimensions and orientation, we determine the best placement for the living room, bedrooms, kitchen, bathrooms, staircase, and parking. Good <Link href="/services/2d-naksha" className="text-orange-600 font-bold hover:underline">2D house planning</Link> ensures that circulation flows naturally, preventing wasted space and ensuring every room receives adequate natural light and ventilation.
                </p>
                <div className="relative w-full h-[400px] my-10 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <Image
                    src="/assets/2d-house-plan-bikaner.webp"
                    alt="2D house floor plan design concept for residential planning in Bikaner"
                    title="2D House Plan Design Concept"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-slate-700 leading-relaxed mb-10">
                  Whether you need a modern <Link href="/services/2d-naksha" className="text-orange-600 font-bold hover:underline">2D Vastu Naksha</Link> or a space-maximizing <Link href="/services/2d-naksha" className="text-orange-600 font-bold hover:underline">2D house map in Bikaner</Link>, our design concepts aim to meet your family&apos;s specific lifestyle needs before construction begins.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">3D Front Elevation Design in Bikaner</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  While a 2D plan dictates the interior, the 3D elevation defines your home&apos;s street presence. Our <Link href="/services/3d-elevation" className="text-orange-600 font-bold hover:underline">3D front elevation design</Link> process explores contemporary facades, elegant entrances, balcony placements, and realistic windows. We visualize the combination of materials like stone, plaster, glass, and metal railing, along with facade lighting to give you a clear picture of the final exterior appearance.
                </p>
                <div className="relative w-full h-[400px] my-10 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <Image
                    src="/assets/3d-front-elevation-bikaner.webp"
                    alt="3D front elevation design concept for a house in Bikaner"
                    title="3D Front Elevation Design Concept"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">Architectural & Structural Coordination</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  There is an important distinction between architectural design and structural engineering. While architectural drawings dictate the look, feel, and spatial layout of a home, structural drawings calculate the load-bearing requirements.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Our planning ensures strong coordination between the two. The <Link href="/services/structural-drawing" className="text-orange-600 font-bold hover:underline">structural drawings</Link> must align perfectly with the architectural vision—ensuring that column and beam placements do not intrude on living spaces, staircases are properly supported, and foundation planning is sound. <em>Note: Foundation depth, beam sizes, and reinforcement details must always be determined by proper structural engineering calculations based on actual site conditions.</em>
                </p>
                <div className="relative w-full h-[350px] my-10 rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50">
                  <Image
                    src="/assets/architectural-structural-coordination.webp"
                    alt="Architectural and structural coordination for house construction"
                    title="Architectural and Structural Coordination"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="bg-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl my-12 text-white not-prose">
                  <h3 className="text-2xl md:text-3xl font-black mb-6 text-white leading-tight">
                    Why Local Architectural Planning Matters in Bikaner
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-0">
                    Designing a house in Rajasthan requires specific local awareness. Plot orientation and shading become critical to manage heat. A well-planned home in Bikaner might utilize courtyard planning, strategic ventilation, and specific material choices to handle the desert climate, dust, and maintenance challenges. Furthermore, local construction practicality is vital. Material availability, site access in older neighborhoods, and proper water/drainage planning are all considerations our local approach addresses.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">Our Architectural Design Process</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  We follow a structured approach to ensure clarity and quality from concept to construction support:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 not-prose">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">01</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Initial Consultation</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Understanding your vision, budget range, and family needs.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">02</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Plot & Requirement Discussion</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Analyzing dimensions, orientation, and Vastu preferences.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">03</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">2D Floor Plan</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Finalizing the detailed architectural map and space planning.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-black text-4xl opacity-20 block mb-2">04</span>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">3D Elevation</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Crafting the exterior facade and coordinating with construction.</p>
                  </div>
                </div>
                <div className="relative w-full h-[350px] my-10 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <Image
                    src="/assets/architectural-design-process-bikaner.webp"
                    alt="Architectural design process from house planning to construction"
                    title="House Architectural Design Process"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">Architect vs Builder: What Is the Difference?</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  An <strong>architect</strong> focuses on planning, conceptual design, architectural drawings, and space coordination. A <strong>builder or construction team</strong> handles the physical execution, material procurement, labour management, and site construction.
                </p>
                <p className="text-slate-700 leading-relaxed mb-10">
                  Bikaner Builders provides both architectural planning and <Link href="/services/turnkey-construction" className="text-orange-600 font-bold hover:underline">construction execution</Link>, allowing customers to seamlessly coordinate design and building through one unified service where appropriate.
                </p>

                {/* Cost Guide CTA */}
                <div className="bg-orange-50 rounded-2xl p-6 md:p-8 mt-12 mb-8 border border-orange-100 shadow-sm text-center not-prose">
                  <p className="text-slate-800 text-lg mb-6 leading-relaxed font-medium">
                    Planning your house construction budget? Architectural planning must always precede construction budgeting. Once your design is ready, use our <Link href="/cost" className="text-orange-600 font-bold hover:underline">Construction Cost Guide</Link> to estimate execution expenses.
                  </p>
                  <Link href="/cost" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition-transform hover:-translate-y-1">
                    Calculate Construction Cost
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b-2 border-slate-100 pb-3">Architectural Services in Bikaner & Nearby Areas</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  We are actively serving clients and providing architectural design planning for projects in <Link href="/locations/pawanpuri-bikaner" className="text-orange-600 font-bold hover:underline">Pawanpuri</Link>, <Link href="/locations/jnv-colony-bikaner" className="text-orange-600 font-bold hover:underline">JNV Colony</Link>, <Link href="/locations/gangashahar-bikaner" className="text-orange-600 font-bold hover:underline">Gangashahar</Link>, Sadul Ganj, Nokha, Deshnoke, Napasar, and Murlidhar Vyas.
                </p>
                
                <div className="bg-slate-100 p-8 rounded-2xl mt-12 mb-12 border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mt-0 mb-4">Why Trust Bikaner Builders?</h3>
                  <p className="mb-0 text-slate-700 leading-relaxed">
                    As a newly established business, we don&apos;t manufacture fake portfolios. Instead, we build trust through transparent communication, clear scopes of work, defined design deliverables, and seamless design-to-construction coordination. Learn more <Link href="/about" className="text-orange-600 font-bold hover:underline">about our approach</Link>.
                  </p>
                </div>
              </article>

              <OtherServicesLinker currentSlug="architect-in-bikaner" />

              {/* FAQs */}
              <div className="mt-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <h2 className="text-3xl font-black text-slate-900 mb-8">Frequently Asked Questions About Architects in Bikaner</h2>
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">What does an architect do for a house?</h3>
                    <p className="text-slate-600">An architect assists with space planning, ensuring your plot dimensions are utilized efficiently while considering natural light, ventilation, and aesthetic design.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">How do I choose an architect in Bikaner?</h3>
                    <p className="text-slate-600">Look for clear communication, a transparent design process, and the ability to coordinate architectural plans practically with local construction execution.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">What is the difference between a 2D plan and 3D elevation?</h3>
                    <p className="text-slate-600">A 2D plan includes the layout of all rooms, walls, doors, windows, staircases, and general circulation spaces viewed from a top-down perspective. A 3D elevation is a conceptual visual design showing exactly how the exterior front facade of your house will look once built.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Can an architect help with Vastu-based planning?</h3>
                    <p className="text-slate-600">Yes, when requested, we can orient entrances, kitchens, and master bedrooms according to Vastu principles within the 2D planning stage.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Can architecture be coordinated with construction?</h3>
                    <p className="text-slate-600">Absolutely. At Bikaner Builders, we offer both architectural planning and builder services to ensure the design is executed exactly as intended.</p>
                  </div>
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Can architectural planning be done before construction?</h3>
                    <p className="text-slate-600">It is highly recommended to complete all architectural and structural planning before beginning any physical construction to ensure accurate budgeting.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-2">Book a Free Consultation</h3>
                <p className="text-slate-600 mb-8 text-base">Start your architectural planning the right way. Contact us to discuss your plot and requirements.</p>
                
                <Link href="https://wa.me/919376590313" target="_blank" className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1fae54] text-white font-black text-lg py-4 px-4 rounded-xl mb-4 transition-transform hover:-translate-y-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zm4.242-5.467c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008z" /></svg>
                  WhatsApp Now
                </Link>
                <Link href="tel:+919376590313" className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-lg py-4 px-4 rounded-xl mb-6 transition-transform hover:-translate-y-1">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call +91 93765 90313
                </Link>
                
                <div className="pt-6 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Related Services & Guides</h4>
                  <ul className="space-y-3">
                    <li><Link href="/services/2d-naksha" className="text-orange-600 hover:underline text-sm font-medium">2D Vastu Naksha</Link></li>
                    <li><Link href="/services/3d-elevation" className="text-orange-600 hover:underline text-sm font-medium">3D Front Elevation</Link></li>
                    <li><Link href="/services/structural-drawing" className="text-orange-600 hover:underline text-sm font-medium">Structural Drawings</Link></li>
                    <li><Link href="/services/turnkey-construction" className="text-orange-600 hover:underline text-sm font-medium">House Construction</Link></li>
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
