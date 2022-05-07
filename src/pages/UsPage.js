import React from 'react'
import Header from '../components/header'
import TeamSection from '../components/teamSection'
import Footer from '../components/footer'
import image from '../images/fotoVeterinario.png'
import './UsPage.css'

function UsPage() {
  return (
    <div className='containerAppPages'>
        <div className='containerSpaceApp'>
            <div className='gray'>
                <Header />
                <TeamSection />
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default UsPage