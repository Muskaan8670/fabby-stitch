import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | Fabby Stitch",
      description: "The requested Fabby Stitch product could not be found.",
    };
  }

  return {
    title: `${product.name} - ${product.price} | Fabby Stitch NYC`,
    description: `${product.description || product.subtitle}. Shop authentic Fabby Stitch apparel designed and customized in New York City.`,
    openGraph: {
      title: `${product.name} | Fabby Stitch`,
      description: product.description || product.subtitle,
      images: [
        {
          url: product.imageSrc,
          alt: product.imageAlt,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Related products from same category or fallback to top rated
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.categorySlug === product.categorySlug
  )
    .slice(0, 4);

  // If not enough related products in category, pad with other top products
  if (relatedProducts.length < 4) {
    const extra = PRODUCTS.filter(
      (p) => p.id !== product.id && !relatedProducts.some((r) => r.id === p.id)
    ).slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...extra);
  }

  return (
    <ProductDetailClient
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}
