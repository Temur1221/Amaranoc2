import React from "react";
import Header from "../components/header/header";
import Gorcoxutyunner from "../components/GorcoxutyunData";
import SpasarkumCard from "./SpasarkumCard";
import { SpasarkumData } from "./SpasarkumData";
import Texadrel from "../components/Texadrel";
import Footer from "../components/Footer";
export default function Service() {
  return (
    <>
      <Header />
      <Gorcoxutyunner />
  <div className="flex justify-center items-start px-4 w-full">
        
        {/* Ավելացվեց mt-12 (Margin Top), որը քարտերը կիջեցնի ներքև */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl pt-32 pb-12">
          {SpasarkumData.map((item) => (
            <SpasarkumCard 
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>

      </div>
      <div className="relative inset-x-0 top-[-300px]">
         <Texadrel/>
      </div>
         <Footer/>
    </>
  );
}