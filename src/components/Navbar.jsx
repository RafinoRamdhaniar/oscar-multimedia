import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="bg-[#E8B535] shadow-md fixed w-full top-0 z-50 h-20">
      <div className="w-full h-full flex flex-col md:flex-row items-center md:justify-between py-2 px-[5%] gap-y-2">

        {/* Teks berjalan */}
        <div className="w-full md:max-w-[60%] overflow-hidden whitespace-nowrap">
          <h1 className="text-sm md:text-base text-black leading-snug text-center md:text-left animate-marquee inline-block">
            Selamat Datang di <span className="font-bold">Oscar Multimedia</span> Ungaran, mau cetak apa saja bisa
          </h1>
        </div>

        {/* Link navigasi */}
        <div className="flex md:max-w-[40%] items-center justify-center md:justify-end gap-x-4 md:gap-x-6">
          <Link to="/" className="text-black hover:text-gray-500 text-xl flex items-center">
            <FaHome />
          </Link>
          <Link to="/profile" className="font-medium hover:text-gray-500 text-black text-sm md:text-base pt-1">Profile</Link>
          <Link to="/contact" className="font-medium hover:text-gray-500 text-black text-sm md:text-base pt-1">Alamat & Contact</Link>
        </div>
      </div>
    </nav>
  );
}