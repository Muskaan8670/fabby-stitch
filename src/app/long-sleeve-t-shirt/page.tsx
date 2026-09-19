import type { Metadata } from "next";
import CategoryCustomizationView from "@/components/collections/CategoryCustomizationView";

export const metadata: Metadata = {
  title: "Custom Long Sleeve T-Shirt | Fabby Stitch NYC",
  description: "Share your design requirement for custom Long Sleeve T-Shirts with Fabby Stitch NYC. Heavyweight cotton, sleeve printing, embroidery, and low minimums.",
};

export default function LongSleeveTShirtPage() {
  return (
    <CategoryCustomizationView
      categorySlug="long-sleeves"
      categoryTitle="Long Sleeve T-Shirt"
      eyebrow="Custom Long Sleeve Tees"
      subtitle="Heavyweight Long Sleeves"
      description="Essential heavyweight cotton long sleeve t-shirts built for layering, custom sleeve prints, and premium streetwear branding."
      imageSrc="/images/customization/long-sleeve-graphic.jpg"
      imageAlt="Fabby Stitch Custom Long Sleeve T-Shirt Design Requirement"
      specs={[
        { label: "Fabric Blend", value: "100% Combed Ring-Spun Cotton" },
        { label: "Fabric Weight", value: "220 GSM Medium-Heavy" },
        { label: "Customization", value: "Sleeve & Chest Screen Print" },
        { label: "Cuffs & Neck", value: "Ribbed Cuffs & Collar" },
      ]}
    />
  );
}
