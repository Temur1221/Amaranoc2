import React from 'react';
// 1. Ներմուծում ենք Zustand store-ը
import { useFavoritesStore } from './useFavoritesStore';

export default function HouseCard({ house }) {
  // 2. Ստանում ենք սրտիկների վիճակը և toggle ֆունկցիան
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  
  // Ստուգում ենք՝ արդյոք այս տունը սրտիկված է
  const isFavorite = favorites ? favorites.includes(house.id) : false;

  return (
    // ՈՒՂՂՎԱԾ Է՝ Հեռացվել են absolute, top, left դասերը, որպեսզի Grid-ը ճիշտ աշխատի
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100/60 flex flex-col group cursor-pointer text-left transition-all duration-300">
      
      {/* Նկարի բաժին */}
      <div className="relative w-full h-[220px] overflow-hidden bg-slate-100">
        <img 
          src={house.image} 
          alt={house.location} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* 3. Սրտիկի Կոճակը */}
        <button 
          onClick={(e) => {
            e.preventDefault(); // Որպեսզի քարտին սեղմելիս այլ էջ չգնա
            e.stopPropagation(); // Կանգնեցնում է event-ի տարածումը
            toggleFavorite(house.id); // Ավելացնում կամ ջնջում է Zustand-ից
          }}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-9 h-9 rounded-full flex items-center justify-center text-gray-600 hover:bg-white shadow-md transition-all z-10"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            // Եթե հավանած է՝ ներկում ենք կարմիր, եթե ոչ՝ դատարկ ("none")
            fill={isFavorite ? "currentColor" : "none"} 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            // Եթե հավանած է՝ եզրագիծը դառնում է կարմիր, եթե ոչ՝ մոխրագույն
            stroke={isFavorite ? "rgb(239, 68, 68)" : "currentColor"} 
            className={`w-5 h-5 transition-transform duration-300 ${isFavorite ? "text-red-500 scale-110" : "text-slate-700"}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </button>
      </div>

      {/* Ինֆորմացիայի բաժին */}
      <div className="p-4 flex flex-col flex-grow justify-between gap-3">
        <div className="flex justify-between items-center text-xs font-bold text-slate-400">
          <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-orange-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span>{house.location}</span>
          </div>
          
          <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md text-[#091124]">
            <span>👤 {house.guests} հոգի</span>
          </div>
        </div>

        <div className="flex justify-between items-end pt-2 border-t border-slate-150/60">
          <span className="text-lg font-extrabold text-[#091124]">
            {house.price} ֏
          </span>
          <span className="text-[11px] text-slate-400 font-medium">արժեքը գիշերակացով</span>
        </div>
      </div>

    </div>
  );
}