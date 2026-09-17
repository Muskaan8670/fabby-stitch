import Link from "next/link";
import { MAIN_NAV_ITEMS } from "@/data/navigation";

export default function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-widest font-medium">
      {MAIN_NAV_ITEMS.map((item) => {
        // Render Brochure Pill Button
        if (item.isPill) {
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center px-4 py-1.5 border-2 border-[#121212] text-[#121212] rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#121212] hover:text-[#FAF9F6] shadow-sm"
            >
              {item.label}
            </a>
          );
        }

        // Render Dropdown item (Products)
        if (item.children && item.children.length > 0) {
          return (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className="py-2 text-[#121212] transition-colors duration-200 hover:text-[#C5A059] inline-flex items-center gap-1"
              >
                <span>{item.label}</span>
                <svg
                  className="w-3 h-3 text-zinc-500 group-hover:text-[#C5A059] transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown Menu Overlay */}
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="w-56 bg-[#FAF9F6] border border-zinc-200 shadow-xl py-3 px-1 rounded-sm">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-xs uppercase tracking-wider text-zinc-700 hover:text-[#C5A059] hover:bg-zinc-100/80 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        // Standard Nav Link
        return (
          <Link
            key={item.label}
            href={item.href}
            className="group relative py-1 text-[#121212] transition-colors duration-200 hover:text-[#C5A059]"
          >
            <span>{item.label}</span>
            {item.badge && (
              <span className="ml-1.5 inline-block px-1.5 py-0.5 text-[9px] tracking-wider text-[#C5A059] bg-[#C5A059]/10 rounded border border-[#C5A059]/20 font-semibold normal-case">
                {item.badge}
              </span>
            )}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
          </Link>
        );
      })}
    </nav>
  );
}
