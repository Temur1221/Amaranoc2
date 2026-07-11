import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function PriceSlider() {
  const [currency, setCurrency] = useState('AMD'); // AMD, USD, EUR, RUB
  const [range, setRange] = useState([0, 400000]);

  const currencySymbols = {
    AMD: '֏',
    USD: '$',
    EUR: '€',
    RUB: '₽'
  };

  return (
    <div className="w-full bg-[#f8fafc] border border-gray-200/80 rounded-[20px] p-6 font-sans box-border select-none shadow-sm">
      
      {/* Տարադրամ Վերնագիր */}
      <h4 className="text-[14px] font-bold text-gray-800 mb-5 mt-0 tracking-wide">
        Տարադրամ
      </h4>

      {/* Գլխավոր Դասավորություն */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 w-full">
        
        {/* 1. Արժույթի կլորակներ */}
        <div className="flex gap-2.5 shrink-0">
          {['AMD', 'USD', 'EUR', 'RUB'].map((curr) => (
            <button
              key={curr}
              onClick={() => setCurrency(curr)}
              className={`w-9 h-9 rounded-full border text-[14px] font-medium flex items-center justify-center transition-all duration-150 cursor-pointer ${
                currency === curr
                  ? 'bg-[#101623] border-[#101623] text-white font-semibold'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {currencySymbols[curr]}
            </button>
          ))}
        </div>

        {/* 2. Սլայդերի և Դինամիկ Tooltip-ների Գոտի */}
        <div className="flex-1 flex flex-col relative pt-8 w-full px-3">
          
          <div className="relative w-full
            [&_.rc-slider-rail]:bg-gray-200/70 [&_.rc-slider-rail]:h-[3px] [&_.rc-slider-rail]:rounded-full
            [&_.rc-slider-track]:bg-[#ff9f43] [&_.rc-slider-track]:h-[3px] [&_.rc-slider-track]:rounded-full
            [&_.rc-slider-handle]:border-2 [&_.rc-slider-handle]:border-[#ff9f43] 
            [&_.rc-slider-handle]:h-[14px] [&_.rc-slider-handle]:w-[14px] [&_.rc-slider-handle]:-mt-[5px] 
            [&_.rc-slider-handle]:bg-white [&_.rc-slider-handle]:shadow-sm [&_.rc-slider-handle]:opacity-100 
            [&_.rc-slider-handle-active]:shadow-none [&_.rc-slider-handle]:cursor-pointer"
          >
            <Slider
              range
              min={0}
              max={500000}
              step={5000}
              value={range}
              onChange={(value) => setRange(value)}
              handleRender={(node, props) => {
                const index = props.index;
                const value = range[index];
                const offset = props.offset; 
                
                return (
                  <div key={index} className="relative">
                    {/* 1-ին 1 Նարնջագույն Tooltip՝ ներքևի փոքրիկ սլաքով (triangle) */}
                    <div 
                      className="absolute bottom-5 bg-[#ff9f43] text-white text-[11px] font-bold px-3 py-1 rounded-[10px] shadow-sm whitespace-nowrap pointer-events-none transition-all duration-75 flex flex-col items-center"
                      style={{ 
                        left: `${offset}%`, 
                        transform: 'translateX(-50%)'
                      }}
                    >
                      {value.toLocaleString()} {currencySymbols[currency]}
                      
                      {/* Ներքևի սլաքի ոճավորումը */}
                      <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-[#ff9f43] absolute bottom-[-4px] left-1/2 -translate-x-1/2"></div>
                    </div>
                    {node}
                  </div>
                );
              }}
            />
          </div>

        </div>
      </div>

    </div>
  );
}