import React from 'react'
import Gorcoxutyun from './Gorcoxutyun'

const gorcoxutyunData = [
  {
    image: "https://api.amaranoc.am/service.svg",
    text: "Սպասարկում"
  },
  {
    image: "https://api.amaranoc.am/services1.svg",
    text: "Շոու"
  },
  {
    image: "https://api.amaranoc.am/services2.svg",
    text: "Միջոցառումներ"
  },
    {
    image: "	https://api.amaranoc.am/services3.svg",
    text: "Տեխնիկա"
  },
    {
    image: "https://api.amaranoc.am/services4.svg",
    text: "Օրավարձով գույք"
  },
  
]

export default function Gorcoxutyunner() {
  return (
    <>
    <div className="flex justify-evenly items-center border-t border-b border-gray-300 py-5 h-[80px]">

      {gorcoxutyunData.map((element, index) => (
          <Gorcoxutyun
          key={index}
          gorc={element}
          />
        ))}
        </div>
    </>
  )
}