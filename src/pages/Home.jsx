import ProductCard from "../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

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
    image: "/src/assets/Kartu_2.png",
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
    <>
      <style>{`
        /* Override warna panah menjadi abu-abu */
        .swiper-button-next,
        .swiper-button-prev {
          color: #888888; /* abu-abu */
          font-size: 16px; /* perkecil ukuran panah */
          width: 16px;
          height: 16px;
        }
        /* Bisa kasih hover effect biar lebih jelas */
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: #555555;
        }
      `}</style>

      <div className="pt-4 px-[5%] w-full space-y-12">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop={true} // aktifkan loop
          autoplay={{
            delay: 5000, // 3 detik per slide
            disableOnInteraction: false, // auto slide tetap jalan meski user interaksi
          }}
          modules={[Navigation, Autoplay]}
          className="w-full px-6"
        >
          {dummyProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-8">
                {/* Kiri: Deskripsi */}
                <div className="flex-1 border border-dotted border-gray-400 p-6 h-64">
                  <h2 className="text-2xl font-semibold mb-4">
                    <span className="text-yellow-600 font-bold">{product.title}</span> | {product.subtitle}
                  </h2>
                  <div className="text-gray-700 leading-relaxed text-sm mb-6 space-y-1">
                    {product.description.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/628112890087?text=${encodeURIComponent(
                      `Halo, saya ingin memesan produk berikut:\n\n` +
                      `Nama Produk: ${product.title} | ${product.subtitle}\n` +
                      `Deskripsi Produk: `
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition"
                  >
                    Pesan Sekarang
                  </a>
                </div>

                {/* Kanan: Gambar */}
                <div className="flex-1 flex justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-64 h-64 w-auto object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
