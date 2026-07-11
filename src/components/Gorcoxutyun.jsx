import React from 'react'

export default function Gorcoxutyun({ gorc }) {
  return (
    <div className="text-center items-center flex flex-col">
      <img
        className="w-[26px] h-[26px]"
        src={gorc.image}
        alt=""
      />

      <h1 className='text-[12px]'>{gorc.text}</h1>
    </div>
  )
}