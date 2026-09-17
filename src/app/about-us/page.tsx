import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CraftsmanshipSection from "@/components/home/CraftsmanshipSection";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Fabby Stitch - Priority on Quality",
  description: "Learn about Fabby Stitch, our New York studio origin, commitment to apparel craftsmanship, custom embroidery, and direct screen printing.",
};

const BRAND_PILLARS = [
  {
    number: "01",
    title: "Priority on Quality",
    description: "Every garment is built from heavy-weight combed cotton or plush French Terry fleece, engineered to hold shape and softness through repeated wear.",
  },
  {
    number: "02",
    title: "Direct Workshop Pricing",
    description: "Operating out of our Bay Shore, NY production studio allows us to offer direct pricing without intermediary markups.",
  },
  {
    number: "03",
    title: "Flexible Order Quantities",
    description: "Whether you need a single custom embroidered piece or a 500+ unit corporate run, we maintain the exact same quality standard.",
  },
  {
    number: "04",
    title: "Technical Precision",
    description: "From high-density screen printing to 3D raised puff embroidery, our craftsmen use state-of-the-art machinery and durable thread work.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#121212] font-sans antialiased">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Header */}
      <Header />

      <main className="flex-1">
        {/* 1. Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-zinc-200/80 py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 font-medium">
            <Link href="/" className="hover:text-zinc-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-zinc-900 font-semibold">About Us</span>
          </div>
        </nav>

        {/* 2. Hero Section */}
        <section className="bg-white border-b border-[#E4E4E7] py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              <span>Fabby Stitch</span>
              <span>/</span>
              <span>Brand Story</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-light uppercase tracking-tight text-[#121212]">
              About Us<span className="font-semibold">.</span>
            </h1>
            <p className="max-w-3xl text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
              Fabby Stitch Inc. was established in Bay Shore, New York to bridge the gap between high-end apparel construction and accessible custom manufacturing. We prioritize quality fabrics, precise stitching, and direct workshop service.
            </p>
          </div>
        </section>

        {/* 3. Section 1: Brand Story & New York Origin */}
        <section className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E4E4E7]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                The Workshop Standard
              </span>
              <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#121212]">
                Quality Built On <span className="font-semibold">Precision.</span>
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                <p>
                  Founded with a commitment to uncompromised craftsmanship, Fabby Stitch operates as both a curator of premium ready-to-wear essentials and an enterprise custom apparel workshop in New York.
                </p>
                <p>
                  Our lineup ranges from everyday combed cotton tees ($23.95) and heavyweight French Terry fleece hoodies ($34.95) to tailored pique polos and structured headwear.
                </p>
                <p>
                  Whether producing a single custom piece or delivering large corporate runs, we apply the exact same focus on GSM fabric density, seam reinforcement, and high-density thread execution.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-6 text-xs text-zinc-700">
                <div>
                  <span className="font-semibold text-[#121212] block uppercase tracking-wider text-[10px]">Studio HQ</span>
                  <span>Bay Shore, NY</span>
                </div>
                <div className="w-px h-8 bg-zinc-200" />
                <div>
                  <span className="font-semibold text-[#121212] block uppercase tracking-wider text-[10px]">Specialization</span>
                  <span>Screen Printing & 3D Embroidery</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[4/3] bg-zinc-900 border border-[#E4E4E7] overflow-hidden shadow-sm">
                <Image
                  src="/images/craftsmanship-detail-editorial.jpg"
                  alt="Fabby Stitch Studio Craftsmanship Detail"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </section>

        {/* 4. Section 2: Four Brand Pillars Grid */}
        <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E4E4E7]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex flex-col items-start space-y-2 border-b border-[#E4E4E7] pb-6">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                Our Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-tight text-[#121212]">
                What Defines <span className="font-semibold">Fabby Stitch.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {BRAND_PILLARS.map((pillar) => (
                <div key={pillar.number} className="space-y-3 p-6 bg-[#FAF9F6] border border-[#E4E4E7]">
                  <span className="text-2xl font-bold font-mono text-[#C5A059] block">
                    {pillar.number}
                  </span>
                  <h3 className="text-base font-semibold uppercase text-[#121212]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Section 3: Craftsmanship & Workshop Capabilities */}
        <CraftsmanshipSection />

        {/* 6. Section 4: CTA Banner */}
        <section className="bg-[#121212] text-[#FAF9F6] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
              Partner With Fabby Stitch
            </span>
            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-white">
              Experience The <span className="font-semibold text-white">Difference.</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-normal leading-relaxed">
              Explore our ready-to-wear essentials or connect with our New York studio team to discuss custom embroidery and bulk apparel production.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/shop"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#FAF9F6] text-[#121212] text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-xl"
              >
                Shop Retail Catalog →
              </Link>
              <Link
                href="/custom-order"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#FAF9F6] text-[#FAF9F6] text-xs uppercase tracking-widest font-semibold hover:bg-[#FAF9F6] hover:text-[#121212] transition-all duration-300"
              >
                Get Custom Quote →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
