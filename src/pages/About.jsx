import React, { useState, useEffect } from 'react'
import Header from '../components/header/header'
import Texekutyun from './Texekutyun'
import Texadrel from '../components/Texadrel'
import Footer from '../components/Footer'

export default function About() {
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

  return (
    <div className="w-full relative overflow-x-hidden">
      
      {/* Ֆոնով գլխավոր բլոկ */}
      <div style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Ffirst_image.jpg&w=1920&q=75")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          color: '#ffffff'
      }}>
        
        {/* 🟢 HEADER / BURGER MENU LOGIC */}
        {!isMobileWidth ? (
          <Header />
        ) : (
          <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[50px] pt-4 flex justify-end box-border relative">
            {/* Փոքր Burger կոճակ վերևի աջ մասում */}
            <button 
              onClick={() => setIsHeaderOpen(true)}
              className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition-colors cursor-pointer shadow-sm z-40"
            >
              <i className="fa-solid fa-bars text-[18px]"></i>
            </button>

            {/* Կողային Մենյու (Sidebar Drawer) */}
            <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isHeaderOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
              {/* Մութ ֆոն (Overlay) */}
              <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
                onClick={() => setIsHeaderOpen(false)}
              />
              
              {/* Բուն Մենյուի բլոկը, որը սահում է աջից */}
              <div className={`absolute top-0 right-0 h-full w-[300px] sm:w-[350px] bg-white text-[#101623] shadow-2xl p-6 transition-transform duration-300 transform flex flex-col ${isHeaderOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Փակելու կոճակ (X) */}
                <div className="flex justify-end mb-4">
                  <button 
                    onClick={() => setIsHeaderOpen(false)}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 cursor-pointer text-gray-600"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
                
                {/* Header-ի պարունակությունը՝ ստիպողաբար ուղղահայաց դասավորությամբ */}
                <div className="overflow-y-auto flex-1 w-full [&_.header]:flex-col [&_.header]:items-start [&_.header]:gap-6 [&_nav]:flex-col [&_nav]:items-start [&_nav]:gap-4 [&_.div3]:flex-col [&_.div3]:items-start [&_.div3]:gap-4 [&_.div5]:w-full [&_ul]:flex-col [&_ul]:items-start [&_ul]:gap-4 [&_div]:flex-col [&_div]:items-start [&_div]:gap-4">
                  <Header />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Տեղեկատվական բլոկ */}
      <Texekutyun />

      {/* Տեղադրել բլոկ */}
      <div className="relative inset-x-0 top-[120px]">
        <Texadrel />
      </div>

      {/* Ֆուտեր */}
      <div className="relative inset-x-0 top-[120px]">
        <Footer />
      </div>
    </div>
  )
}