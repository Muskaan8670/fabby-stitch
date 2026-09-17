import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PRIMARY_SERVICES = [
  {
    number: "02",
    title: "EMBROIDERY",
    subtitle: "High-Density 3D Puff & Flat Stitching",
    description:
      "Textured, durable branding for polo chests, jacket sleeves, outerwear, and structured caps. Custom digitized artwork stitched with vibrant, colorfast thread.",
    imageSrc: "/images/gateway-corporate-custom.jpg",
    imageAlt: "Fabby Stitch Custom Embroidery Services",
    href: "/custom-quote",
    tags: ["Caps", "Polo Shirts", "Jackets", "Outerwear"],
  },
  {
    number: "03",
    title: "SCREEN PRINTING",
    subtitle: "Plastisol, Water-Based & DTG Printing",
    description:
      "Vibrant multi-color screen printing and Direct-to-Garment (DTG) graphics. Engineered for crisp chest logos, large back prints, and soft-hand feel.",
    imageSrc: "/images/featured-tee-heavyweight-editorial.jpg",
    imageAlt: "Fabby Stitch Custom Screen Printing Services",
    href: "/custom-quote",
    tags: ["T-Shirts", "Hoodies", "Soft-Hand", "Multi-Color"],
  },
  {
    number: "04",
    title: "PERSONALIZED APPAREL",
    subtitle: "Individual Graphics, Names & Custom Quotes",
    description:
      "Custom apparel tailored for individual needs. Add custom names, jersey numbers, personal graphics, or unique artwork to hoodies, t-shirts, and caps.",
    imageSrc: "/images/prod-hoodie-01.jpg",
    imageAlt: "Fabby Stitch Personalized Apparel Services",
    href: "/custom-quote",
    tags: ["Custom Names", "Numbers", "Personal Tees", "Gift Items"],
  },
  {
    number: "05",
    title: "CORPORATE & TEAM APPAREL",
    subtitle: "Uniform Programs & Staff Apparel",
    description:
      "Professional corporate apparel and team uniforms. Coordinated polos, hoodies, jackets, and caps designed for company staff, events, and organizations.",
    imageSrc: "/images/featured-polo-pique-editorial.jpg",
    imageAlt: "Fabby Stitch Corporate & Team Apparel Services",
    href: "/custom-quote",
    tags: ["Staff Uniforms", "Company Polos", "Event Apparel", "Workwear"],
  },
  {
    number: "06",
    title: "BULK / PRODUCTION",
    subtitle: "Scalable Manufacturing & Wholesale",
    description:
      "Reliable custom apparel production for volume orders. Strict workshop quality control, consistent garment construction, and expedited wholesale lead times.",
    imageSrc: "/images/hero-campaign-group.jpg",
    imageAlt: "Fabby Stitch Bulk Apparel Production Services",
    href: "/custom-quote",
    tags: ["Volume Orders", "No Minimums", "NYC Control", "Wholesale"],
  },
];

