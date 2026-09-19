import type { Metadata } from "next";
import CategoryCustomizationView from "@/components/collections/CategoryCustomizationView";

export const metadata: Metadata = {
  title: "Custom Sweat Shirt | Fabby Stitch NYC",
  description: "Share your design requirement for custom Sweat Shirts with Fabby Stitch NYC. Heavyweight fleece, embroidery, screen printing, and fast turnaround.",
};

export default function SweatShirtPage() {
  return (
    <CategoryCustomizationView
      categorySlug="sweatshirts"
      categoryTitle="Sweat Shirt"
      eyebrow="Custom Heavyweight Fleece"
      subtitle="Premium Crewneck Sweatshirts"
      description="Explore heavyweight fleece crewneck sweatshirts crafted for warmth, durability, screen printing, and custom embroidery."
      imageSrc="/images/customization/sweatshirt-graphic.jpg"
      imageAlt="Fabby Stitch Custom Sweatshirt Design Requirement"
      specs={[
        { label: "Fabric Blend", value: "100% Cotton Fleece Blend" },
        { label: "Fabric Weight", value: "350+ GSM Heavyweight" },
        { label: "Customization", value: "Screen Print & 3D Puff Print" },
        { label: "Stitching", value: "Double-Needle Reinforced" },
      ]}
    />
  );
}
