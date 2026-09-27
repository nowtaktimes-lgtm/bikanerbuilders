import Image from 'next/image';
import Link from 'next/link';

interface DynamicPageHeroProps {
  title: string;
  image?: string;
  category: string;
  categoryLink: string;
}

export default function DynamicPageHero({ title, image, category, categoryLink }: DynamicPageHeroProps) {
  return (
    <section className="relative bg-slate-900 pt-32 pb-32 md:pt-40 md:pb-40 overflow-hidden">
      {image && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-slate-900/85 z-0"></div>
        </>
      )}
      {!image && (
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>
      )}
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* SEO Breadcrumbs */}
        <nav className="mb-6 flex justify-center items-center space-x-2 text-sm md:text-base font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-slate-500">/</span>
          <Link href={categoryLink} className="hover:text-white transition-colors">{category}</Link>
          <span className="text-slate-500">/</span>
          <span className="text-orange-400">{title}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
          {title}
        </h1>
        <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full shadow-lg"></div>
      </div>
    </section>
  );
}
