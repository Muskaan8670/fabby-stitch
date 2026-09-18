import { NavItem } from "@/types";

export const ANNOUNCEMENT_TEXT =
  "Auto 10% off on your first order • Priority on Quality • Custom Embroidery & Direct Screen Printing";

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/home" },
  { label: "Shop", href: "/shop" },
  { label: "Services", href: "/services" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "T-Shirt", href: "/collections/t-shirts" },
      { label: "Hoodie", href: "/collections/hoodies" },
      { label: "Polo Shirt", href: "/collections/polos" },
      { label: "Sweat Shirt", href: "/collections/sweatshirts" },
      { label: "Long Sleeve T-shirt", href: "/collections/t-shirts" },
      { label: "Cap", href: "/collections/caps" },
    ],
  },
  { label: "Get Quote", href: "/custom-quote" },
  { label: "Contact Us", href: "/contact" },
  {
    label: "Brochure",
    href: "https://fabbystitch.com/wp-content/uploads/2025/11/FabbyStitch-Catalogue.pdf",
    isExternal: true,
    isPill: true,
  },
];

export const MOBILE_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/home" },
  { label: "Shop Retail Catalog", href: "/shop" },
  { label: "T-Shirt", href: "/shop?category=t-shirts" },
  { label: "Hoodie", href: "/shop?category=hoodies" },
  { label: "Polo Shirt", href: "/shop?category=polos" },
  { label: "Sweat Shirt", href: "/shop?category=sweatshirts" },
  { label: "Cap", href: "/shop?category=caps" },
  { label: "Services & Custom Apparel", href: "/custom-apparel" },
  { label: "Get Quote", href: "/custom-quote" },
  { label: "Contact Us", href: "/contact" },
  {
    label: "Download Brochure",
    href: "https://fabbystitch.com/wp-content/uploads/2025/11/FabbyStitch-Catalogue.pdf",
    isExternal: true,
    isPill: true,
  },
];