const CUSTOMIZATION_METHODS = [
  {
    title: "EMBROIDERY & 3D PUFF",
    subtitle: "Textured & Long-Lasting Branding",
    desc: "Ideal for polo chests, structured twill caps, jackets, and corporate crests. High-density Japanese machinery ensures sharp lines and long-term wash durability.",
    icon: (
      <svg className="w-6 h-6 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.006-.619a15.997 15.997 0 015.006-8.438m-5.006 8.438L12 12m-6.78 4.122l2.25-2.25m6.78-2.25l2.25-2.25m-2.25 2.25a15.998 15.998 0 001.62-3.388m0 0a15.997 15.997 0 008.438-5.006m-8.438 5.006L12 12m4.122-6.78l-2.25 2.25" />
      </svg>
    ),
  },
  {
    title: "SCREEN PRINTING & DTG",
    subtitle: "Vibrant Multi-Color Artworks",
    desc: "High-definition plastisol and eco-friendly water-based screen printing alongside DTG for complex photographic graphics and soft-hand cotton feel.",
    icon: (
      <svg className="w-6 h-6 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.037-.502.082-.75.137M9.75 3.104a11.996 11.996 0 016.924 3.75m-6.924-3.75A11.996 11.996 0 003 6.854M15 14.5l-4.091-4.091a2.25 2.25 0 01-.659-1.591V3.104m7.5 11.396a2.25 2.25 0 002.25-2.25v-3.75a2.25 2.25 0 00-2.25-2.25h-3" />
      </svg>
    ),
  },
  {
    title: "PERSONALIZATION",
    subtitle: "Individual Names & Numbering",
    desc: "Custom player numbers, employee names, and personalized text overlays for team jerseys, corporate outerwear, and custom gifts.",
    icon: (
      <svg className="w-6 h-6 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "RELABELING & FINISHING",
    subtitle: "Retail Brand Packaging",
    desc: "Original neck tag removal, custom woven tag stitching, printed size labels, custom hangtag attachment, fold, and individual polybag packaging.",
    icon: (
      <svg className="w-6 h-6 text-[#C5A059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#121212] font-sans antialiased">
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        {/* 1. Restrained Editorial Services Hero */}
        <section className="w-full bg-white border-b border-[#E4E4E7] py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              <span>Fabby Stitch</span>
              <span>/</span>
              <span>Custom Services</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-light uppercase tracking-tight text-[#121212]">
              Built Around <span className="font-semibold">Your Brand.</span>
            </h1>
            <p className="max-w-2xl text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
              Full-service apparel customization, high-density embroidery, direct screen printing, and corporate uniform solutions. We deliver workshop quality for companies, sports teams, brands, and individual orders.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/custom-quote"
                className="px-8 py-3.5 bg-[#121212] text-[#FAF9F6] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#C5A059] transition-all duration-300 shadow-md"
              >
                Get Custom Quote →
              </Link>
              <a
                href="#primary-services"
                className="px-6 py-3.5 bg-white border border-zinc-300 text-zinc-700 hover:border-zinc-900 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-200"
              >
                Explore Services ↓
              </a>
            </div>
          </div>
        </section>

        {/* 2. Primary Services (Asymmetric Editorial Cards) */}
        <section id="primary-services" className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E4E4E7] pb-6">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                Core Offerings
              </span>
              <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-tight text-[#121212]">
                Primary <span className="font-semibold">Services</span>
              </h2>
            </div>
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
              01 – 06 Service Overview
            </span>
          </div>

          {/* Large Featured Service Card: 01 CUSTOM LOGO APPAREL */}
          <div className="group relative flex flex-col lg:flex-row justify-between bg-white border border-[#E4E4E7] overflow-hidden transition-all duration-300 hover:border-zinc-400 hover:shadow-2xl">
            <div className="relative w-full lg:w-3/5 min-h-[340px] lg:min-h-[420px] bg-zinc-900 overflow-hidden">
              <Image
                src="/images/pathway-custom-editorial.jpg"
                alt="Fabby Stitch Custom Logo Apparel"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#121212]/30 to-[#121212]/90 hidden lg:block" />
            </div>

            <div className="w-full lg:w-2/5 p-8 sm:p-12 flex flex-col justify-between space-y-6 bg-white">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 bg-[#121212] text-[#FAF9F6] text-xs font-mono font-bold">
                    01
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                    Featured Service
                  </span>
                </div>
                <h3 className="text-3xl font-light uppercase tracking-tight text-[#121212]">
                  Custom Logo <span className="font-semibold">Apparel</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                  Transform premium blank garments into branded apparel for your company, team, or promotional launch. We handle digitized logo placement across tees, hoodies, polos, jackets, and headwear.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["Brand Logos", "Staff Uniforms", "Event Merch", "Vector Proofs"].map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-zinc-100 text-zinc-600 text-[10px] uppercase tracking-wider font-semibold border border-zinc-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E4E4E7]/60">
                <Link
                  href="/custom-quote"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#121212] group-hover:text-[#C5A059] transition-colors"
                >
                  <span>Request Custom Logo Quote</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Grid of Remaining 5 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRIMARY_SERVICES.map((srv) => (
              <div
                key={srv.number}
                className="group relative flex flex-col justify-between bg-white border border-[#E4E4E7] overflow-hidden transition-all duration-300 hover:border-zinc-400 hover:shadow-xl"
              >
                {/* Visual Image */}
                <div className="relative w-full aspect-[16/10] bg-zinc-900 overflow-hidden">
                  <Image
                    src={srv.imageSrc}
                    alt={srv.imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-[#121212]/90 backdrop-blur-md text-[#FAF9F6] text-[10px] font-mono font-bold border border-white/10">
                    {srv.number}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-medium block">
                      {srv.subtitle}
                    </span>
                    <h3 className="text-lg font-semibold uppercase tracking-tight text-[#121212] group-hover:text-[#C5A059] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-zinc-600 font-normal leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E4E4E7]/60 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {srv.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-zinc-100 text-zinc-600 text-[9px] uppercase tracking-wider font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={srv.href}
                      className="text-xs uppercase tracking-widest font-semibold text-[#121212] group-hover:text-[#C5A059] transition-colors inline-flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Dedicated Customization Methods Breakdown */}
        <section className="w-full bg-white border-y border-[#E4E4E7] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
                Technical Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-tight text-[#121212]">
                Customization <span className="font-semibold">Methods</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                We apply artwork using industry-standard decoration techniques suited for each specific garment fabric and silhouette.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CUSTOMIZATION_METHODS.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF9F6] border border-zinc-200 p-8 space-y-4 flex flex-col justify-between hover:border-zinc-400 transition-all"
                >
                  <div className="space-y-3">
                    <div className="p-3 bg-white border border-zinc-200 inline-block">
                      {m.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-medium block">
                      {m.subtitle}
                    </span>
                    <h3 className="text-base font-semibold uppercase tracking-wider text-[#121212]">
                      {m.title}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Business / Corporate Section ("BUILT FOR YOUR BRAND.") */}
        <section className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="bg-[#121212] text-[#FAF9F6] border border-zinc-800 p-8 sm:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
                Corporate Apparel Programs
              </span>
              <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-white">
                Built For <span className="font-semibold text-white">Your Brand.</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                Outfit your company staff, field teams, hospitality personnel, or event organization with cohesive branded apparel. We provide embroidered polo shirts, durable outerwear jackets, executive fleece pullovers, and structured caps built to represent your company with pride.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-zinc-400">
                <span className="flex items-center gap-2">✓ Corporate Uniforms</span>
                <span className="flex items-center gap-2">✓ Staff Polo Shirts</span>
                <span className="flex items-center gap-2">✓ Executive Outerwear</span>
                <span className="flex items-center gap-2">✓ Event Merchandise</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full sm:w-auto flex-shrink-0">
              <Link
                href="/custom-quote"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#FAF9F6] text-[#121212] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-xl text-center"
              >
                Get Custom Quote →
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Personalized Apparel Section */}
        <section className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E4E4E7] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
                Individual & Custom Orders
              </span>
              <h3 className="text-2xl sm:text-3xl font-light uppercase tracking-tight text-[#121212]">
                Personalized <span className="font-semibold">Apparel</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                Need a unique hoodie, personalized t-shirt, or custom embroidered cap with your own personal artwork, name, or graphic? We accommodate single-item custom requests with the same precision as bulk runs.
              </p>
            </div>
            <Link
              href="/custom-quote"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#121212] text-[#FAF9F6] text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] transition-all duration-300 shadow-md flex-shrink-0"
            >
              Start Your Custom Design →
            </Link>
          </div>
        </section>

        {/* 6. Concise Factual Trust / Value Section */}
        <section className="w-full bg-white border-y border-[#E4E4E7] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
                Quality Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-tight text-[#121212]">
                Why Fabby Stitch <span className="font-semibold">Services</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "New York Workshop",
                  desc: "Direct workshop control in Bay Shore, NY for fast turnaround and accurate digitizing proofs.",
                },
                {
                  title: "No Order Minimums",
                  desc: "From 1 single personalized piece to 1,000+ corporate uniform production runs.",
                },
                {
                  title: "Heavyweight Fabrics",
                  desc: "220 GSM 100% combed cotton t-shirts and 380–400 GSM heavyweight fleece pullovers.",
                },
                {
                  title: "High-Density Stitching",
                  desc: "Japanese multi-head embroidery machines for 3D puff embroidery and crisp thread logos.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#FAF9F6] border border-zinc-200 p-6 space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#121212]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Bottom Custom Quote CTA Banner */}
        <section className="bg-[#121212] text-[#FAF9F6] py-20 px-4 sm:px-6 lg:px-8 text-center border-t border-zinc-800">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
              Have A Project In Mind?
            </span>
            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-white">
              Tell Us What You Need <span className="font-semibold text-white">And Get Started</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-normal leading-relaxed">
              Submit your artwork, garment requirements, and quantities. Our New York workshop team responds with direct pricing and digital proofs within 24 hours.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/custom-quote"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#FAF9F6] text-[#121212] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-xl"
              >
                Get Custom Quote →
              </Link>
              <Link
                href="/custom-quote#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white text-xs uppercase tracking-[0.2em] font-semibold hover:border-white transition-all duration-300"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
