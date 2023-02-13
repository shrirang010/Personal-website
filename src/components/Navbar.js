import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import navicon from '../images/navbar.png'
import PropTypes from "prop-types";


export default function Navbar(props) {

  
  // onClick = {()=> scrollto_component(Home_cmpnt)}
  return (
    <div className='navbarbox scrollarea' >
      <div        className ='navitem'         id="home">      <button    >         Home             </button> </div>
      <div        className ='navitem'         id="Contactme"> <button    >         Contact me       </button> </div>
      <div        className ='navitem'         id="Blog">      <button >                                                           Blog             </button> </div>
      <button type='button' onClick={props.ChangeNavbar}>            <img src={navicon} alt=""/>                                                                    </button>
    </div>
  )
}
