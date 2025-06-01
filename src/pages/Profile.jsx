import logo from "../assets/Logo Oscar old.png";

export default function Profile() {
  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto text-center space-y-8">
      {/* Logo */}
      <div className="flex justify-center">
        <img
          src={logo}
          alt="Logo Oscar Multimedia"
          className="h-24 md:h-32 object-contain"
        />
      </div>

      {/* Judul */}
      <h2 className="text-3xl font-bold text-yellow-600">Oscar Multimedia Ungaran</h2>

      {/* Deskripsi */}
      <div className="text-gray-700 space-y-4 text-justify leading-relaxed">
        <p>
          Oscar Multimedia adalah usaha percetakan yang telah berdiri sejak tahun 2020 di kota Ungaran. Kami melayani berbagai kebutuhan cetak seperti kartu nama, brosur, banner, undangan, stiker, ID card, dan layanan cetak custom lainnya.
        </p>
        <p>
          Dengan mengutamakan kualitas dan kepuasan pelanggan, kami menggunakan mesin cetak modern serta bahan-bahan terbaik untuk setiap produk. Tim kami siap membantu Anda dari desain hingga proses cetak.
        </p>
        <p>
          Tidak hanya melayani perseorangan, Oscar Multimedia juga menjadi mitra terpercaya untuk perusahaan, sekolah, dan instansi dalam memenuhi kebutuhan cetak skala besar maupun kecil.
        </p>
        <p>
          Kunjungi kami langsung di Ungaran atau hubungi kami melalui WhatsApp untuk berkonsultasi dan melakukan pemesanan dengan cepat dan mudah.
        </p>
      </div>
    </div>
  );
}
