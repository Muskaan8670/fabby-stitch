import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CollectionHeader from "@/components/collections/CollectionHeader";
import ProductGrid from "@/components/collections/ProductGrid";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";

export default function JacketsPage() {
  const category = CATEGORIES.find((c) => c.slug === "jackets") || CATEGORIES[3];
  const products = PRODUCTS.filter((p) => p.categorySlug === "jackets");

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#121212]">
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        <CollectionHeader
          eyebrow={`Category ${category.number}`}
          title={category.name}
          description={category.description}
          showBackLink
        />

        <div className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <ProductGrid products={products} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
