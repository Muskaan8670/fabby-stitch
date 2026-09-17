import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomQuoteForm from "@/components/forms/CustomQuoteForm";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Custom Apparel Orders & Corporate Merchandise | Fabby Stitch",
  description: "Request a custom quote for screen printed T-shirts, 3D embroidered hoodies, corporate polos, and headwear from Fabby Stitch New York production studio.",
};

const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Submit Specs & Artwork",
    description: "Fill out the custom order form with your desired apparel category, quantities, and upload your vector logo or artwork.",
  },
  {
    step: "02",
    title: "Digital Proof & Mockup",
    description: "Our technical production team reviews your request and sends a 3D digital render and exact quote within 24 hours.",
  },
  {
    step: "03",
    title: "Workshop Production & QA",
    description: "Once approved, your garments enter production using high-density screen printing or 3D puff embroidery with strict QA checks.",
  },
  {
    step: "04",
    title: "Worldwide Dispatch",
    description: "Your custom branded apparel is individually folded, polybagged, and shipped directly to your office or event location.",
  },
];

const WE_SERVED_PROJECTS = [
  {
    id: "proj-1",
    title: "Corporate Team Fleece Hoodies",
    category: "Custom 3D Puff Embroidery",
    description: "400+ GSM Heavyweight French Terry pullovers customized for corporate engineering teams.",
    imageSrc: "/images/featured-hoodie-zip-editorial.jpg",
  },
  {
    id: "proj-2",
    title: "Executive Staff Pique Polos",
    category: "Direct Screen Printing & Embroidery",
    description: "Tailored cotton pique polos with high-density chest embroidery for hospitality staff.",
    imageSrc: "/images/featured-polo-pique-editorial.jpg",
  },
  {
    id: "proj-3",
    title: "Bespoke Athletic Team Caps",
    category: "Structured 6-Panel Headwear",
    description: "Structured cotton twill dad caps with 3D raised embroidery and custom brass hardware.",
    imageSrc: "/images/featured-cap-twill-editorial.jpg",
  },
  {
    id: "proj-4",
    title: "Custom Event Staff T-Shirts",
    category: "Plastisol Screen Printing",
    description: "100% combed cotton graphic tees produced for large-scale New York brand activations.",
    imageSrc: "/images/featured-tee-heavyweight-editorial.jpg",
  },
];

export default function CustomOrderPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#121212] font-sans antialiased">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Navigation Header */}
      <Header />

      <main className="flex-1">
        {/* 1. Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-zinc-200/80 py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 font-medium">
            <Link href="/" className="hover:text-zinc-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-zinc-900 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-zinc-900 font-semibold">Custom Order</span>
          </div>
        </nav>

        {/* 2. Hero Section */}
        <section className="bg-[#141416] text-[#FAF9F6] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span>Corporate & Custom Apparel Program</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-white leading-tight max-w-4xl">
              Custom apparel for your <br />
              <span className="font-semibold text-white">office, brand or team.</span>
            </h1>

            <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl font-normal leading-relaxed">
              Direct workshop pricing with flexible order quantities. Engineered in New York with high-density embroidery, screen printing, and private label manufacturing.
            </p>
          </div>
        </section>

        {/* 3. Form & Contact Information Grid */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Studio Contact & Information */}
            <div className="lg:col-span-4 space-y-8 bg-white border border-[#E4E4E7] p-8 shadow-sm">
              <div className="space-y-2 border-b border-[#E4E4E7] pb-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                  Direct Studio Contact
                </span>
                <h2 className="text-xl font-semibold uppercase text-[#121212]">
                  New York Studio
                </h2>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Speak directly with our technical production specialists to review fabric options, embroidery proofs, or bulk quote requests.
                </p>
              </div>

              {/* Business Info List */}
              <div className="space-y-5 text-xs text-zinc-700">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[#121212] block uppercase tracking-wider text-[10px]">Studio Address</span>
                    <span>{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#C5A059] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[#121212] block uppercase tracking-wider text-[10px]">Email Inquiries</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#C5A059] hover:underline font-medium">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#C5A059] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.415-5.12-3.707-6.535-6.535l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[#121212] block uppercase tracking-wider text-[10px]">Direct Phone</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-[#C5A059] hover:underline font-medium">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#C5A059] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[#121212] block uppercase tracking-wider text-[10px]">Production Hours</span>
                    <span>{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Capabilities Checklist */}
              <div className="pt-6 border-t border-[#E4E4E7] space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold block">
                  Workshop Capabilities
                </span>
                <ul className="space-y-2 text-xs text-zinc-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    <span>Plastisol & Water-Based Screen Printing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    <span>3D Raised & Flat Direct Embroidery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    <span>Custom Woven Neck Labels & Tags</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    <span>Heavyweight French Terry & Combed Cotton</span>
                  </li>
                </ul>
              </div>

              {/* Download Brochure CTA Card */}
              <div className="pt-6 border-t border-[#E4E4E7] space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold block">
                  Official Product Catalog
                </span>
                <a
                  href={COMPANY_INFO.catalogPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#121212] text-[#FAF9F6] text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] transition-all duration-300 shadow-md"
                >
                  <span>Download Brochure (PDF)</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Custom Order Form */}
            <div className="lg:col-span-8">
              <CustomQuoteForm />
            </div>

          </div>
        </section>

        {/* 4. How Custom Orders Work Section */}
        <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-b border-[#E4E4E7]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex flex-col items-start space-y-2 border-b border-[#E4E4E7] pb-6">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                Production Workflow
              </span>
              <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-tight text-[#121212]">
                How Custom Orders <span className="font-semibold">Work.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {HOW_IT_WORKS_STEPS.map((st) => (
                <div key={st.step} className="space-y-3 p-6 bg-[#FAF9F6] border border-[#E4E4E7]">
                  <span className="text-2xl font-bold font-mono text-[#C5A059] block">
                    {st.step}
                  </span>
                  <h3 className="text-base font-semibold uppercase text-[#121212]">
                    {st.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    {st.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. "WE SERVED" Project Showcase Section */}
        <section className="bg-[#FAF9F6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex flex-col items-start space-y-2 border-b border-[#E4E4E7] pb-8">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                Corporate Work Showcase
              </span>
              <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#121212]">
                We <span className="font-semibold">Served.</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 max-w-xl font-normal leading-relaxed">
                Recent custom apparel manufacturing programs, embroidered corporate uniforms, and promotional merchandise produced in our workshop.
              </p>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WE_SERVED_PROJECTS.map((proj) => (
                <article
                  key={proj.id}
                  className="group relative flex flex-col bg-white border border-[#E4E4E7] overflow-hidden transition-all duration-300 hover:border-zinc-400 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
                    <Image
                      src={proj.imageSrc}
                      alt={proj.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                  </div>
                  <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-semibold block">
                        {proj.category}
                      </span>
                      <h3 className="text-sm font-semibold uppercase text-[#121212]">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed font-normal pt-1">
                        {proj.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
