import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const dummyProducts = [
  {
    id: 1,
    title: "ID CARD",
    subtitle: "KARTU IDENTITAS",
    description: [
      "Ukuran 9x5.5cm",
      "Kertas Art Carton 260gsm",
      "Bisa laminasi doff/glossy",
    ],
    image: "/src/assets/Kartu Identitas.jpg",
  },
  {
    id: 2,
    title: "Kartu Nama",
    subtitle: "KARTU BISNIS",
    description: [
      "Ukuran 9x5.5cm",
      "Kertas Art Carton 260gsm",
      "Bisa laminasi doff/glossy",
    ],
    image: "/src/assets/Kartu_2.png",
  },
];

export default function Home() {
  return (
    <div className="pt-4 px-4 max-w-7xl mx-auto space-y-12">
      {dummyProducts.map((product) => (
        <div
          key={product.id}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Kiri: Deskripsi */}
          <div className="border border-dotted border-gray-400 p-6 h-64">
            <h2 className="text-xl font-semibold mb-2">
              <span className="text-yellow-600 font-bold">{product.title}</span> | {product.subtitle}
            </h2>
            <div className="text-gray-700 leading-relaxed text-sm mb-6 space-y-1">
              {product.description.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <button className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition">
              Pesan Sekarang
            </button>
          </div>

          {/* Kanan: Gambar */}
          <div className="border p-6 flex items-center justify-center h-64">
            <img
              src={product.image}
              alt={product.title}
              className="h-full max-w-full object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}