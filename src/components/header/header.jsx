import React from 'react'
import Icons from './icons'
import Nav from './nav'
import Searc from './searc'
import Logo from './logo'
export default function header() {
  return (
    <header className='header'>
        <Logo/>
        <Nav/>
        <div className="div3">
        <Icons/>
        <div className="div5">
        <Searc/>
        </div>
        </div>
    </header>
  )
}
