import { Link } from "react-router-dom";
import "./Navbar.css";


export default function Navbar(){
    return (
    <nav className="bg-[#E8B535] shadow-md fixed w-full top-0 z-50 h-20">
      <div className="max-w-7xl mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between space-y-1 md:space-y-0 py-2">
        
        {/* Teks berjalan */}
        <div className="w-full md:max-w-[70%] overflow-hidden whitespace-nowrap">
          <h1 className="text-base text-black md:text-xl leading-snug text-center md:text-left animate-marquee inline-block">
            Selamat Datang di <span className="font-bold">Oscar Multimedia</span> Ungaran, mau cetak apa saja bisa
          </h1>
        </div>

        {/* Link navigasi */}
        <div className="w-full md:w-auto text-sm md:text-base space-x-4 md:space-x-6 flex justify-center md:justify-end">
          <Link to="/" className="hover:text-gray-500 text-black">Home</Link>
          <Link to="/profile" className="hover:text-gray-500 text-black">Profile</Link>
          <Link to="/contact" className="hover:text-gray-500 text-black">Alamat & Contact</Link>
        </div>
      </div>
    </nav>
    )
}