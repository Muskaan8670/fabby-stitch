import type { Metadata } from "next";
import Link from "next/link";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/forms/ContactForm";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us | Fabby Stitch",
  description: "Get in touch with Fabby Stitch New York studio for retail inquiries, custom embroidery, screen printing, or order support.",
};

export default function ContactPage() {
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
            <span className="text-zinc-900 font-semibold">Contact Us</span>
          </div>
        </nav>

        {/* 2. Hero Section */}
        <section className="bg-white border-b border-[#E4E4E7] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              <span>Fabby Stitch</span>
              <span>/</span>
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-light uppercase tracking-tight text-[#121212]">
              Contact Us<span className="font-semibold">.</span>
            </h1>
            <p className="max-w-2xl text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
              Have questions about our retail collection, custom embroidery, screen printing, or order tracking? Speak directly with our New York studio team.
            </p>
          </div>
        </section>

        {/* 3. Main Content: Contact Information Cards + Contact Form */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Contact Info & Workshop Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white border border-[#E4E4E7] p-8 space-y-6 shadow-sm">
                <div className="space-y-1.5 border-b border-[#E4E4E7] pb-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold block">
                    Direct Studio Details
                  </span>
                  <h2 className="text-xl font-semibold uppercase text-[#121212]">
                    New York Studio
                  </h2>
                  <p className="text-xs text-zinc-500">
                    Reach out to our customer support or visit our Bay Shore production facility.
                  </p>
                </div>

                <div className="space-y-5 text-xs text-zinc-700">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded bg-[#FAF9F6] border border-[#E4E4E7] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-[#121212] uppercase tracking-wider text-[10px] block">
                        Studio Location
                      </span>
                      <span className="leading-relaxed block pt-0.5">{COMPANY_INFO.address}</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded bg-[#FAF9F6] border border-[#E4E4E7] flex items-center justify-center text-[#C5A059] shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.415-5.12-3.707-6.535-6.535l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-[#121212] uppercase tracking-wider text-[10px] block">
                        Phone Number
                      </span>
                      <a href={`tel:${COMPANY_INFO.phone}`} className="text-[#C5A059] font-medium hover:underline">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded bg-[#FAF9F6] border border-[#E4E4E7] flex items-center justify-center text-[#C5A059] shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-[#121212] uppercase tracking-wider text-[10px] block">
                        Email Address
                      </span>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#C5A059] font-medium hover:underline">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded bg-[#FAF9F6] border border-[#E4E4E7] flex items-center justify-center text-[#C5A059] shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-[#121212] uppercase tracking-wider text-[10px] block">
                        Working Hours
                      </span>
                      <span>{COMPANY_INFO.workingHours}</span>
                    </div>
                  </div>
                </div>

                {/* Brochure Download CTA Card */}
                <div className="pt-4 border-t border-[#E4E4E7] space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold block">
                    Product Catalog & Price List
                  </span>
                  <a
                    href={COMPANY_INFO.catalogPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#121212] text-[#FAF9F6] text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] transition-all duration-300 shadow-md"
                  >
                    <span>Download Brochure (PDF)</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </section>

        {/* 4. Google Maps Studio Location Section */}
        <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-b border-[#E4E4E7]">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col items-start space-y-1">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                Visit Our Studio
              </span>
              <h2 className="text-2xl sm:text-4xl font-light uppercase tracking-tight text-[#121212]">
                Studio Location <span className="font-semibold">Bay Shore, NY.</span>
              </h2>
            </div>

            {/* Embedded Responsive Google Map */}
            <div className="w-full h-80 sm:h-96 border border-[#E4E4E7] bg-zinc-100 overflow-hidden shadow-sm relative">
              <iframe
                title="Fabby Stitch Location Map"
                src="https://maps.google.com/maps?q=60%20Corbin%20Ave%2C%20Unit%2060-I%2C%20Bay%20Shore%2C%20NY%2011706&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* 5. Custom Order Pre-Footer CTA */}
        <section className="w-full bg-[#121212] text-[#FAF9F6] py-14 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
                Bulk Orders & Custom Apparel
              </span>
              <h3 className="text-xl sm:text-2xl font-light uppercase tracking-tight text-white">
                Looking for a <span className="font-semibold text-white">Custom Quote?</span>
              </h3>
              <p className="text-xs text-zinc-400">
                Need custom 3D embroidered hoodies, screen printed t-shirts, or corporate polos for your team?
              </p>
            </div>
            <Link
              href="/custom-order"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#FAF9F6] text-[#121212] text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-xl flex-shrink-0"
            >
              Get Custom Quote →
            </Link>
          </div>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
