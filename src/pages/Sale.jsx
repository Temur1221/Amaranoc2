import React, { useState } from 'react'
import Header from '../components/header/header'
import Discount from '../components/header/Discounts/Discounts'
import Patver from '../components/header/Patver/Patver'
import PriceSlider from '../components/PriceSlider'
import { housesData } from '../components/HousesData'
import HouseCard from '../components/HouseCard'
import Texadrel from '../components/Texadrel'
import Footer from '../components/Footer'

export default function Sale() {
  const [range, setRange] = useState([0, 500000]);
  const filteredHouses = housesData.filter(
    (house) => house.price >= range[0] && house.price <= range[1]
  );

  return (
<>
    <div className="w-full min-h-screen bg-gray-50 pb-20">
  <Header />
  <Discount />
  <div className="relative inset-x-0 top-[50px]">
  <Patver />
  </div>
  
  <div className="w-full px-4 mt-16 block clear-both"> 
    <PriceSlider range={range} setRange={setRange} />
  </div>
    <div className="w-full max-w-[1240px] mx-auto px-4 md:px-[60px] mt-12">
    {filteredHouses.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredHouses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
    ) : (
      <div className="text-center py-12 text-gray-500 font-medium text-lg">
        Այս գնային տիրույթում ամառանոցներ չեն գտնվել:
      </div>
    )}
  </div>
</div>
<Texadrel/>
<Footer/>
</>
  )
}