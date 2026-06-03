import React from 'react';

export default function SpasarkumCard({ image, title, description, price }) {
  return (
    <div className="w-[360px] bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100  duration-300 ">
      <img src={image} alt={title} className="w-full h-56 object-cover"/>
        <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed h-16 overflow-hidden mb-5">
          {description}
        </p>
          <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900 flex items-center gap-1">
            <span className="text-amber-600">🪙</span> {price} ֏
          </span>
          <button className="px-5 py-2 rounded-full border border-[#b38f4f] text-[#b38f4f] font-semibold text-sm bg-transparent hover:bg-[#b38f4f] hover:text-white transition-colors duration-200">
            Ամրագրել
          </button>
        </div>
      </div>
    </div>
  );
}