import ProductCard from './ProductCard';
import { useState } from 'react';

export default function ProductGrid({ products, initialVisible = 3 }) {
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  const handleShowAll = () => setVisibleCount(products.length);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="mt-6 text-center">
          <button
            onClick={handleShowAll}
            className="px-6 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition"
          >
            Lihat Semua
          </button>
        </div>
      )}
    </div>
  );
}
