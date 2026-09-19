import type { Metadata } from "next";
import CategoryCustomizationView from "@/components/collections/CategoryCustomizationView";

export const metadata: Metadata = {
  title: "Custom Cap & Headwear | Fabby Stitch NYC",
  description: "Share your design requirement for custom Caps with Fabby Stitch NYC. Structured 6-panel hats, 3D puff embroidery, woven patches, and low minimums.",
};

export default function CapPage() {
  return (
    <CategoryCustomizationView
      categorySlug="caps"
      categoryTitle="Cap"
      eyebrow="Custom Headwear & Hats"
      subtitle="Structured & Snapback Caps"
      description="Premium 6-panel structured caps, snapbacks, and dad hats customized with 3D puff embroidery and woven logo patches."
      imageSrc="/images/customization/cap-graphic.jpg"
      imageAlt="Fabby Stitch Custom Cap Design Requirement"
      specs={[
        { label: "Material", value: "100% Premium Cotton Twill" },
        { label: "Structure", value: "6-Panel Structured Crown" },
        { label: "Customization", value: "3D Puff Embroidery & Woven Patch" },
        { label: "Closure", value: "Adjustable Buckle / Snapback" },
      ]}
    />
  );
}
