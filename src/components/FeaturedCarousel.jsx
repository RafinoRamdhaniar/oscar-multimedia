// src/components/FeaturedCarousel.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Kita tetap butuh helper ini untuk mengambil gambar dari src/assets
import { getImageUrl } from '../utils/getImageUrl';

// Ini adalah komponen Tampilan untuk satu slide.
// Layout di dalamnya sekarang meniru persis kode Home.jsx awal Anda.
function FeaturedProductDisplay({ product }) {
  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-8">
      {/* Kiri: Deskripsi */}
      <div className="flex-1 border border-dotted border-gray-400 p-6 h-64 flex flex-col">
        <h2 className="text-2xl font-semibold mb-4">
          <span className="text-yellow-600 font-bold">{product.title}</span> | {product.subtitle}
        </h2>
        <div className="text-gray-700 leading-relaxed text-sm mb-6 space-y-1">
          {product.description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div className="mt-auto"> {/* Mendorong tombol ke bawah */}
            <a
            href={`https://wa.me/628112890087?text=${encodeURIComponent(
                `Halo, saya ingin memesan produk berikut:\n\n` +
                `Nama Produk: ${product.title} | ${product.subtitle}\n`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition"
            >
            Pesan Sekarang
            </a>
        </div>
      </div>

      {/* Kanan: Gambar */}
      <div className="flex-1 flex justify-center">
        <img
          src={getImageUrl(product.image)} // Menggunakan getImageUrl
          alt={product.title}
          className="max-h-64 h-64 w-auto object-contain"
        />
      </div>
    </div>
  );
}

// Ini adalah komponen Carousel utamanya
export default function FeaturedCarousel({ products }) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="w-full">
      {/* Style untuk panah navigasi kita pindahkan ke sini agar rapi */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #888888; /* abu-abu */
          font-size: 16px;
          width: 16px;
          height: 16px;
          transform: translateY(-20px); /* Sedikit naik agar pas di tengah area putih */
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: #555555;
        }
      `}</style>
      
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="w-full px-6"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <FeaturedProductDisplay product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}