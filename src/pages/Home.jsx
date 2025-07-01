// src/pages/Home.jsx

import { productsByCategory } from '../data/products';
import FeaturedCarousel from '../components/FeaturedCarousel';
import ProductGrid from '../components/ProductGrid';

// Ambil produk unggulan dari dua kategori
const featuredProducts = [
  ...productsByCategory.find(cat => cat.slug === 'digital-printing').products.slice(0, 2),
  ...productsByCategory.find(cat => cat.slug === 'desain-grafis').products.slice(0, 1),
];

export default function Home() {
  return (
    <div className="pt-4 px-[5%] w-full space-y-12">

      {/* SEKSI 1: CAROUSEL PRODUK UNGGULAN */}
      <FeaturedCarousel products={featuredProducts} />

      {/* SEKSI 2: PRODUK PER KATEGORI */}
      {productsByCategory.map((category) => (
        <section key={category.slug} className="space-y-4">
          <h2 className="text-3xl font-semibold text-yellow-600">{category.category}</h2>
          <ProductGrid products={category.products} initialVisible={3} />
        </section>
      ))}

    </div>
  );
}
