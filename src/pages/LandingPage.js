import React from 'react'
import Header from '../components/header'
import SecondBanner from '../components/secondBanner'
import TopBanner from '../components/topBanner'
import Location from '../components/Location'
import Footer from '../components/footer'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className='containerAppPages'>
        <div className='containerSpaceApp'>
            <div className='gray'>
              <Header /> 
              <TopBanner />
              <SecondBanner /> 
              <Location /> 
              <Footer /> 
            </div>
        </div>
    </div>
  )
}

export default LandingPage