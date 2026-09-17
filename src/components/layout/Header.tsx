import Link from "next/link";
import Image from "next/image";
import DesktopNav from "./DesktopNav";
import MobileMenuDrawer from "./MobileMenuDrawer";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E4E4E7] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left / Logo Section */}
        <div className="flex items-center gap-8">
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/images/favvy-stitch-logo.webp"
              alt="Fabby Stitch — Bespoke & Custom Apparel Workshop NYC"
              width={160}
              height={160}
              className="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </Link>
          
          {/* Main Desktop Navigation */}
          <DesktopNav />
        </div>

        {/* Right Section: Utilities & Compact Custom Quote CTA */}
        <div className="flex items-center gap-5 sm:gap-6">
          
          {/* Compact Editorial Custom Quote CTA (Desktop) */}
          <Link
            href="/custom-quote"
            className="hidden sm:inline-flex items-center justify-center text-xs uppercase tracking-widest font-semibold text-[#121212] border border-[#121212] px-4 py-2 hover:bg-[#121212] hover:text-[#FAF9F6] transition-all duration-200"
          >
            Get Custom Quote
          </Link>

          {/* Icon Utilities (Search, Account, Cart) */}
          <div className="flex items-center gap-3 sm:gap-4 text-[#121212]">
            {/* Search Button */}
            <button
              aria-label="Search items"
              className="p-1.5 hover:text-[#C5A059] transition-colors focus:outline-none"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>

            {/* Account Link */}
            <Link
              href="/custom-quote"
              aria-label="User Account"
              className="hidden sm:block p-1.5 hover:text-[#C5A059] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </Link>

            {/* Cart Link */}
            <Link
              href="/collections"
              aria-label="Shopping Cart"
              className="relative p-1.5 hover:text-[#C5A059] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.25 10.5a.75.75 0 100-1.5.75.75 0 000 1.5zm7.5 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
                />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#121212] text-[#FAF9F6] text-[10px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu Drawer Component */}
            <MobileMenuDrawer />
          </div>
        </div>

      </div>
    </header>
  );
}
