export default function Contact() {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Hubungi Kami</h2>

      <div className="space-y-6 text-left">
        {/* Alamat */}
        <div className="flex items-start p-4 rounded-2xl shadow bg-white space-x-4 hover:scale-[1.02] transition-transform">
          <span className="text-2xl mt-1">📍</span>
          <div>
            <p className="font-semibold text-lg">Alamat</p>
            <p>Jl. Bukit Leyangan Indah IV No. 294...</p>
            <p>
              Maps: <a href="https://maps.app.goo.gl/YtqGkYRvm8Gt4WXS6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Oscar Multimedia</a>
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start p-4 rounded-2xl shadow bg-white space-x-4 hover:scale-[1.02] transition-transform">
          <span className="text-2xl mt-1">📧</span>
          <div>
            <p className="font-semibold text-lg">Email</p>
            <p>oscarmultimedia.new@gmail.com</p>
          </div>
        </div>

        {/* Sosial Media */}
        <div className="flex items-start p-4 rounded-2xl shadow bg-white space-x-4 hover:scale-[1.02] transition-transform">
          <span className="text-2xl mt-1">📱</span>
          <div>
            <p className="font-semibold text-lg">Sosial Media</p>
            <p>
              Whatsapp: <a href="https://wa.me/message/5H5HU5R4NEDCK1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Oscar Multimedia</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
