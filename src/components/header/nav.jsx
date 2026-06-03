import React from 'react'
import { Link } from 'react-router-dom' 

export default function Navbar() {
  return (
    <ul className='ul'>
      <li className='li1'>
        <Link to="/">Գլխավոր</Link>
      </li>
      <li className='li2'>
        <Link to="/sale">Զեղչեր</Link>
      </li>
      <li>
        <Link to="/service">Ծառայություններ</Link>
      </li>
      <li>
        <Link to="/about">Մեր մասին</Link> 
      </li>
    </ul>
  )
}