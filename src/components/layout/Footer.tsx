import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/company";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF9F6] text-[#121212] border-t border-[#E4E4E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-[#E4E4E7]">
          
          {/* Col 1: Logo & Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="inline-block group">
              <Image
                src="/images/favvy-stitch-logo.webp"
                alt="Fabby Stitch — Priority on Quality"
                width={160}
                height={160}
                className="h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Graphic streetwear t-shirts, heavyweight hoodies, custom embroidery, and screen printing with direct workshop pricing.
            </p>
            <span className="text-[10px] tracking-[0.2em] text-[#C5A059] uppercase font-semibold block">
              {COMPANY_INFO.name} • {COMPANY_INFO.tagline}
            </span>
          </div>

          {/* Col 2: Products & Collections */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#121212]">
              Products
            </h3>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li>
                <Link href="/collections/t-shirts" className="hover:text-[#C5A059] transition-colors">
                  T-Shirt ($23.95)
                </Link>
              </li>
              <li>
                <Link href="/collections/hoodies" className="hover:text-[#C5A059] transition-colors">
                  Hoodie ($34.95)
                </Link>
              </li>
              <li>
                <Link href="/collections/polos" className="hover:text-[#C5A059] transition-colors">
                  Polo Shirt
                </Link>
              </li>
              <li>
                <Link href="/collections/sweatshirts" className="hover:text-[#C5A059] transition-colors">
                  Sweat Shirt
                </Link>
              </li>
              <li>
                <Link href="/collections/caps" className="hover:text-[#C5A059] transition-colors">
                  Cap & Headwear
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Help & Policies */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#121212]">
              Help & Policies
            </h3>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li>
                <a href="https://fabbystitch.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://fabbystitch.com/refund_returns/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                  Refund & Returns Policy
                </a>
              </li>
              <li>
                <a href="https://fabbystitch.com/shipping/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="https://fabbystitch.com/terms-of-service/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#C5A059] transition-colors">
                  Frequently Asked Questions (FAQ)
                </Link>
              </li>
              <li>
                <a href={COMPANY_INFO.catalogPdf} target="_blank" rel="noopener noreferrer" className="text-[#C5A059] font-medium hover:underline">
                  Download Brochure (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Workshop Location */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#121212]">
              Contact Us
            </h3>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-[#121212]">Address:</span>
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li>
                <span className="font-semibold text-[#121212]">Email:</span>{" "}
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#C5A059] transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li>
                <span className="font-semibold text-[#121212]">Phone:</span>{" "}
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#C5A059] transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about-us" className="hover:text-zinc-800 transition-colors">About Us</Link>
            <Link href="/custom-quote" className="hover:text-zinc-800 transition-colors">Get Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
