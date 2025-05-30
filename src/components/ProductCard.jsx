import React, { Component } from 'react'

export default function ProductCard({ image, title, price }) {
    return (
    <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition w-full">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-orange-600 font-bold">{price}</p>
      </div>
    </div>
    )
}
