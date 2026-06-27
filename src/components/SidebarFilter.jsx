import React from 'react';

export default function SidebarFilter({ selectedLocations = [], onLocationChange }) {
  
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
    <div className="w-[280px] flex flex-col gap-5 bg-white p-4 rounded-[20px] border border-gray-250/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-fit max-[1299px]:w-full text-left font-sans select-none text-[#111827]">
      
      {/* 1. ՏԱՐԱԾԱՇՐՋԱՆ */}
      <div>
        <h3 className="font-bold text-[14px] mb-3 text-black">Տարածաշրջան</h3>
        <div className="flex flex-col gap-2.5">
          {locations.map((item, index) => (
            <label key={index} className="flex items-center text-[13.5px] font-medium cursor-pointer group justify-between">
              <div className="flex items-center gap-2.5">
                <input 
                  type="checkbox" 
                  checked={selectedLocations.includes(item.name)}
                  onChange={() => onLocationChange(item.name)}
                  className="w-4 h-4 rounded border-gray-300 text-black focus:ring-0 cursor-pointer checked:bg-black" 
                />
                <span className="text-gray-800 font-semibold">{item.name}</span>
              </div>
              <span className="text-gray-400 text-xs font-bold">{item.count}</span>
            </label>
          ))}
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* 2. ԱՐԺԵՔ */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-[14px] text-black">Արժեք</h3>
          <div className="flex gap-1 bg-gray-100 p-0.5 rounded-full border border-gray-200">
            <button className="w-6 h-6 rounded-full bg-[#0F172A] text-white text-xs font-bold flex items-center justify-center">֏</button>
            <button className="w-6 h-6 rounded-full text-gray-400 text-xs font-semibold flex items-center justify-center hover:bg-gray-200">$</button>
            <button className="w-6 h-6 rounded-full text-gray-400 text-xs font-semibold flex items-center justify-center hover:bg-gray-200">€</button>
            <button className="w-6 h-6 rounded-full text-gray-400 text-xs font-semibold flex items-center justify-center hover:bg-gray-200">₽</button>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <input type="text" placeholder="90000" className="w-full h-9 px-3 border border-gray-300 rounded-xl text-sm font-semibold focus:outline-none placeholder-gray-800 text-center" />
          <span className="text-gray-400 font-bold">•</span>
          <input type="text" placeholder="Մինչև" className="w-full h-9 px-3 border border-gray-200 rounded-xl text-sm focus:outline-none placeholder-gray-400 text-center" />
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* 3. ՄԱՐԴԿԱՆՑ ԹՈՒՅԼԱՏՐԵԼԻ ՔԱՆԱԿ */}
      <div>
        <h3 className="font-bold text-[13.5px] text-black mb-2.5">Մարդկանց թույլատրելի քանակ</h3>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400 text-lg hover:bg-gray-100">-</button>
          <div className="w-12 h-8 border border-gray-300 rounded-xl flex items-center justify-center font-bold text-sm">1</div>
          <button className="w-8 h-8 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-600 text-lg hover:bg-gray-100">+</button>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* 4. ԳԻՇԵՐԱԿԱՑԻ ԱՌԿԱՅՈՒԹՅՈՒՆ */}
      <div>
        <h3 className="font-bold text-[13.5px] text-black mb-2.5">Գիշերակացի առկայություն</h3>
        <div className="flex flex-wrap gap-1.5">
          <button className="px-5 py-1.5 rounded-full bg-[#0F172A] text-white text-xs font-bold shadow-sm">Բոլորը</button>
          <button className="px-5 py-1.5 rounded-full border border-gray-200 text-gray-500 bg-white text-xs font-bold hover:bg-gray-50">Այո</button>
          <button className="px-5 py-1.5 rounded-full border border-gray-200 text-gray-500 bg-white text-xs font-bold hover:bg-gray-50">Ոչ</button>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* 5. ՄԱՐԴԿԱՆՑ ԹՈՒՅԼԱՏՐԵԼԻ ՔԱՆԱԿԸ ԳԻՇԵՐԱԿԱՑՈՎ */}
      <div>
        <h3 className="font-bold text-[13.5px] text-black mb-2.5 leading-tight">Մարդկանց թույլատրելի քանակը գիշերակացով</h3>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400 text-lg hover:bg-gray-100">-</button>
          <div className="w-12 h-8 border border-gray-300 rounded-xl flex items-center justify-center font-bold text-sm">0</div>
          <button className="w-8 h-8 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-600 text-lg hover:bg-gray-100">+</button>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* 6. ՍԵՆՅԱԿՆԵՐԻ ՔԱՆԱԿ */}
      <div>
        <h3 className="font-bold text-[13.5px] text-black mb-2.5">Սենյակների քանակ</h3>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1.5">
            <button className="px-4 py-1.5 rounded-full bg-[#0F172A] text-white text-xs font-bold">Բոլորը</button>
            {['1', '2', '3'].map((num, i) => (
              <button key={i} className="w-10 py-1.5 rounded-full border border-gray-200 text-gray-500 bg-white text-xs font-bold hover:bg-gray-50 text-center">{num}</button>
            ))}
          </div>
          <div className="flex gap-1.5">
            {['4', '5', '6 և ավելի'].map((num, i) => (
              <button key={i} className={`${num.length > 1 ? 'px-4' : 'w-10'} py-1.5 rounded-full border border-gray-200 text-gray-500 bg-white text-xs font-bold hover:bg-gray-50 text-center`}>{num}</button>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* 7. ՍԱՆՀԱՆԳՈՒՅՑՆԵՐԻ ՔԱՆԱԿ */}
      <div>
        <h3 className="font-bold text-[13.5px] text-black mb-2.5">Սանհանգույցների քանակ</h3>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1.5">
            <button className="px-4 py-1.5 rounded-full bg-[#0F172A] text-white text-xs font-bold">Բոլորը</button>
            {['1', '2'].map((num, i) => (
              <button key={i} className="w-10 py-1.5 rounded-full border border-gray-200 text-gray-500 bg-white text-xs font-bold hover:bg-gray-50 text-center">{num}</button>
            ))}
          </div>
          <div className="flex gap-1.5">
            <button className="px-4 py-1.5 rounded-full border border-gray-200 text-gray-500 bg-white text-xs font-bold hover:bg-gray-50">3+</button>
          </div>
        </div>
      </div>

      <hr className="border-gray-100" />
      <div>
        <h3 className="font-bold text-[13.5px] text-black mb-2.5">Լողավազան</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-1.5">
            <button className="px-4 py-1.5 rounded-full bg-[#0F172A] text-white text-xs font-bold">Բոլորը</button>
            {['Բաց', 'Փակ', 'Տաքացվող'].map((pool, i) => (
              <button key={i} className="px-3.5 py-1.5 rounded-full border border-gray-200 text-gray-500 bg-white text-xs font-bold hover:bg-gray-50">{pool}</button>
            ))}
          </div>
          <div className="flex">
            <button className="px-4 py-1.5 rounded-full border border-gray-200 text-gray-500 bg-white text-xs font-bold hover:bg-gray-50">Առանց լողավազանի</button>
          </div>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* 9. ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐ */}
      <div>
        <h3 className="font-bold text-[13.5px] text-black mb-3">Առավելություններ</h3>
        <div className="flex flex-col gap-2.5">
          {amenities.map((item, index) => (
            <label key={index} className="flex items-center gap-2.5 text-[13.5px] font-medium cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-0 cursor-pointer checked:bg-black" />
              <span className="text-gray-800 font-semibold group-hover:text-black transition-colors">{item}</span>
            </label>
          ))}
        </div>
      </div>

    </div>
  );
}