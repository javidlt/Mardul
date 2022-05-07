import React from 'react'
import image from '../images/fotoVeterinario.png'
import './teamSection.css'

function teamSection() {
  return (
    <div>
        <div className='UsBanner'>
                    <p className='subtitle'>Nosotros</p>
                    <div className='usTeamZone'>
                        <div className='teamMember'>
                            <div className='teamMemberContent'>
                                <img src={image} className='memberImg'></img>
                                {/* Name */}
                                <p className='memberName'>Martin</p>
                                {/* In charge of */}
                                <p className='memberPosition'>Veterinario</p>
                                {/* Description */}
                                <p className='memberDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                        <div className='teamMember'>
                            <div className='teamMemberContent'>
                                <img src={image} className='memberImg'></img>
                                {/* Name */}
                                <p className='memberName'>Dulce</p>
                                {/* In charge of */}
                                <p className='memberPosition'>Administración</p>
                                {/* Description */}
                                <p className='memberDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default teamSection