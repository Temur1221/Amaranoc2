import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/Footer'
import Texadrel from '../components/Texadrel'
import { housData } from "../components/HousData";
import { useFavoritesStore } from "../components/useFavoritesStore";

export default function Home() {
  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

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

  const row1 = housData.filter(h => h.id >= 1 && h.id <= 3);
  const row2 = housData.filter(h => h.id >= 4 && h.id <= 6);
  const row3 = housData.filter(h => h.id >= 7 && h.id <= 9);
  const row4 = housData.filter(h => h.id >= 10 && h.id <= 12);

  return (
    <div className="font-sans text-[#101623] bg-white min-h-screen">
      <Header/>
      <div className="flex px-4 md:px-[70px] gap-8 mt-6">
          <div className="w-[240px] border border-[#101623]/20 rounded-[10px] p-4 min-h-[1250px] flex flex-col shrink-0">
          
          <h5 className="mt-[15px] font-bold">Տարածաշրջան</h5>
          <div className="mt-[30px]">
            <div className="text-[#101623]/70 text-[15px] space-y-3">
              <label className="block cursor-pointer"><input type="checkbox" className="mr-2" /> Դիլիջան 164</label>
              <label className="block cursor-pointer"><input type="checkbox" className="mr-2" /> Ծաղկաձոր 114</label>
              <label className="block cursor-pointer"><input type="checkbox" className="mr-2" /> Աշտարակ 26</label>
              <label className="block cursor-pointer"><input type="checkbox" className="mr-2" /> Գառնի 26</label>
              <label className="block cursor-pointer"><input type="checkbox" className="mr-2" /> Երևան 23</label>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-5">
            <h5 className="font-bold">Արժեք</h5>
            <div className="flex items-center gap-[10px]">
              <button className="w-[30px] h-[30px] rounded-full border border-gray-400 bg-white hover:bg-black hover:text-white transition-colors">֏</button>
              <button className="w-[30px] h-[30px] rounded-full border border-gray-400 bg-white hover:bg-black hover:text-white transition-colors">$</button>
              <button className="w-[30px] h-[30px] rounded-full border border-gray-400 bg-white hover:bg-black hover:text-white transition-colors">€</button>
              <button className="w-[30px] h-[30px] rounded-full border border-gray-400 bg-white hover:bg-black hover:text-white transition-colors">₽</button>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-[10px] pb-3 border-b border-[#101623]/20 gap-2">
            <input type="text" placeholder="  Սկսած" className="w-[90px] h-[35px] rounded-[10px] border border-[#101623]/20 text-sm outline-none px-2" />
            <p className="text-gray-500">-</p>
            <input type="text" placeholder="  Մինչև" className="w-[90px] h-[35px] rounded-[10px] border border-[#101623]/20 text-sm outline-none px-2" />
          </div>
          
          <div className="mt-4 pb-3 border-b border-[#101623]/20">
            <h5 className="font-bold text-sm">Մարդկանց թույլատրելի քանակ</h5>
            <div className="flex items-center gap-3 mt-[10px]">
              <button className="w-[30px] h-[30px] rounded-full border border-[#101623]/20 flex items-center justify-center">-</button>
              <div className="w-[50px] h-[30px] border border-[#101623]/20 flex items-center justify-center rounded-[5px]">
                <h1 className="text-[15px] font-semibold">1</h1>
              </div>
              <button className="w-[30px] h-[30px] rounded-full border border-[#101623]/20 flex items-center justify-center">+</button>
            </div>
          </div>
          <div className="mt-4 pb-3 border-b border-[#101623]/20 space-y-2">
            <h5 className="font-bold text-sm">Գիշերակացի առկայություն</h5>
            <div className="flex flex-wrap gap-2">
              <button className="w-[70px] h-[30px] rounded-[30px] border border-[#101623]/20 text-sm hover:bg-black hover:text-white transition-colors">Բոլորը</button>
              <button className="w-[45px] h-[30px] rounded-[30px] border border-[#101623]/20 text-sm hover:bg-black hover:text-white transition-colors">Այո</button>
              <button className="w-[45px] h-[30px] rounded-[30px] border border-[#101623]/20 text-sm hover:bg-black hover:text-white transition-colors">Ոչ</button>
            </div>
          </div>
          <div className="mt-4 pb-3 border-b border-[#101623]/20">
            <h5 className="font-bold text-sm">Մարդկանց թույլատրելի քանակը գիշերակացով</h5>
            <div className="flex items-center gap-3 mt-[10px]">
              <button className="w-[30px] h-[30px] rounded-full border border-[#101623]/20 flex items-center justify-center">-</button>
              <div className="w-[50px] h-[30px] border border-[#101623]/20 flex items-center justify-center rounded-[5px]">
                <h1 className="text-[15px] font-semibold">1</h1>
              </div>
              <button className="w-[30px] h-[30px] rounded-full border border-[#101623]/20 flex items-center justify-center">+</button>
            </div>
          </div>
          <div className="mt-4 pb-3 border-b border-[#101623]/20 space-y-2">
            <h5 className="font-bold text-sm">Սենյակների քանակ</h5>
            <div className="flex flex-wrap gap-2">
              <button className="w-[70px] h-[30px] rounded-[30px] border border-[#101623]/20 text-sm hover:bg-black hover:text-white transition-colors">Բոլորը</button>
              <button className="w-[40px] h-[35px] rounded-full border border-[#101623]/20 hover:bg-black hover:text-white transition-colors">1</button>
              <button className="w-[40px] h-[35px] rounded-full border border-[#101623]/20 hover:bg-black hover:text-white transition-colors">2</button>
              <button className="w-[40px] h-[35px] rounded-full border border-[#101623]/20 hover:bg-black hover:text-white transition-colors">3</button>
              <button className="w-[40px] h-[35px] rounded-full border border-[#101623]/20 hover:bg-black hover:text-white transition-colors">4</button>
              <button className="w-[40px] h-[35px] rounded-full border border-[#101623]/20 hover:bg-black hover:text-white transition-colors">5</button>
              <button className="w-[110px] h-[30px] rounded-[30px] border border-[#101623]/20 text-xs hover:bg-black hover:text-white transition-colors">6 և ավելի</button>
            </div>
          </div>
          <div className="mt-4 pb-3 border-b border-[#101623]/20 space-y-2">
            <h5 className="font-bold text-sm">Սանհանգույցների քանակ</h5>
            <div className="flex flex-wrap gap-2">
              <button className="w-[70px] h-[30px] rounded-[30px] border border-[#101623]/20 hover:bg-black hover:text-white transition-colors">Բոլորը</button>
              <button className="w-[40px] h-[35px] rounded-full border border-[#101623]/20 hover:bg-black hover:text-white transition-colors">1</button>
              <button className="w-[40px] h-[35px] rounded-full border border-[#101623]/20 hover:bg-black hover:text-white transition-colors">2</button>
              <button className="w-[40px] h-[35px] rounded-full border border-[#101623]/20 hover:bg-black hover:text-white transition-colors">3+</button>
            </div>
          </div>
          <div className="mt-4 pb-3 border-b border-[#101623]/20 space-y-2">
            <h5 className="font-bold text-sm">Լողավազան</h5>
            <div className="flex flex-wrap gap-2">
              <button className="w-[70px] h-[30px] rounded-[30px] border border-[#101623]/20 hover:bg-black hover:text-white transition-colors">Բոլորը</button>
              <button className="w-[45px] h-[30px] rounded-[30px] border border-[#101623]/20 hover:bg-black hover:text-white transition-colors">Բաց</button>
              <button className="w-[45px] h-[30px] rounded-[30px] border border-[#101623]/20 hover:bg-black hover:text-white transition-colors">Փակ</button>
              <button className="w-[80px] h-[30px] rounded-[30px] border border-[#101623]/20 text-xs hover:bg-black hover:text-white transition-colors">Տաքացվող</button>
              <button className="w-[140px] h-[30px] rounded-[30px] border border-[#101623]/20 text-sm hover:bg-black hover:text-white transition-colors">Առանց</button>
            </div>
          </div>
          <div className="text-[#101623]/70 text-[15px] space-y-2 mt-4">
            <h5 className="font-bold text-black text-sm mt-[25px]">Առավելություններ</h5>
            <label className="block cursor-pointer"><input type="checkbox" className="mr-2" /> Շոգեբաղնիք</label>
            <label className="block cursor-pointer"><input type="checkbox" className="mr-2" /> Ջակուզի</label>
            <label className="block cursor-pointer"><input type="checkbox" className="mr-2" /> Բիլիարդ</label>
            <label className="block cursor-pointer"><input type="checkbox" className="mr-2" /> Սեղանի թենիս</label>
            <label className="block cursor-pointer"><input type="checkbox" className="mr-2" /> Բացօթյա տաղավար</label>
            <label className="block cursor-pointer"><input type="checkbox" className="mr-2" /> Փակ տաղավար</label>
            <label className="block cursor-pointer"><input type="checkbox" className="mr-2" /> Մանղալ</label>
            <label className="block cursor-pointer"><input type="checkbox" className="mr-2" /> Թոնիր</label>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-start border-b border-[#101623]/20 pb-4">
            <div className="flex gap-[10px]">
              <button className="w-[120px] h-[35px] border border-black rounded-[50px] bg-white hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                Քարտեզ <i className="fa-regular fa-map"></i>
              </button>
              <button className="w-[35px] h-[35px] border border-black rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                <i className="fa-regular fa-calendar"></i>
              </button>
            </div><br />
          </div>
            <div className="flex text-center gap-5 overflow-x-auto pb-2">
              <div className="text-[12px] cursor-pointer min-w-[75px]"><img src="https://api.amaranoc.am/home.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Առանձնատներ</div>
              <div className="text-[12px] cursor-pointer min-w-[75px]"><img src="https://api.amaranoc.am/frame_house.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Frame houses</div>
              <div className="text-[12px] cursor-pointer min-w-[75px]"><img src="https://api.amaranoc.am/cabins.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Տնակներ</div>
              <div className="text-[12px] cursor-pointer min-w-[75px]"><img src="https://api.amaranoc.am/close_pool.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Փակ լողավազան</div>
              <div className="text-[12px] cursor-pointer min-w-[75px]"><img src="https://api.amaranoc.am/far_from_noise.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Աղմուկից հեռու</div>
              <div className="text-[12px] cursor-pointer min-w-[75px]"><img src="https://api.amaranoc.am/view.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Շքեղ տեսարան</div>
              <div className="text-[12px] cursor-pointer min-w-[75px]"><img src="https://api.amaranoc.am/nobel.svg" className="w-[45px] h-[35px] mx-auto mb-1" alt=""/>Պահանջված</div>
            </div>
          <div className="h-[50px] my-6 flex items-center border-y border-[#101623]/20 py-2">
            <h4 className="font-bold text-[16px]">Լավագույն առաջարկներ</h4>
          </div>
          <div className="w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8 mb-12 justify-items-stretch">
            {[...row1, ...row2, ...row3, ...row4].map((house) => (
              <div 
                key={house.id} 
                className="w-full relative flex flex-col bg-white rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img 
                    src={house.image} 
                    alt={house.location} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
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
                    <span>{house.price.toLocaleString()} ֏</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <Texadrel/>
      <Footer/>
    </div>
  )
}