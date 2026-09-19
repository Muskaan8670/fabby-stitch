import type { Metadata } from "next";
import CategoryCustomizationView from "@/components/collections/CategoryCustomizationView";

export const metadata: Metadata = {
  title: "Custom Polo Shirt | Fabby Stitch NYC",
  description: "Share your design requirement for custom Polo Shirts with Fabby Stitch NYC. Premium pique knit polos, embroidery, screen printing, and low minimums.",
};

export default function PoloShirtPage() {
  return (
    <CategoryCustomizationView
      categorySlug="polos"
      categoryTitle="Polo Shirt"
      eyebrow="Custom Apparel & Uniforms"
      subtitle="Pique Knit Polos"
      description="Explore refined Fabby Stitch pique knit polos engineered for corporate branding, team apparel, direct embroidery, and classic daily wear."
      imageSrc="/images/customization/polo-shirt-graphic.jpg"
      imageAlt="Fabby Stitch Custom Polo Shirt Design Requirement"
      specs={[
        { label: "Fabric Blend", value: "Cotton Pique / Poly Blend" },
        { label: "Fabric Weight", value: "200–240 GSM Heavy Weight" },
        { label: "Customization", value: "Embroidery & Patch Printing" },
        { label: "Collar & Cuffs", value: "Ribbed Collar & Cuffs" },
      ]}
    />
  );
}
