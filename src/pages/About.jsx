import React from 'react'
import Header from '../components/header/header'
import Texekutyun from './Texekutyun'
import Texadrel from '../components/Texadrel'
import Footer from '../components/Footer'
export default function About() {
  return (
    <>
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
    <Header/>
    </div>
    <Texekutyun/>
    <div className="relative inset-x-0 top-[120px]">
    <Texadrel/>
    </div>
    <div className="relative inset-x-0 top-[120px]">
    <Footer/>
    </div>
    </>
)
}
