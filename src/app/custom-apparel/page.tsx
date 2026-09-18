import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CUSTOM_SERVICES } from "@/data/customServices";

const SERVICE_CAPABILITIES = [
  {
    number: "01",
    title: "High-Density 3D Embroidery",
    subtitle: "Puff Embroidery • Flat Stitching • Crests",
    description:
      "Precision multi-head embroidery for headwear, polo chests, hoodie sleeves, and outerwear. Supports high-density 3D puff embroidery for bold dimensional branding with vibrant thread colors.",
    imageSrc: "/images/gateway-corporate-custom.jpg",
    tags: ["Headwear", "Polos", "Outerwear", "Crests"],
  },
  {
    number: "02",
    title: "Direct Screen Printing & DTG",
    subtitle: "Plastisol • Water-Based • High-Density Graphics",
    description:
      "Vibrant multi-color screen printing alongside Direct-To-Garment (DTG) printing. Engineered for high detail artwork, back prints, and soft-hand feel on heavyweight cotton and fleece.",
    imageSrc: "/images/newImages/WhatsApp Image 2026-09-17 at 18.23.39 (1).jpeg",
    tags: ["T-Shirts", "Hoodies", "Soft-Hand", "Multi-Color"],
  },
  {
    number: "03",
    title: "Custom Apparel & Private Label",
    subtitle: "Cut & Sew • Fabric Sourcing • Silhouette Specs",
    description:
      "Custom apparel manufacturing built to your exact specifications. Select fabric weights (220–400 GSM), colorways, custom cuts, ribbing details, and custom pattern construction.",
    imageSrc: "/images/pathway-custom-editorial.jpg",
    tags: ["Custom Cut", "Heavyweight", "Dyeing", "Silhouettes"],
  },
  {
    number: "04",
    title: "Relabeling & Retail Finishing",
    subtitle: "Woven Tags • Hem Labels • Polybagging",
    description:
      "Turn blank garments into retail-ready apparel collections. We handle tag removal, custom woven neck label stitching, printed size tags, custom hangtag attachment, and polybagging.",
    imageSrc: "/images/craftsmanship-detail-editorial.jpg",
    tags: ["Woven Tags", "Hangtags", "Polybagging", "Barcode Labels"],
  },
  {
    number: "05",
    title: "Corporate & Team Uniforms",
    subtitle: "Staff Apparel • Hospitality • Executive Wear",
    description:
      "Durable, professional uniform programs for corporate teams, tech companies, restaurants, and sports organizations. Engineered for daily wear, wash durability, and sleek branding.",
    imageSrc: "/images/newImages/WhatsApp Image 2026-09-17 at 18.21.12.jpeg",
    tags: ["Staff Uniforms", "Polo Shirts", "Jackets", "Corporate Caps"],
  },
  {
    number: "06",
    title: "Bulk Production & Wholesale",
    subtitle: "No Minimums • Scalable Production Runs",
    description:
      "Whether you need 1 custom embroidered prototype or a bulk production run of 5,000+ garments, our workshop delivers rigorous quality control and fast lead times.",
    imageSrc: "/images/newImages/WhatsApp Image 2026-09-17 at 18.23.38.jpeg",
    tags: ["No Minimums", "Bulk Discount", "NYC Workshop", "Fast Shipping"],
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Submit Quote Request",
    description:
      "Provide your vector artwork or logo, select your target garment silhouettes, quantities, and preferred decoration technique.",
  },
  {
    step: "02",
    title: "Digital Proof & Approval",
    description:
      "Our digitizers prepare detailed stitch/print mockups showing exact sizing, placement, thread colors, and garment specs.",
  },
  {
    step: "03",
    title: "Workshop Production",
    description:
      "Your order is decorated in our Bay Shore, NY workshop using high-speed multi-head machinery and premium inks/threads.",
  },
  {
    step: "04",
    title: "Inspection & Delivery",
    description:
      "Every finished piece undergoes strict quality inspection, custom finishing, fold & polybag, and expedited shipping.",
  },
];

