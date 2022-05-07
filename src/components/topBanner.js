import React from 'react'
import image from '../images/Dogcall.png'
import './topBanner.css'

function topBanner() {
  return (
    <div>
        <div className='topbanner'>
              <div className='Columnone'>
                <div className='columnonecontainer'>
                  <h4  className='topTextTopBanner'>CLINICA VETERINARIA MARDUL</h4>
                  <p className="topBannerh1">Bienvenido a Mardul, la veterinaria </p>
                  <p className='topBannerh2'>en dónde tu mascota también es la nuestra</p>
                  <a href="https://qrco.de/MARDUL" target="_blank"><button className="buttonTopBanner">Ve nuestras redes sociales</button></a>
                </div>
                
              </div>
              <div className='Columntwo'>
                <img className="topBannerImg" src={image}></img> 
                
              </div>
            </div>
    </div>
  )
}

export default topBanner