import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Featured from '../../Components/City/Featured'
import PropertyList from '../../Components/Property/PropertyList'
import FeaturedProperties from '../../Components/Rooms/FeaturedProperties'
import MailList from '../../Components/MailList/MailList'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='homeContainer'>
      <Featured/>
      <h1 className='homeTitle'>See properties</h1>
      <PropertyList/>
      <h1 className='homeTitle'>Some Special hotels</h1>
      <FeaturedProperties/>
      <MailList/>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
