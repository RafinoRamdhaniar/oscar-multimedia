

export default function Contact() {
  return (
    <div className="pt-20 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">Hubungi Kami</h2>

      <div className="text-left space-y-6">
        {/* Alamat */}
        <div className="flex items-start space-x-3">
          <span className="text-xl">📍</span>
          <div>
            <p className="font-semibold">Alamat</p>
            <p>Jl. Raya Ungaran No.123, Ungaran, Kab. Semarang, Jawa Tengah</p>
            Maps: <a href="https://maps.app.goo.gl/YtqGkYRvm8Gt4WXS6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Oscar Multimedia</a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-3">
          <span className="text-xl">✉️</span>
          <div>
            <p className="font-semibold">Email</p>
            <p>oscarmultimedia.new@gmail.com</p>
          </div>
        </div>

        {/* Sosial Media */}
        <div className="flex items-start space-x-3">
          <span className="text-xl">📱</span>
          <div>
            <p className="font-semibold">Sosial Media</p>
            <p>
              Instagram: <a href="https://www.instagram.com/eh.erwinhermawan/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@eh.erwinhermawan</a><br />
              Whatsapp: <a href="https://wa.me/message/5H5HU5R4NEDCK1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Oscar Multimedia</a><br />
              Tiktok: <a href="https://tiktok.com/@mr.dobelklik" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@mr.dobelklik</a><br />
              Telegram: <a href="https://t.me/erwin_dobelklik" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">erwin_dobelklik</a><br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
