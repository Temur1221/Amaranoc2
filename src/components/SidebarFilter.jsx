import React from 'react';

export default function SidebarFilter({ 
  selectedLocations = [], 
  onLocationChange,
  minPrice,        
  maxPrice,        
  onPriceChange,
  guests,
  setGuests,
  overnight,
  setOvernight,
  overnightGuests,
  setOvernightGuests,
  rooms,
  setRooms,
  bathrooms,
  setBathrooms,
  poolType,
  setPoolType,
  selectedAmenities = [],
  onAmenityChange
}) {
  
  const locations = [
    { name: 'Դիլիջան', count: 30 },
    { name: 'Ծաղկաձոր', count: 22 },
    { name: 'Երևան', count: 18 },
    { name: 'Գառնի', count: 14 },
    { name: 'Ձորաղբյուր', count: 11 }
  ];

  const amenities = [
    'Շոգեբաղնիք', 'Ջակուզի', 'Բիլիարդ', 'Սեղանի թենիս', 
    'Բացօթյա տաղավար', 'Փակ տաղավար', 'Մանղալ', 'Ճոճանակ'
  ];

  return (
    <div className="w-[230px] flex flex-col gap-4 bg-white pt-3.5 pb-3.5 pl-[10px] pr-[10px] rounded-[16px] border border-gray-200/70 shadow-[0_2px_12px_rgba(0,0,0,0.02)] h-fit max-[1299px]:w-full text-left font-sans select-none text-[#111827]">
      
      {/* 1. ՏԱՐԱԾԱՇՐՋԱՆ */}
      <div>
        <h3 className="font-bold text-[12.5px] mb-2.5 text-gray-900 tracking-wide">Տարածաշրջան</h3>
        <div className="flex flex-col gap-2">
          {locations.map((item, index) => (
            <label key={index} className="flex items-center text-[13px] font-medium cursor-pointer group">
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={selectedLocations.includes(item.name)}
                  onChange={() => onLocationChange(item.name)}
                  className="w-3.5 h-3.5 rounded border-gray-300 text-black focus:ring-0 cursor-pointer checked:bg-black" 
                />
                <span className="text-gray-755 font-medium group-hover:text-black">{item.name}</span>
                <span className="text-gray-400 text-[11px] font-normal ml-0.5">{item.count}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <hr className="border-gray-100/80" />

      {/* 2. ԱՐԺԵՔ */}
      <div>
        <div className="flex justify-between items-center mb-2.5">
          <h3 className="font-bold text-[12.5px] text-gray-900 tracking-wide">Արժեք</h3>
        </div>
        <div className="flex items-center gap-1">
          <input 
            type="number" 
            placeholder="Սկսած" 
            value={minPrice}
            onChange={(e) => onPriceChange('min', e.target.value)}
            className="w-full h-8 px-2 border border-gray-200 rounded-lg text-xs font-medium focus:outline-none text-center bg-gray-50/35" 
          />
          <span className="text-gray-300 font-normal text-sm">-</span>
          <input 
            type="number" 
            placeholder="Մինչև" 
            value={maxPrice}
            onChange={(e) => onPriceChange('max', e.target.value)}
            className="w-full h-8 px-2 border border-gray-200 rounded-lg text-xs font-medium focus:outline-none text-center bg-gray-50/35" 
          />
        </div>
      </div>

      <hr className="border-gray-100/80" />

      {/* 3. ՄԱՐԴԿԱՆՑ ԹՈՒՅԼԱՏՐԵԼԻ ՔԱՆԱԿ */}
      <div>
        <h3 className="font-bold text-[12.5px] text-gray-900 mb-2 tracking-wide">Մարդկանց թույլատրելի քանակ</h3>
        <div className="flex items-center gap-1.5">
          <button 
            onClick={() => setGuests(prev => Math.max(1, prev - 1))}
            className="w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 font-light hover:bg-gray-50 cursor-pointer"
          >-</button>
          <div className="w-9 h-7 border border-gray-200 rounded-lg flex items-center justify-center font-semibold text-xs text-gray-800 bg-gray-55/10">{guests}</div>
          <button 
            onClick={() => setGuests(prev => prev + 1)}
            className="w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 font-light hover:bg-gray-50 cursor-pointer"
          >+</button>
        </div>
      </div>

      <hr className="border-gray-100/80" />

      {/* 4. ԳԻՇԵՐԱԿԱՑԻ ԱՌԿԱՅՈՒԹՅՈՒՆ */}
      <div>
        <h3 className="font-bold text-[12.5px] text-gray-900 mb-2 tracking-wide">Գիշերակացի առկայություն</h3>
        <div className="flex flex-wrap gap-1">
          {['Բոլորը', 'Այո', 'Ոչ'].map((opt) => (
            <button 
              key={opt}
              onClick={() => setOvernight(opt)}
              className={`px-3.5 py-1 rounded-full text-[11px] font-medium cursor-pointer border transition-all ${overnight === opt ? 'bg-black text-white border-black' : 'bg-white text-gray-650 border-gray-200 hover:bg-gray-50'}`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <hr className="border-gray-100/80" />

      {/* 5. ՄԱՐԴԿԱՆՑ ԹՈՒՅԼԱՏՐԵԼԻ ՔԱՆԱԿԸ ԳԻՇԵՐԱԿԱՑՈՎ */}
      <div>
        <h3 className="font-bold text-[12.5px] text-gray-900 mb-2 leading-snug tracking-wide">Մարդկանց քանակը գիշերակացով</h3>
        <div className="flex items-center gap-1.5">
          <button 
            onClick={() => setOvernightGuests(prev => Math.max(0, prev - 1))}
            className="w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 font-light hover:bg-gray-50 cursor-pointer"
          >-</button>
          <div className="w-9 h-7 border border-gray-200 rounded-lg flex items-center justify-center font-semibold text-xs text-gray-800">{overnightGuests}</div>
          <button 
            onClick={() => setOvernightGuests(prev => prev + 1)}
            className="w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 font-light hover:bg-gray-50 cursor-pointer"
          >+</button>
        </div>
      </div>

      <hr className="border-gray-100/80" />

      {/* 6. ՍԵՆՅԱԿՆԵՐԻ ՔԱՆԱԿ */}
      <div>
        <h3 className="font-bold text-[12.5px] text-gray-900 mb-2 tracking-wide">Սենյակների քանակ</h3>
        <div className="flex flex-col gap-1.5">
          <div className="flex gap-1 flex-wrap">
            {['Բոլորը', '1', '2', '3', '4', '5', '6+'].map((num) => (
              <button 
                key={num}
                onClick={() => setRooms(num)}
                className={`py-1 rounded-full text-[11px] font-medium cursor-pointer border text-center transition-all ${num === 'Բոլորը' || num === '6+' ? 'px-3' : 'w-7'} ${rooms === num ? 'bg-black text-white border-black' : 'bg-white text-gray-650 border-gray-200 hover:bg-gray-50'}`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-100/80" />

      {/* 7. ՍԱՆՀԱՆԳՈՒՅՑՆԵՐԻ ՔԱՆԱԿ */}
      <div>
        <h3 className="font-bold text-[12.5px] text-gray-900 mb-2 tracking-wide">Սանհանգույցների քանակ</h3>
        <div className="flex gap-1 flex-wrap">
          {['Բոլորը', '1', '2', '3+'].map((num) => (
            <button 
              key={num}
              onClick={() => setBathrooms(num)}
              className={`py-1 rounded-full text-[11px] font-medium cursor-pointer border text-center transition-all ${num === 'Բոլորը' || num === '3+' ? 'px-3' : 'w-7'} ${bathrooms === num ? 'bg-black text-white border-black' : 'bg-white text-gray-650 border-gray-200 hover:bg-gray-50'}`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <hr className="border-gray-100/80" />

      {/* 8. ԼՈՂԱՎԱԶԱՆ */}
      <div>
        <h3 className="font-bold text-[12.5px] text-gray-900 mb-2 tracking-wide">Լողավազան</h3>
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-wrap gap-1">
            {['Բոլորը', 'Բաց', 'Փակ', 'Տաք', 'Առանց լողավազանի'].map((pool) => (
              <button 
                key={pool}
                onClick={() => setPoolType(pool)}
                className={`px-3 py-1 rounded-full text-[11px] font-medium cursor-pointer border transition-all ${poolType === pool ? 'bg-black text-white border-black' : 'bg-white text-gray-650 border-gray-200 hover:bg-gray-50'}`}
              >
                {pool}
              </button>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-100/80" />

      {/* 9. ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐ */}
      <div>
        <h3 className="font-bold text-[12.5px] text-gray-900 mb-2.5 tracking-wide">Առավելություններ</h3>
        <div className="flex flex-col gap-2">
          {amenities.map((item, index) => (
            <label key={index} className="flex items-center gap-2 text-[13px] font-medium cursor-pointer group">
              <input 
                type="checkbox" 
                checked={selectedAmenities.includes(item)}
                onChange={() => onAmenityChange(item)}
                className="w-3.5 h-3.5 rounded border-gray-300 text-black focus:ring-0 cursor-pointer checked:bg-black" 
              />
              <span className="text-gray-755 font-medium group-hover:text-black transition-colors">{item}</span>
            </label>
          ))}
        </div>
      </div>

    </div>
  );
}