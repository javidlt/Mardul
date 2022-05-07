import React, { useState } from 'react'
import { NavLink, Link} from 'react-router-dom';
import facebookLogo from '../images/facebook-round.png'
import instagramLogo from '../images/black-instagram.png'
import whatsappLogo from '../images/whatsappiconlogo.svg'
import './header.css'

import { Offcanvas } from 'react-bootstrap'

const Header = () => {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    
         <header>
           <div className="App-header">
        {/* Sections */}
            <div className='headerSection1'>
                <button className="headerbuttons moreOptions" type="button " onClick={handleShow}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                </button>
                <Offcanvas show={show} onHide={handleClose} className="ofcanvasWidth"> 
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><Link to="/" style={{textDecoration:"none"}} ><p>Mardul</p></Link></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='actionButton2'>
                <Link to="/Servicios"><button className='headerbuttons'>Nuestros servicios</button></Link>
                <Link to="/Nosotros"><button className='headerbuttons'>Nosotros</button></Link>
            </div>
        </Offcanvas.Body> 
      </Offcanvas> 
                <div className='actionsBigScreen'>
                  <Link to="/Servicios"><button className='headerbuttons'>Nuestros servicios</button></Link>
                  {/* Page */}
                  <Link to="/Nosotros"><button className='headerbuttons'>Nosotros</button></Link>
                </div>
             </div>
            {/* logo */}
            <div className='headerSection2'>
              <Link to="/" style={{textDecoration:"none"}} ><p className='logo'>Mardul</p></Link>
            </div>
            {/* social media */}
            <div className='headerSection3'>
                <a href="https://www.facebook.com/Veterinariamardul" target="_blank"><button className='headerbuttons'><img className="socialMediaLogo" src={facebookLogo} alt="link a veterinaria mardul cuenta facebook"></img></button></a>
                <a href="https://instagram.com/veterinariamardul?igshid=YmMyMTA2M2Y=" target="_blank"><button className='headerbuttons'><img className="socialMediaLogo" src={instagramLogo} alt="link a veterinaria mardul cuenta instagram"></img></button></a>
                <a href="https://wa.me/3328056871" target="_blank"><button className='headerbuttons2'><img className="socialMediaLogo" src={whatsappLogo} alt="link a veterinaria mardul chat whatsapp"></img></button></a>
            </div>
            </div>
      </header>
    
  )
}

export default Header