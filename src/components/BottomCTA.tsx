import Link from 'next/link';

export default function BottomCTA() {
  return (
    <section className="bg-slate-900 py-16 md:py-24 border-t-4 border-orange-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
          Ready to start your project?
        </h2>
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Get a free estimate today! Our experts are ready to turn your vision into reality with premium quality and precision.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="https://wa.me/919376590313"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1fae54] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2className="
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 2.005a9.962 9.962 0 00-8.528 15.11L2 22l5.023-1.328a9.964 9.964 0 104.947-18.667zM12 20a7.973 7.973 0 01-4.062-1.115l-.291-.173-3.023.794.808-2.953-.19-.3A7.95 7.95 0 014.032 12 7.977 7.977 0 1112 20zM16.242 14.533c-.232-.116-1.378-.68-1.593-.758-.215-.078-.372-.116-.528.116-.156.232-.6 .758-.737.914-.136.155-.274.175-.506.058-.232-.116-.983-.362-1.87-1.156-.69-.617-1.155-1.38-1.29-1.612-.136-.233-.014-.359.102-.475.105-.105.232-.272.348-.408.116-.136.155-.233.232-.388.077-.156.039-.292-.019-.408-.058-.116-.528-1.277-.723-1.748-.19-.46-.383-.398-.528-.406-.137-.008-.293-.008-.45-.008a.86.86 0 00-.618.291c-.215.233-.822.805-.822 1.96 0 1.155.843 2.27 1.96 2.443.116.175 1.636 2.5 3.96 3.504.552.238.983.38 1.318.487.553.176 1.057.151 1.455.092.445-.067 1.378-.563 1.572-1.107.193-.544.193-1.01.136-1.107-.058-.097-.215-.155-.447-.272z" /></svg>
            Chat on WhatsApp
          </Link>
          <Link
            href="tel:+919376590313"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-1"
          >
            Call Us Now
          </Link>
        </div>
      </div>
    </section>
  );
}
