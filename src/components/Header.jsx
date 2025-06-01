import React, { Component } from 'react'
import logo from '../assets/Logo Oscar old.png'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom"; // pastikan sudah di-import

export default function Header(){
    return (
    <div className="pt-18 pb-6 bg-white shadow-sm">
      <div className="w-full px-[5%] flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex-[1] flex justify-start">
          <Link to="/">
            <img src={logo} alt="Oscar Multimedia" className="h-16 object-contain cursor-pointer" />
          </Link>
        </div>

        {/* Search Box */}
        <div className="relative flex-[3] w-full">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Mau cetak apa?"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-inner focus:outline-none"
          />
        </div>

        {/* Dropdown Kategori Produk */}
        <div className="flex-[1] flex justify-end w-full md:w-auto">
          <select
            className="text-sm md:text-base px-3 py-2 focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>Kategori Produk</option>
            <option value="brosur">Brosur</option>
            <option value="kartu-nama">Kartu Nama</option>
            <option value="stiker">Stiker</option>
            <option value="banner">Banner</option>
            <option value="undangan">Undangan</option>
            <option value="custom">Cetak Custom</option>
          </select>
        </div>
      </div>
    </div>
    )
  }
