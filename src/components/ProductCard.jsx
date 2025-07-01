import { getImageUrl } from '../utils/getImageUrl';

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 border border-gray-200">
      <div className="w-full h-64 mb-4 flex items-center justify-center">
        <img
          src={getImageUrl(product.image)}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{product.title}</h3>
      <p className="text-md text-gray-500">{product.subtitle}</p>
    </div>
  );
}
