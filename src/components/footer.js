import React from 'react'
import facebookLogo from '../images/facebook-round.png'
import instagramLogo from '../images/black-instagram.png'
import whatsappLogo from '../images/whatsappiconlogo.svg'
import './footer.css'

function footer() {
  return (
    <div>
        <div className='footer'>
                <div className='copyRightSectionFooter'><p className='headerbuttons'>Clínica Veterinaria Mardul ©</p></div>
                <div className='actionSectionFooter'>
                  <a href="https://www.facebook.com/Veterinariamardul" target="_blank"><button className='headerbuttons'><img className="socialMediaLogo" src={facebookLogo} alt="link a veterinaria mardul cuenta facebook"></img></button></a>
                  <a href="https://instagram.com/veterinariamardul?igshid=YmMyMTA2M2Y=" target="_blank"><button className='headerbuttons'><img className="socialMediaLogo" src={instagramLogo} alt="link a veterinaria mardul cuenta instagram"></img></button></a>
                  <a href="https://wa.me/3328056871" target="_blank"><button className='headerbuttons2'><img className="socialMediaLogo" src={whatsappLogo} alt="link a veterinaria mardul chat whatsapp"></img></button></a>
                </div>
              </div>
    </div>
  )
}

export default footer