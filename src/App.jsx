 import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Offer from './Components/Offer/Offer'
import Aboutus from './Components/AboutUs/Aboutus'
import Gallery from './Components/Gallery/Gallery'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/ContactUs/Contact'
import Footer from './Components/Footer/Footer'
 
 const App = () => {
   return (
     <div>
        <Navbar/>
        <Hero/>
        <Offer/>
        <Aboutus/>
        <Gallery/>
        <Testimonials/>
        <Contact/>
        <Footer/>
     </div>
   )
 }
 
 export default App