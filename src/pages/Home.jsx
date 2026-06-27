import React, { useState } from 'react';
import Header from '../components/header/header';
import Footer from '../components/Footer';
import Texadrel from '../components/Texadrel';
import SidebarFilter from '../components/SidebarFilter';
import { housData } from "../components/HousData";
import { useFavoritesStore } from "../components/useFavoritesStore";
import { Link } from 'react-router-dom';

export default function Home() {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  // 1. State ընտրված տարածաշրջանների համար
  const [selectedLocations, setSelectedLocations] = useState([]);

  // 2. Ֆունկցիա checkbox-ների համար
  const handleLocationChange = (locationName) => {
    if (selectedLocations.includes(locationName)) {
      setSelectedLocations(selectedLocations.filter(loc => loc !== locationName));
    } else {
      setSelectedLocations([...selectedLocations, locationName]);
    }
  };

  const renderHeartButton = (houseId) => {
    const isFavorite = favorites.includes(houseId);
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite(houseId);
        }}
        className="absolute top-[15px] right-[15px] bg-white/90 backdrop-blur-[4px] border-none rounded-full w-[38px] h-[38px] cursor-pointer flex items-center justify-center z-10 shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isFavorite ? "rgb(239, 68, 68)" : "none"} 
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke={isFavorite ? "rgb(239, 68, 68)" : "#4b5563"}
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      </button>
    );
  };

  // 🟢 3. ՏՐԱՄԱԲԱՆՈՒԹՅՈՒՆԸ.
  // Այս տները (1-ից 12-ը) սկզբնական տներն են, որոնք ՄԻՇՏ պետք է երևան գլխավոր էջում
  const defaultHouses = housData.filter(h => h.id >= 1 && h.id <= 12);
  
  // Մնացած բոլոր նոր տները (id > 12), որոնք պետք է երևան ՄԻԱՅՆ ֆիլտրելիս
  const extraHouses = housData.filter(h => h.id > 12);

  // 🟢 4. ԽԵԼԱՑԻ ՖԻԼՏՐՈՒՄ
  const filteredHouses = housData.filter(house => {
    // Եթե ոչ մի քաղաք ընտրված չէ
    if (!selectedLocations || selectedLocations.length === 0) {
      // Թույլ ենք տալիս երևալ միայն սկզբնական (1-12) տներին
      return house.id >= 1 && house.id <= 12;
    }
    // Եթե քաղաք ընտրված է, ցույց ենք տալիս ԱՄԲՈՂՋ մասսիվից (թե՛ հին, թե՛ նոր) այդ քաղաքի տները
    return selectedLocations.includes(house.location);
  });

  return (
    <div className="font-sans text-[#101623] bg-white min-h-screen">
      <Header />
      
      <div className="flex relative inset-x-0 left-[50px] max-[1299px]:flex-col max-w-[1440px] mx-auto px-4 md:px-[70px] gap-8 mt-6 w-full">  
        
        <SidebarFilter 
          selectedLocations={selectedLocations} 
          onLocationChange={handleLocationChange} 
        />

        <div className="flex-1 flex flex-col w-full">
                  
          <div className="flex justify-between items-start border-b border-[#101623]/20 pb-4 w-full">
            <div className="flex gap-[10px]">
              <button className="w-[120px] h-[35px] border border-black rounded-[50px] bg-white hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                Քարտեզ <i className="fa-regular fa-map"></i>
              </button>
              <button className="w-[35px] h-[35px] border border-black rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                <i className="fa-regular fa-calendar"></i>
              </button>
            </div>
          </div>

          {/* Կատեգորիաների սլայդեր */}
          <div className="flex text-center gap-5 overflow-x-auto pb-2 w-full mt-4">
            <div className="text-[12px] cursor-pointer min-w-[75px]"><img src="https://api.amaranoc.am/home.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Առանձնատներ</div>
            <div className="text-[12px] cursor-pointer min-w-[75px]"><img src="https://api.amaranoc.am/frame_house.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Frame houses</div>
            <div className="text-[12px] cursor-pointer min-w-[75px]"><img src="https://api.amaranoc.am/cabins.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Տնակներ</div>
            <div className="text-[12px] cursor-pointer min-w-[75px]"><img src="https://api.amaranoc.am/close_pool.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Փակ լողավազան</div>
            <div className="text-[12px] cursor-pointer min-w-[75px]"><img src="https://api.amaranoc.am/far_from_noise.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Աղմուկից հեռու</div>
            <div className="text-[12px] cursor-pointer min-w-[75px]"><img src="https://api.amaranoc.am/view.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Շքեղ տեսարան</div>
            <div className="text-[12px] cursor-pointer min-w-[75px]"><img src="https://api.amaranoc.am/nobel.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Պահանջված</div>
          </div>

          <div className="h-[50px] my-6 flex items-center border-y border-[#101623]/20 py-2 w-full">
            <h4 className="font-bold text-[16px]">Լավագույն առաջարկներ</h4>
          </div>
          
          {/* Տների Grid ցուցակ */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8 mb-12">
            {filteredHouses.map((house) => (
              <Link 
                to={`/property/${house.id}`} 
                target="_blank" 
                key={house.id} 
                className="w-full relative flex flex-col bg-white rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 block"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={house.image} 
                    alt={house.location} 
                    className="w-[1000px] h-[300px] object-cover transition-transform duration-500 hover:scale-105" 
                  />
                  {renderHeartButton(house.id)}
                </div>
                <div className="p-4 flex flex-col justify-between flex-1 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <img src="location-filled.svg" className="w-5 h-5 object-contain" alt="location" />
                      <p className="text-[15px] font-semibold text-gray-800">{house.location}</p>
                    </div>
                    <div className="flex items-center gap-1 text-orange-500 text-sm font-bold bg-orange-50 px-2 py-0.5 rounded-[6px]">
                      <i className="fa-solid fa-people-line"></i> {house.guests}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100 text-[17px] font-bold text-gray-900">
                    <img src="https://amaranoc.am/images/price.svg" className="w-5 h-5 object-contain" alt="price" />
                    <span>{house.price?.toLocaleString()} ֏</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredHouses.length === 0 && (
            <div className="text-center py-12 text-gray-400 font-medium">
              Այս տարածաշրջանում համապատասխան տուն չգտնվեց:
            </div>
          )}

        </div>
      </div>
      
      <Texadrel />
      <Footer />
    </div>
  );
}