import React from 'react';
import Header from '../components/header/header'; 
import Footer from '../components/Footer';
import Texadrel from '../components/Texadrel';
import HouseCard from '../components/HouseCard';
import { useFavoritesStore } from '../components/useFavoritesStore';
import { housData } from '../components/HousData'; 

export default function Favorites() {
  const favorites = useFavoritesStore((state) => state.favorites);
  const favoriteHouses = housData.filter((house) => 
    favorites.includes(house.id)
  );

  return (
    <>
      <Header />
      
      <div className="max-w-[1200px] mx-auto px-4 py-8 min-h-[60vh] mt-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b pb-4">
          Իմ հավանած տները ({favoriteHouses.length})
        </h2>

        {favoriteHouses.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-gray-300 mb-4">
              <i className="fa-regular fa-heart text-6xl text-gray-400"></i>
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">
              Ձեր հավանածների ցուցակը դատարկ է
            </h3>
            <p className="text-gray-400 max-w-sm">
              Գլխավոր էջում սեղմեք սրտիկի նշանը՝ տներն այստեղ տեսնելու համար։
            </p>
          </div>
        ) : (
          // Եթե կան սրտիկված տներ, ցուցադրում ենք դրանք 3 սյունակով (grid)
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteHouses.map((house) => (
              <HouseCard key={house.id} house={house} />
            ))}
          </div>
        )}
      </div>

      <Texadrel />
      <Footer />
    </>
  );
}