export default function CustomApparelPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#121212] font-sans">
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        {/* 1. Restrained Editorial Header Banner */}
        <section className="w-full bg-[#121212] text-[#FAF9F6] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium border-l border-[#C5A059]/40 pl-3">
              <span>Fabby Stitch Workshop</span>
              <span>•</span>
              <span>Bay Shore, New York</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-light uppercase tracking-tight text-white leading-tight">
              Services & <span className="font-semibold text-white">Custom Apparel</span>
            </h1>
            <p className="max-w-3xl text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
              Full-service apparel customization and B2B manufacturing. From high-density 3D puff embroidery and direct screen printing to custom relabeling and corporate uniform programs with no minimum order limits.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/custom-quote"
                className="px-8 py-3.5 bg-[#FAF9F6] text-[#121212] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-xl"
              >
                Get Custom Quote →
              </Link>
              <a
                href="https://fabbystitch.com/wp-content/uploads/2025/11/FabbyStitch-Catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-transparent border border-white/30 text-white text-xs uppercase tracking-[0.2em] font-semibold hover:border-white transition-all duration-300"
              >
                Download Brochure PDF
              </a>
            </div>
          </div>
        </section>

        {/* 2. Core Capabilities Grid */}
        <section className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-2 border-b border-[#E4E4E7] pb-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              Workshop Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-tight text-[#121212]">
              Decoration & <span className="font-semibold">Manufacturing Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_CAPABILITIES.map((cap) => (
              <div
                key={cap.number}
                className="group relative flex flex-col justify-between bg-white border border-[#E4E4E7] overflow-hidden transition-all duration-300 hover:border-zinc-400 hover:shadow-xl"
              >
                {/* Visual Image */}
                <div className="relative w-full aspect-[16/10] bg-zinc-900 overflow-hidden">
                  <Image
                    src={cap.imageSrc}
                    alt={cap.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-[#121212]/90 backdrop-blur-md text-[#FAF9F6] text-[10px] font-mono font-bold border border-white/10">
                    {cap.number}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-medium block">
                      {cap.subtitle}
                    </span>
                    <h3 className="text-lg font-semibold uppercase tracking-tight text-[#121212] group-hover:text-[#C5A059] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-zinc-600 font-normal leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="pt-4 border-t border-[#E4E4E7]/60 flex flex-wrap gap-1.5">
                    {cap.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-zinc-100 text-zinc-600 text-[9px] uppercase tracking-wider font-semibold border border-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. NYC Workshop Standard Highlights */}
        <section className="w-full bg-white border-y border-[#E4E4E7] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
                Why Fabby Stitch
              </span>
              <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-tight text-[#121212]">
                Direct Workshop <span className="font-semibold">Advantage</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  title: "No Minimum Orders",
                  desc: "Order 1 custom embroidered piece or 1,000+ unit corporate runs with equal dedication.",
                },
                {
                  title: "High-Density Embroidery",
                  desc: "3D puff and flat embroidery using Japanese multi-head machines for crisp thread density.",
                },
                {
                  title: "Heavyweight Blanks",
                  desc: "Direct access to 220 GSM combed cotton tees and 400 GSM heavyweight fleece hoodies.",
                },
                {
                  title: "Fast NY Turnaround",
                  desc: "Local Bay Shore, NY production ensures swift proofing, sampling, and shipping.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#FAF9F6] border border-zinc-200 p-6 space-y-2 text-center">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#121212]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Production Workflow Steps */}
        <section className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-2 border-b border-[#E4E4E7] pb-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              Simple 4-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-tight text-[#121212]">
              How Your Order <span className="font-semibold">Gets Made</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-[#E4E4E7] p-8 space-y-4 relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-3xl font-mono font-bold text-[#C5A059]">
                    {step.step}
                  </span>
                  <h3 className="text-base font-semibold uppercase tracking-wider text-[#121212]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-600 font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Bottom CTA Section */}
        <section className="bg-[#121212] text-[#FAF9F6] py-20 px-4 sm:px-6 lg:px-8 text-center border-t border-zinc-800">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
              Ready To Start Production?
            </span>
            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-white">
              Request Your <span className="font-semibold text-white">Custom Quote</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-normal leading-relaxed">
              Upload your artwork or describe your custom apparel project. Our New York team responds with pricing and digital proofs within 24 hours.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <Link
                href="/custom-quote"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#FAF9F6] text-[#121212] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-xl"
              >
                Submit Custom Quote →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
