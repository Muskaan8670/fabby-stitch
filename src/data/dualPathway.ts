export interface PathwayCard {
  id: string;
  categoryLabel: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
}

export const DUAL_PATHWAYS: PathwayCard[] = [
  {
    id: "online-retail",
    categoryLabel: "Auto 10% Off First Order",
    title: "Online Retail",
    description:
      "Explore graphic streetwear t-shirts, heavyweight hoodies, sweatshirts, and caps crafted with NYC urban heritage and direct workshop quality.",
    ctaText: "Enter Site • Shop Collection",
    ctaHref: "/collections",
    imageSrc: "/images/pathway-essentials-editorial.jpg",
    imageAlt: "Fabby Stitch Online Retail Streetwear Apparel",
  },
  {
    id: "corporate-custom",
    categoryLabel: "Screen Printing & Embroidery",
    title: "Corporate & Custom",
    description:
      "Custom apparel manufacturing, high-density embroidery, and direct screen printing for corporate teams, uniforms, and custom orders with direct workshop pricing.",
    ctaText: "Enter Site • Get Custom Quote",
    ctaHref: "/custom-quote",
    imageSrc: "/images/pathway-custom-editorial.jpg",
    imageAlt: "Fabby Stitch Corporate and Custom Apparel Services",
  },
];
