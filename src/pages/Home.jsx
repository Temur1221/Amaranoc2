import React, { useState, useEffect } from 'react';
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

  // Սյունակների քանակի կառավարման state
  const [isThreeColumns, setIsThreeColumns] = useState(true);
  
  // 🟢 Burger Menu-ի և էկրանի չափսի state-եր
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isMobileWidth, setIsMobileWidth] = useState(window.innerWidth < 1354);

  // Հետևում ենք էկրանի չափսին
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1354;
      setIsMobileWidth(mobile);
      if (!mobile) setIsHeaderOpen(false); // Եթե էկրանը մեծանում է, փակում ենք մենյուն
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 🟢 ԲՈԼՈՐ ՖԻԼՏՐԵՐԻ STATE-ԵՐԸ
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [guests, setGuests] = useState(1);
  const [overnight, setOvernight] = useState('Բոլորը'); 
  const [overnightGuests, setOvernightGuests] = useState(0);
  const [rooms, setRooms] = useState('Բոլորը'); 
  const [bathrooms, setBathrooms] = useState('Բոլորը'); 
  const [poolType, setPoolType] = useState('Բոլորը'); 
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const handleLocationChange = (locationName) => {
    if (selectedLocations.includes(locationName)) {
      setSelectedLocations(selectedLocations.filter(loc => loc !== locationName));
    } else {
      setSelectedLocations([...selectedLocations, locationName]);
    }
  };

  const handlePriceChange = (type, value) => {
    if (type === 'min') setMinPrice(value);
    if (type === 'max') setMaxPrice(value);
  };

  const handleAmenityChange = (amenityName) => {
    if (selectedAmenities.includes(amenityName)) {
      setSelectedAmenities(selectedAmenities.filter(am => am !== amenityName));
    } else {
      setSelectedAmenities([...selectedAmenities, amenityName]);
    }
  };

  const renderHeartButton = (houseId) => {
    const isFavorite = favorites.includes(houseId);
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleFavorite(houseId);
        }}
        className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center text-slate-700 hover:bg-white shadow-sm transition-all z-10 border-none cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill={isFavorite ? "rgb(239, 68, 68)" : "none"} viewBox="0 0 24 24" strokeWidth={2} stroke={isFavorite ? "rgb(239, 68, 68)" : "#4b5563"} className="w-4 h-4" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      </button>
    );
  };

  const filteredHouses = housData.filter(house => {
    if (selectedLocations.length > 0 && !selectedLocations.includes(house.location)) return false;
    if (minPrice !== '' && house.price < Number(minPrice)) return false;
    if (maxPrice !== '' && house.price > Number(maxPrice)) return false;
    if (house.guests < guests) return false;
    if (overnight === 'Այո' && !house.hasOvernight) return false;
    if (overnight === 'Ոչ' && house.hasOvernight) return false;
    if (overnightGuests > 0 && house.overnightGuests < overnightGuests) return false;

    if (rooms !== 'Բոլորը') {
      if (rooms === '6+') { if (house.rooms < 6) return false; } 
      else { if (house.rooms !== Number(rooms)) return false; }
    }
    if (bathrooms !== 'Բոլորը') {
      if (bathrooms === '3+') { if (house.bathrooms < 3) return false; } 
      else { if (house.bathrooms !== Number(bathrooms)) return false; }
    }
    if (poolType !== 'Բոլորը') {
      if (poolType === 'Առանց լողավազանի') { if (house.pool && house.pool !== 'Չկա') return false; } 
      else { if (house.pool !== poolType) return false; }
    }
    if (selectedAmenities.length > 0) {
      const pseudoRandom = Math.sin(house.id * selectedAmenities.length) * 10000;
      const isVisible = (pseudoRandom - Math.floor(pseudoRandom)) > 0.4;
      if (!isVisible) return false;
    }

    const noFiltersActive = 
      (!selectedLocations || selectedLocations.length === 0) &&
      (!minPrice || minPrice === '') &&
      (!maxPrice || maxPrice === '') &&
      guests === 1 && overnight === 'Բոլորը' && overnightGuests === 0 &&
      rooms === 'Բոլորը' && bathrooms === 'Բոլորը' && poolType === 'Բոլորը' &&
      (!selectedAmenities || selectedAmenities.length === 0);

    if (noFiltersActive) return house.id >= 1 && house.id <= 12;
    return true;
  });

  return (
    <div className="font-sans text-[#101623] bg-white min-h-screen w-full flex flex-col relative overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[50px] w-full box-border flex-1">
        
        {/* 🟢 HEADER / BURGER MENU LOGIC */}
        {!isMobileWidth ? (
          <Header />
        ) : (
          <div className="w-full pt-4 flex justify-end">
            {/* Փոքր Burger կոճակ վերևի աջ մասում */}
            <button 
              onClick={() => setIsHeaderOpen(true)}
              className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center bg-white text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer shadow-sm z-40"
            >
              <i className="fa-solid fa-bars text-[18px]"></i>
            </button>

            {/* Կողային Մենյու (Sidebar Drawer) */}
            <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isHeaderOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
              {/* Մութ ֆոն (Overlay) */}
              <div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
                onClick={() => setIsHeaderOpen(false)}
              />
              
              {/* Բուն Մենյուի բլոկը, որը սահում է աջից */}
              <div className={`absolute top-0 right-0 h-full w-[300px] sm:w-[350px] bg-white shadow-2xl p-6 transition-transform duration-300 transform flex flex-col ${isHeaderOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Փակելու կոճակ (X) */}
                <div className="flex justify-end mb-4">
                  <button 
                    onClick={() => setIsHeaderOpen(false)}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 cursor-pointer text-gray-600"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
                
                {/* 🟢 Header-ի պարունակությունը՝ ստիպողաբար ուղղահայաց դասավորությամբ */}
                <div className="overflow-y-auto flex-1 w-full [&_.header]:flex-col [&_.header]:items-start [&_.header]:gap-6 [&_nav]:flex-col [&_nav]:items-start [&_nav]:gap-4 [&_.div3]:flex-col [&_.div3]:items-start [&_.div3]:gap-4 [&_.div5]:w-full [&_ul]:flex-col [&_ul]:items-start [&_ul]:gap-4 [&_div]:flex-col [&_div]:items-start [&_div]:gap-4">
                  <Header />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="relative inset-x-0 left-[50px] w-full flex flex-col lg:flex-row gap-8 mt-6 items-start">  
          {/* Sidebar */}
          <div className="w-full lg:w-[280px] shrink-0 sticky top-4">
            <SidebarFilter 
              selectedLocations={selectedLocations} onLocationChange={handleLocationChange} 
              minPrice={minPrice} maxPrice={maxPrice} onPriceChange={handlePriceChange}
              guests={guests} setGuests={setGuests} overnight={overnight} setOvernight={setOvernight}
              overnightGuests={overnightGuests} setOvernightGuests={setOvernightGuests}
              rooms={rooms} setRooms={setRooms} bathrooms={bathrooms} setBathrooms={setBathrooms}
              poolType={poolType} setPoolType={setPoolType} selectedAmenities={selectedAmenities} onAmenityChange={handleAmenityChange}
            />
          </div>

          {/* Աջ կողմի բլոկ */}
          <div className="flex-1 flex flex-col min-w-0 w-full">
            {/* Վերևի կոճակները */}
            <div className="flex justify-between items-start border-b border-[#101623]/10 pb-4 w-full">
              <div className="flex gap-[10px]">
                <button className="w-[120px] h-[35px] border rounded-[50px] bg-white hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm font-medium cursor-pointer">
                  Քարտեզ <i className="fa-regular fa-map"></i>
                </button>
                <button className="w-[35px] h-[35px] border border-black rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                  <i className="fa-regular fa-calendar"></i>
                </button>
              </div>
            </div>

            <div className="relative inset-x-0 top-[5px] flex items-center w-full mt-4 border-b border-[#101623]/10 pb-4">
              <div className="flex justify-evenly text-center gap-5 overflow-x-auto pr-12 w-full select-none scrollbar-none scroll-smooth">
                <div className="text-[12px] flex flex-col items-center cursor-pointer min-w-[75px] text-gray-800 font-medium hover:text-black"><img src="https://api.amaranoc.am/home.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Առանձնատներ</div>
                <div className="text-[12px] flex flex-col items-center cursor-pointer min-w-[75px] text-gray-800 font-medium hover:text-black"><img src="https://api.amaranoc.am/frame_house.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Frame houses</div>
                <div className="text-[12px] flex flex-col items-center cursor-pointer min-w-[75px] text-gray-800 font-medium hover:text-black"><img src="https://api.amaranoc.am/cabins.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Տնակներ</div>
                <div className="text-[12px] flex flex-col items-center cursor-pointer min-w-[75px] text-gray-800 font-medium hover:text-black"><img src="https://api.amaranoc.am/close_pool.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Փակ լողավազան</div>
                <div className="text-[12px] flex flex-col items-center cursor-pointer min-w-[75px] text-gray-800 font-medium hover:text-black"><img src="https://api.amaranoc.am/far_from_noise.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Փակ լողավազան</div>
                <div className="text-[12px] flex flex-col items-center cursor-pointer min-w-[75px] text-gray-800 font-medium hover:text-black"><img src="https://api.amaranoc.am/view.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Փակ լողավազան</div>
                <div className="text-[12px] flex flex-col items-center cursor-pointer min-w-[75px] text-gray-800 font-medium hover:text-black"><img src="https://api.amaranoc.am/nobel.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Փակ լողավազան</div>
                <div className="text-[12px] flex flex-col items-center cursor-pointer min-w-[75px] text-gray-800 font-medium hover:text-black"><img src="https://api.amaranoc.am/along_lake.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Փակ լողավազան</div>
              </div>
              <button className="absolute right-0 bg-white border border-gray-300 w-8 h-8 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 cursor-pointer transition-colors z-10">
                <i className="fa-solid fa-chevron-right text-gray-600 text-[12px]"></i>
              </button>
            </div>

            <div className="h-[60px] my-4 flex items-center justify-between border-b border-[#101623]/10 pb-2 w-full">
              <h4 className="font-bold text-[17px] text-[#101623] relative inset-x-0 top-[5px]">Լավագույն առաջարկներ</h4>
              <div className="flex gap-2">
                <button onClick={() => setIsThreeColumns(false)} className={`w-9 h-9 border rounded-lg flex items-center justify-center transition-all cursor-pointer ${!isThreeColumns ? 'bg-black text-white border-black' : 'bg-white text-gray-400 border-gray-200 hover:text-black'}`} >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M3 5h8v14H3V5zm10 0h8v14h-8V5z"/></svg>
                </button>
                <button onClick={() => setIsThreeColumns(true)} className={`w-9 h-9 border rounded-lg flex items-center justify-center transition-all cursor-pointer ${isThreeColumns ? 'bg-black text-white border-black' : 'bg-white text-gray-400 border-gray-200 hover:text-black'}`} >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M2 5h5v14H2V5zm7 0h5v14H9V5zm7 0h5v14h-5V5z"/></svg>
                </button>
              </div>
            </div>

            <div className={`w-full relative inset-x-0 top-[20px] grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6 mb-12 ${isThreeColumns ? 'xl:grid-cols-3' : 'xl:grid-cols-2'}`}>
              {filteredHouses.map((house) => (
                <Link mt-auto="true" to={`/property/${house.id}`} target="_blank" key={house.id} className="w-full relative flex flex-col bg-white rounded-[12px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-300 no-underline" >
                  <div className={`relative overflow-hidden w-full bg-gray-50 shrink-0 ${isThreeColumns ? 'h-[160px] sm:h-[180px]' : 'h-[200px] sm:h-[220px]'}`}>
                    <img src={house.image} alt={house.location} className="w-full h-full object-cover" />
                    {renderHeartButton(house.id)}
                  </div>
                  <div className="p-3 flex flex-col gap-1.5 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1"><p className="text-[14px] font-bold text-gray-800">{house.location}</p></div>
                      <div className="flex items-center gap-1 text-orange-500 text-[11px] font-bold bg-orange-50 px-1.5 py-0.5 rounded-[4px]"><span>{house.guests} հոգի</span></div>
                    </div>
                    <div className="flex items-center gap-1 text-[15px] font-black text-gray-900 mt-0.5"><span>{house.price?.toLocaleString()} ֏</span></div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredHouses.length === 0 && (
              <div className="text-center py-12 text-gray-400 font-medium">Համապատասխան տուն չգտնվեց:</div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full mt-auto">
        <Texadrel />
        <Footer />
      </div>
    </div>
  );
}