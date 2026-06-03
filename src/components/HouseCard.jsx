import React from 'react';
// 🟢 1. Ներմուծում ենք Zustand store-ը
import { useFavoritesStore } from './useFavoritesStore';

export default function HouseCard({ house }) {
  // 🟢 2. Ստանում ենք սրտիկների վիճակը և toggle ֆունկցիան
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  
  // Ստուգում ենք՝ արդյոք այս տունը սրտիկված է
  const isFavorite = favorites.includes(house.id);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all duration-300 relative inset-x-0 top-[250px] left-[40px] group cursor-pointer text-left">
      <div className="relative w-full h-[220px] overflow-hidden bg-gray-100">
        <img 
          src={house.image} 
          alt={house.location} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* 🟢 3. Փոխված Սրտիկի Կոճակը */}
        <button 
          onClick={(e) => {
            e.preventDefault(); // Որպեսզի քարտին սեղմելիս այլ էջ չգնա
            toggleFavorite(house.id); // Ավելացնում կամ ջնջում է Zustand-ից
          }}
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-600 hover:bg-white transition-all z-10"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            // 🟢 Եթե հավանած է՝ ներկում ենք կարմիր, եթե ոչ՝ դատարկ ("none")
            fill={isFavorite ? "currentColor" : "none"} 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            // 🟢 Եթե հավանած է՝ եզրագիծը դառնում է կարմիր, եթե ոչ՝ մոխրագույն
            stroke={isFavorite ? "rgb(239, 68, 68)" : "currentColor"} 
            className={`w-4 h-4 transition-transform duration-300 ${isFavorite ? "text-red-500 scale-110" : "text-gray-600"}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </button>
      </div>

      <div className="p-4 flex flex-col flex-grow justify-between gap-3">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-1.5 text-gray-700 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-orange-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span>{house.location}</span>
          </div>
          
          <div className="flex items-center gap-1.5 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <span>{house.guests} հոգի</span>
          </div>
        </div>

        <div className="flex justify-between items-end pt-2 border-t border-gray-100">
          <span className="text-[19px] font-bold text-gray-800">
            {house.price?.toLocaleString()} ֏
          </span>

          {house.rating && (
            <div className="flex items-center gap-1 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
              <span>{house.rating}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}