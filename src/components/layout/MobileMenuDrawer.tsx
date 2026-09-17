"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MOBILE_NAV_ITEMS } from "@/data/navigation";

export default function MobileMenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        aria-label="Open Navigation Menu"
        className="p-2 text-[#121212] hover:text-[#C5A059] transition-colors focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Slide-over Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#FAF9F6] text-[#121212] transition-all duration-300">
          {/* Drawer Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E4E4E7]">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2"
            >
              <Image
                src="/images/favvy-stitch-logo.webp"
                alt="Fabby Stitch Logo"
                width={120}
                height={120}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <button
              onClick={closeMenu}
              aria-label="Close Navigation Menu"
              className="p-2 text-[#121212] hover:text-[#C5A059] transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold">
                Menu & Services
              </p>
              <nav className="flex flex-col space-y-5">
                {MOBILE_NAV_ITEMS.map((item) => {
                  if (item.isPill) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.isExternal ? "_blank" : undefined}
                        rel={item.isExternal ? "noopener noreferrer" : undefined}
                        onClick={closeMenu}
                        className="inline-flex items-center justify-center text-center py-3 px-4 border-2 border-[#121212] text-[#121212] rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#121212] hover:text-[#FAF9F6] transition-colors"
                      >
                        {item.label}
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between text-base uppercase tracking-wider font-medium text-[#121212] hover:text-[#C5A059] transition-colors border-b border-zinc-200/50 pb-3"
                    >
                      <span>{item.label}</span>
                      {item.badge ? (
                        <span className="text-[10px] tracking-wider text-[#C5A059] bg-[#C5A059]/10 px-2 py-0.5 rounded border border-[#C5A059]/20 font-semibold normal-case">
                          {item.badge}
                        </span>
                      ) : (
                        <span className="text-zinc-400 text-sm">→</span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Drawer Actions */}
            <div className="pt-8 border-t border-[#E4E4E7] space-y-4">
              <Link
                href="/custom-quote"
                onClick={closeMenu}
                className="w-full block text-center py-3 px-4 bg-[#121212] text-[#FAF9F6] text-xs uppercase tracking-widest font-semibold hover:bg-zinc-800 transition-colors"
              >
                Get Custom Quote
              </Link>
              <div className="text-center text-[11px] text-zinc-500 tracking-wider uppercase">
                NYC Tailoring & Custom Apparel
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
