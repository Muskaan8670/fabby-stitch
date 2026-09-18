export interface CategoryItem {
  id: string;
  slug: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  featured?: boolean;
}

export const CATEGORIES: CategoryItem[] = [
  {
    id: "tshirts",
    slug: "t-shirts",
    number: "01",
    name: "T-Shirt",
    subtitle: "Graphic & Essential Streetwear • 100% Combed Cotton",
    description: "High-density 100% combed cotton graphic and blank tees featuring iconic NYC graphic prints and relaxed fits.",
    href: "/collections/t-shirts",
    imageSrc: "/images/newImages/WhatsApp Image 2026-09-17 at 18.23.39 (1).jpeg",
    imageAlt: "Fabby Stitch T-Shirts Collection",
    featured: true,
  },
  {
    id: "hoodies",
    slug: "hoodies",
    number: "02",
    name: "Hoodie",
    subtitle: "Heavyweight Fleece & Pullovers • Premium Quality",
    description: "Ultra-heavyweight fleece pullovers and zip hoodies with custom graphic prints, double-walled hoods, and ribbed cuffs.",
    href: "/collections/hoodies",
    imageSrc: "/images/newImages/WhatsApp Image 2026-09-17 at 18.23.38.jpeg",
    imageAlt: "Fabby Stitch Hoodies Collection",
    featured: true,
  },
  {
    id: "polos",
    slug: "polos",
    number: "03",
    name: "Polo Shirt",
    subtitle: "Pique Knit & Corporate Uniforms",
    description: "Refined pique knit polos engineered for corporate branding, custom embroidery, and team apparel.",
    href: "/collections/polos",
    imageSrc: "/images/newImages/WhatsApp Image 2026-09-17 at 18.21.12.jpeg",
    imageAlt: "Fabby Stitch Polo Shirts Collection",
  },
  {
    id: "sweatshirts",
    slug: "sweatshirts",
    number: "04",
    name: "Sweat Shirt",
    subtitle: "Classic Crewneck Fleece & Comfort",
    description: "Soft fleece crewneck sweatshirts designed for layered streetwear style and direct workshop customization.",
    href: "/collections/sweatshirts",
    imageSrc: "/images/newImages/WhatsApp Image 2026-09-17 at 18.25.04 (3).jpeg",
    imageAlt: "Fabby Stitch Sweatshirts Collection",
  },
  {
    id: "longsleeves",
    slug: "long-sleeves",
    number: "05",
    name: "Long Sleeve T-shirt",
    subtitle: "Layered Cotton & Year-Round Apparel",
    description: "Premium long sleeve cotton t-shirts ideal for custom screen printing and seasonal wardrobe essentials.",
    href: "/collections/t-shirts",
    imageSrc: "/images/newImages/WhatsApp Image 2026-09-17 at 18.30.06.jpeg",
    imageAlt: "Fabby Stitch Long Sleeve T-shirts Collection",
  },
  {
    id: "caps",
    slug: "caps",
    number: "06",
    name: "Cap",
    subtitle: "Structured 6-Panel & Embroidered Headwear",
    description: "Structured cotton twill caps and dad hats crafted for high-density 3D puff and custom embroidery.",
    href: "/collections/caps",
    imageSrc: "/images/newImages/WhatsApp Image 2026-09-17 at 18.21.12.jpeg",
    imageAlt: "Fabby Stitch Headwear Collection",
  },
];
