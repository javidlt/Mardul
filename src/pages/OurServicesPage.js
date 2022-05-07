import React, { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import dogImage1 from '../images/fotocollage3.jpg'
import dogImage2 from '../images/fotocollage6.jpg'
import cat1 from '../images/gato1.jpg'
import cat2 from '../images/gato2.jpg'
import bird1 from '../images/pajaro1.jpeg'
import bird2 from '../images/pajaro2.jpg'
import reptile1 from '../images/reptil1.jpg'
import reptile2 from '../images/reptil2.jpg'
import './OurServicesPage.css'

function OurServicesPage() {
  const [active, setActive] = useState("Perros");

    const offeredServicesDogs = () => {
        return (
            <div className='servicesSection'>
                <div className='Images'>
                    <Carousel variant="dark">
                        <Carousel.Item interval={1000}>
                            <img className="d-block carouselImages" src={dogImage1} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img className="d-block carouselImages" src={dogImage2} alt="First slide"/>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='servicesZone'>
                    <p className='memberName'>Servicios Para Perros</p>
                    <div className='displaySpecificServices'>
                        <ul>
                            <li className='serviceName'><p className='serviceName'>Corte de pelo</p></li>
                            <li className='serviceName'><p className='serviceName'>Desparasitar</p></li>
                            <li className='serviceName'><p className='serviceName'>Baño</p></li>
                            <li className='serviceName'><p className='serviceName'>Consulta</p></li>
                            <li className='serviceName'><p className='serviceName'>Cirugías de todo tipo</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    const offeredServicesCats = () => {
        return (
            <div className='servicesSection'>
            <div className='Images'>
                <Carousel variant="dark">
                    <Carousel.Item interval={1000}>
                        <img className="d-block carouselImages" src={cat1} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className="d-block carouselImages" src={cat2} alt="First slide"/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='servicesZone'>
                <p className='memberName'>Servicios Para Gatos</p>
                <div className='displaySpecificServices'>
                    <ul>
                        <li className='serviceName'><p className='serviceName'>Corte de pelo</p></li>
                        <li className='serviceName'><p className='serviceName'>Desparasitar</p></li>
                        <li className='serviceName'><p className='serviceName'>Baño</p></li>
                        <li className='serviceName'><p className='serviceName'>Consulta</p></li>
                        <li className='serviceName'><p className='serviceName'>Cirugías de todo tipo</p></li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }

    const offeredServicesBirds = () => {
        return (
            <div className='servicesSection'>
            <div className='Images'>
                <Carousel variant="dark">
                    <Carousel.Item interval={1000}>
                        <img className="d-block carouselImages" src={bird1} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className="d-block carouselImages" src={bird2} alt="First slide"/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='servicesZone'>
                <p className='memberName'>Servicios Para Aves</p>
                <div className='displaySpecificServices'>
                    <ul>
                        <li className='serviceName'><p className='serviceName'>Desparasitar</p></li>
                        <li className='serviceName'><p className='serviceName'>Baño</p></li>
                        <li className='serviceName'><p className='serviceName'>Consulta</p></li>
                        <li className='serviceName'><p className='serviceName'>Cirugías de todo tipo</p></li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }

    const offeredServicesReptiles = () => {
        return (
            <div className='servicesSection'>
            <div className='Images'>
                <Carousel variant="dark" className='carousel'>
                    <Carousel.Item interval={1000}>
                        <img className="d-block carouselImages" src={reptile1} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className="d-block carouselImages" src={reptile2} alt="First slide"/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='servicesZone'>
                <p className='memberName'>Servicios Para Reptiles</p>
                <div className='displaySpecificServices'>
                    <ul>
                        <li className='serviceName'><p className='serviceName'>Consulta</p></li>
                        <li className='serviceName'><p className='serviceName'>Cirugías de todo tipo</p></li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }

  return (
    <div className='containerAppPages'>
        <div className='containerSpaceApp'>
            <div className='gray'>
                <Header />
                <div className='ourServices'>
                    <div className='selectKindOfServices'>
                        <button className='buttonKinfOfService' onClick={() => setActive("Perros")} style={{color: active === "Perros"  && "#07964f"}}>Perros</button>
                        <button className='buttonKinfOfService' onClick={() => setActive("Gatos")} style={{color: active === "Gatos"  && "#07964f"}}>Gatos</button>
                        <button className='buttonKinfOfService' onClick={() => setActive("Aves")} style={{color: active === "Aves"  && "#07964f"}}>Aves</button>
                        <button className='buttonKinfOfService' onClick={() => setActive("Reptiles")} style={{color: active === "Reptiles"  && "#07964f"}}>Reptiles</button>
                    </div>
                    <div className='displayServices'>
                        {active === "Perros" && offeredServicesDogs()}
                        {active === "Gatos" && offeredServicesCats()}
                        {active === "Aves" && offeredServicesBirds()}
                        {active === "Reptiles" && offeredServicesReptiles()}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default OurServicesPage