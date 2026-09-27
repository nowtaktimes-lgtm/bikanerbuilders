import Image from 'next/image';

interface DynamicPageHeroProps {
  title: string;
  image?: string;
}

export default function DynamicPageHero({ title, image }: DynamicPageHeroProps) {
  return (
    <section className="relative bg-slate-900 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {image && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover opacity-25"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-0"></div>
        </>
      )}
      {!image && (
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>
      )}
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
          {title}
        </h1>
        <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full shadow-lg"></div>
      </div>
    </section>
  );
}
