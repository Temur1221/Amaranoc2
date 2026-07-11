import React from 'react';
import { useParams } from 'react-router-dom';
import { housData } from '../components/HousData'; // Սա կուղղի import-ի սխալը
import { propertyImagesData } from '../components/PropertyImages';
import Header from '../components/header/header';
import Texadrel from '../components/Texadrel';
import Footer from '../components/Footer';

export default function PropertyDetail() {
  const { id } = useParams();
  const property = Array.isArray(housData) ? housData.find((item) => item.id === Number(id)) : null;
  const galleryImages = propertyImagesData && propertyImagesData[id] ? propertyImagesData[id] : [];
  const finalImages = galleryImages.length >= 5 ? galleryImages : Array(5).fill(property.image);
  return(
  <>
    <Header/>
    <div className="font-sans text-[#101623] bg-white min-h-screen pb-24 relative inset-x-0 left-[90px]">
      
      <div className="max-w-[1200px] mx-auto px-4 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-[250px] md:h-[420px]">
          <div className="md:col-span-2 h-full overflow-hidden rounded-l-xl">
            <img src={finalImages[0]} alt="Main" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
            <img src={finalImages[1]} alt="Sub 1" className="w-full h-full object-cover" />
            <img src={finalImages[2]} alt="Sub 2" className="w-full h-full object-cover rounded-tr-xl" />
            <img src={finalImages[3]} alt="Sub 3" className="w-full h-full object-cover" />
            <div className="relative w-full h-full">
              <img src={finalImages[4]} alt="Sub 4" className="w-full h-full object-cover rounded-br-xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 relative inset-x-0 top-[20px]">
          <div className="border h-[250px] border-gray-200 rounded-[12px] p-5 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Հայտարարության մասին</h3>
          <div className="space-y-3.5 text-sm">
            <div className="flex justify-between py-1.5 border-b border-gray-100">
              <span className="text-gray-500 flex"><img className='w-[15px]' src="	https://amaranoc.am/images/code.svg"/> Կոդ</span>
              <span className="font-semibold text-gray-800">AM{property.id}91</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-gray-100">
              <span className="text-gray-500 flex"><img className='w-[15px]' src="https://amaranoc.am/images/location-outlined.svg"/> Հասցե</span>
              <span className="font-semibold text-gray-800">{property.location}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-gray-100">
              <span className="text-gray-500 flex"><img className='w-[15px]' src="https://amaranoc.am/images/overnight.svg" alt="" /> Գիշերակաց</span>
              <span className="font-semibold text-gray-800">Այո</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-gray-100">
              <span className="text-gray-500 flex"><img className='w-[15px]' src="https://amaranoc.am/images/building-area.svg" alt="" /> Շինության մակերես</span>
              <span className="font-semibold text-gray-800">20 քմ</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-gray-100">
              <span className="text-gray-500 flex"><img className='w-[15px]' src="	https://amaranoc.am/images/common-area.svg" alt="" /> Ընդհանուր մակերես</span>
              <span className="font-semibold text-gray-800">1700 քմ</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-gray-100">
              <span className="text-gray-500 flex"><i className="fa-solid fa-people-group text-orange-500"></i> Մարդկանց թույլատրելի քանակ</span>
              <span className="font-semibold text-gray-800">{property.guests} անձ</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-gray-100">
              <span className="text-gray-500 flex"><img className='w-[15px]' src="https://amaranoc.am/images/rooms-count.svg" alt="" /> Սենյակների քանակ</span>
              <span className="font-semibold text-gray-800">2 սենյակ</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-gray-100">
              <span className="text-gray-500 flex"><img className='w-[15px]' src="	https://amaranoc.am/images/bathrooms-count.svg" alt="" /> Սանհանգույցների քանակ</span>
              <span className="font-semibold text-gray-800">3</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-gray-500 flex"><img className='w-[15px]' src="https://amaranoc.am/images/pool.svg"/> Լողավազան</span>
              <span className="font-semibold text-green-600">Բաց</span>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-[12px] shadow-sm overflow-hidden h-fit">
          <h3 className="text-md font-bold text-gray-900 p-4 bg-gray-50 border-b border-gray-100">Նշեք Ձեր ցանկալի օրերը</h3>
          
          <div className="bg-orange-400 text-white h-[40px] text-center font-bold py-2.5 flex justify-between px-6 items-center">
            <button className="hover:opacity-80">‹</button>
            <span className="uppercase tracking-wider text-sm">Հունիս</span>
            <button className="hover:opacity-80">›</button>
          </div>

          <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-400 py-3 bg-gray-50 border-b border-gray-100">
            <div>երկ</div><div>երեք</div><div>չոր</div><div>հնգ</div><div>ուրբ</div><div className="text-orange-400">շբթ</div><div className="text-orange-400">կիր</div>
          </div>

          <div className="grid grid-cols-7 text-center gap-y-3.5 py-4 text-sm font-medium text-gray-700">
            <div className="text-gray-300">1</div><div className="text-gray-300">2</div><div className="text-gray-300">3</div><div className="text-gray-300">4</div><div>5</div><div>6</div><div>7</div>
            <div>8</div><div>9</div><div>10</div><div>11</div><div>12</div><div>13</div><div>14</div>
            <div>15</div><div>16</div><div>17</div><div>18</div><div>19</div><div>20</div><div>21</div>
            <div>22</div><div>23</div><div>24</div><div>25</div><div>26</div><div>27</div><div>28</div>
            <div>29</div><div>30</div><div className="text-gray-300">1</div><div className="text-gray-300">2</div><div className="text-gray-300">3</div><div className="text-gray-300">4</div><div className="text-gray-300">5</div>
          </div>
        </div>

      </div>
    </div>
    <Texadrel/>
    <Footer/>
  </>
  );
}