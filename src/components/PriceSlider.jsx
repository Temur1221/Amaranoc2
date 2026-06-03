import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function PriceSlider() {
  const [range, setRange] = useState([0, 400000]);

  return (
    <>
    <h1 className='text-[30px] relative inset-x-0 top-[150px] text-center'>ԹԵԺ ԱՌԱՋԱՐԿՆԵՐ</h1>
    <div className="w-full max-w-5xl mx-auto p-8 bg-white rounded-xl shadow-md border my-10 relative z-10 top-[200px] left-[90px] h-[90px]">
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-700 font-bold text-lg">Տարադրամ</span>
        
        <div className="flex gap-4">
          <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-sm">
            {range[0].toLocaleString()} ֏
          </span>
          <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-sm">
            {range[1].semibold || range[1].toLocaleString()} ֏
          </span>
        </div>
      </div>
      <div className="px-2 
        [&_.rc-slider-rail]:bg-gray-200 [&_.rc-slider-rail]:h-1.5
        [&_.rc-slider-track]:bg-orange-500 [&_.rc-slider-track]:h-1.5
        [&_.rc-slider-handle]:border-orange-500 
        [&_.rc-slider-handle]:h-5 
        [&_.rc-slider-handle]:w-5 
        [&_.rc-slider-handle]:-mt-1.5 
        [&_.rc-slider-handle]:bg-white 
        [&_.rc-slider-handle]:shadow-md 
        [&_.rc-slider-handle]:opacity-100 
[&_.rc-slider-handle-active]:shadow-none">
        <Slider
          range
          min={0}
          max={500000}
          value={range}
          onChange={(value) => setRange(value)}
          />
      </div>
    </div>
          </>
  );
}