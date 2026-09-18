import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";

export default function GatewayPage() {
  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden flex flex-col bg-white text-zinc-900 font-sans antialiased">
      {/* 1. Compact Header */}
      <header className="h-12 lg:h-14 px-4 sm:px-8 bg-white border-b border-zinc-200/80 flex items-center justify-between flex-shrink-0 z-30">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/favvy-stitch-logo.webp"
              alt="Fabby Stitch"
              width={140}
              height={40}
              className="h-7 sm:h-8 w-auto object-contain"
              priority
            />
          </Link>
          <span className="hidden sm:inline-block h-3.5 w-px bg-zinc-300" />
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-medium">
            Priority on Quality
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={COMPANY_INFO.catalogPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] uppercase tracking-wider font-medium text-zinc-700 hover:text-zinc-950 border border-zinc-300 rounded-sm hover:border-zinc-900 transition-colors"
          >
            <span>Brochure</span>
            <svg className="w-3 h-3 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </header>

      {/* 2. Main Dual Gateway Panels (Strictly fills viewport height on desktop) */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-0 relative z-10">
        {/* LEFT PANEL: ONLINE RETAIL */}
        <div className="group relative flex flex-col justify-end p-6 sm:p-10 lg:p-14 min-h-[420px] lg:min-h-0 overflow-hidden border-b lg:border-b-0 lg:border-r border-zinc-200/60">
          {/* Approved Fashion/Editorial Group Image */}
          <Image
            src="/images/landing-online-retail.png"
            alt="Fabby Stitch Online Retail"
            fill
            priority
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            style={{ objectPosition: "88% 50%" }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Subtle text readability gradient (kept natural, bright, non-darkened) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/85" />

          {/* Card Content Container */}
          <div className="relative z-10 max-w-lg space-y-3.5">
            {/* Promo Tag */}
            <div className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm border border-white/40 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-zinc-900 font-semibold shadow-sm">
              Auto 10% Off On Your First Order
            </div>

            {/* Section Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light uppercase tracking-tight text-white drop-shadow-sm leading-none">
              Online <span className="font-semibold">Retail</span>
            </h1>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/home"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-zinc-950 hover:bg-[#C5A059] hover:text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-sm transition-all duration-300 shadow-md group-hover:shadow-lg"
              >
                Enter Site
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: CORPORATE & CUSTOM */}
        <div className="group relative flex flex-col justify-end p-6 sm:p-10 lg:p-14 min-h-[420px] lg:min-h-0 overflow-hidden">
          {/* Approved Apparel Workshop/Customization Image */}
          <Image
            src="/images/landing-corporate-custom.jpg"
            alt="Fabby Stitch Corporate & Custom Workshop"
            fill
            priority
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            style={{ objectPosition: "78% 50%" }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Subtle text readability gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/85" />

          {/* Card Content Container */}
          <div className="relative z-10 max-w-lg space-y-3.5">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light uppercase tracking-tight text-white drop-shadow-sm leading-none">
              Corporate & <span className="font-semibold">Custom</span>
            </h2>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/custom-order"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-zinc-950 hover:bg-[#C5A059] hover:text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-sm transition-all duration-300 shadow-md group-hover:shadow-lg"
              >
                Enter Site
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Ultra-Compact Footer (~38-42px) */}
      <footer className="h-10 sm:h-11 px-4 sm:px-8 bg-white border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-500 gap-1 sm:gap-4 flex-shrink-0 z-30">
        <div>
          <span>© {new Date().getFullYear()} Fabby Stitch. All Rights Reserved.</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-5 text-zinc-600">
          <span className="truncate">60 Corbin Ave, Unit 60-I, Bay Shore, NY 11706</span>
          <span className="hidden md:inline text-zinc-300">•</span>
          <a href="mailto:info@fabbystitch.com" className="hidden md:inline hover:text-zinc-900 transition-colors">
            info@fabbystitch.com
          </a>
        </div>
      </footer>
    </div>
  );
}


