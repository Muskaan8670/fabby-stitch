import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import CustomServicesSection from "@/components/home/CustomServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ValuePropositionSection from "@/components/home/ValuePropositionSection";

export default function OnlineRetailHomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#121212]">
      {/* Top Notification Announcement */}
      <AnnouncementBar />

      {/* Main Editorial Header Navigation */}
      <Header />

      {/* Main Homepage Flow */}
      <main className="flex-1">
        {/* Stage 1: Hero Section */}
        <HeroSection />

        {/* Stage 2: Product Category Showcase (T-Shirt, Hoodie, Polo, Sweatshirt, Cap) */}
        <CategoryShowcase />

        {/* Stage 3: Fabby Stitch Original Bestsellers ($23.95 Tees & $34.95 Hoodies) */}
        <FeaturedProductsSection />

        {/* Stage 4: Customize Your Look (Custom Embroidery & Screen Printing) */}
        <CustomServicesSection />

        {/* Stage 5: Customer Reviews & Testimonials */}
        <TestimonialsSection />

        {/* Stage 6: Workshop Location & Value Props */}
        <ValuePropositionSection />
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
