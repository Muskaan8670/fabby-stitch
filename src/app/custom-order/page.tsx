import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomOrderForm from "@/components/forms/CustomOrderForm";

export const metadata: Metadata = {
  title: "Custom Apparel Orders & Corporate Merchandise | Fabby Stitch",
  description: "Request a custom quote for apparel from Fabby Stitch.",
};

const WE_SERVED_IMAGES = [
  { id: "ws-1", label: "Showcase Work", src: "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.17 (6).jpeg" },
  { id: "ws-2", label: "Showcase Work", src: "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.20.jpeg" },
  { id: "ws-polo", label: "Polo Shirt", src: "/images/newImages/WhatsApp Image 2026-09-17 at 18.21.12.jpeg" },
  { id: "ws-tshirt", label: "T-Shirt", src: "/images/newImages/WhatsApp Image 2026-09-17 at 18.23.39 (1).jpeg" },
  { id: "ws-sweatshirt", label: "Sweat Shirt", src: "/images/newImages/WhatsApp Image 2026-09-17 at 18.25.04 (3).jpeg" },
  { id: "ws-hoodie", label: "Hoodie", src: "/images/newImages/WhatsApp Image 2026-09-17 at 18.23.38.jpeg" },
  { id: "ws-cap", label: "Cap", src: "/images/newImages/WhatsApp Image 2026-09-17 at 18.21.12.jpeg" },
  { id: "ws-longsleeve", label: "Long-Sleeve T-shirt", src: "/images/newImages/WhatsApp Image 2026-09-17 at 18.30.06.jpeg" },
];

export default function CustomOrderPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#121212] font-sans antialiased">
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-zinc-200/80 py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 font-medium">
            <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-zinc-900 font-semibold">Custom Order</span>
          </div>
        </nav>

        {/* Custom Apparel Inquiry Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light uppercase tracking-tight text-[#121212]">
                Custom apparel for your <span className="font-semibold">office or business</span>
              </h1>
              <p className="text-sm text-zinc-600 max-w-xl mx-auto">
                Fill the form and contact us at for confirmation:<br/>
                <a href="mailto:info@fabbystitch.com" className="font-semibold hover:text-[#C5A059] transition-colors">info@fabbystitch.com</a> • <a href="tel:6314810010" className="font-semibold hover:text-[#C5A059] transition-colors">(631) 481-0010</a>
              </p>
            </div>

            <div className="bg-white border border-[#E4E4E7] p-6 sm:p-10 shadow-sm">
              <CustomOrderForm />
            </div>
          </div>
        </section>

        {/* WE SERVED Section */}
        <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#E4E4E7]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4 border-b border-[#E4E4E7] pb-8">
              <h2 className="text-3xl sm:text-4xl font-semibold uppercase tracking-tight text-[#121212]">
                WE SERVED
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {WE_SERVED_IMAGES.map((img) => (
                <div key={img.id} className="group relative flex flex-col space-y-3">
                  <div className="relative aspect-[4/5] bg-zinc-100 overflow-hidden border border-[#E4E4E7]">
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#121212] text-center">
                    {img.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
