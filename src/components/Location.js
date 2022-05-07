import React from 'react'
import './Location.css'

function Location() {
  return (
    <div>
        <div className='locationContactInfo'>
              <div className='infoZone'>
                <p className="topBannerInfoZOne">Nuestra ubicación:</p>
                <p className='topBannerh2'>Av. Acueducto 3485, <br />Jardines del Valle, 45138 Zapopan, Jal.</p>
                <p className="topBannerInfoZOne" >Contacto:</p>
                <p className='topBannerh2'>33 2805 6871</p>
                <a href="https://wa.me/3328056871" target="_blank"><button className="buttonTopBanner">Escribenos a nuestro whatsapp</button></a> 
              </div>
              <div className='mapdisplay'>
                {/* <img sr={image} className='mapZone'></img> */}
                <div className="mapZone"><div className="gmap_canvas"><iframe width="100%" height="550vh" id="gmap_canvas" src="https://maps.google.com/maps?q=Av.%20Acueducto%203485,%20Jardines%20del%20Valle,%2045138%20Zapopan,%20Jal.&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
              </div>
            </div>
    </div>
  )
}

export default Location