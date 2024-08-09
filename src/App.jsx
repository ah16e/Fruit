import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Menus from './Components/Menus/Menus'
import Banner from './Components/Banner/Banner'
import Banner2 from './Components/Banner2/Banner2'
import Ahmed from './Components/Ahmed/Ahmed'
import Footer from './Components/Footer/Footer'



function App() {

  return (
    <>

        <main className='overflow-x-hidden'>
          <Navbar/>
            <Hero/>
            <Menus/>
            <Banner/>
            <Banner2/>
            <Ahmed/>
            <Footer/>
        </main>
    </>
  )
}

export default App
