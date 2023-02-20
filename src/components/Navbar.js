import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import navicon from '../images/navbar.png'
import PropTypes from "prop-types";
import ScrollIntoView from 'react-scroll-into-view';


export default function Navbar(props) {

    const scrollto_home=()=> {
      var element=document.getElementById("Home_cmpnt")
      element.scrollIntoView({ behavior: 'smooth' });
      }

    const scrollto_footer=()=> {
      var element=document.getElementById("Footer_cmpnt")
      element.scrollIntoView({ behavior: 'smooth' });
      }   

  return (
    <div className='navbarbox scrollarea' >
      <div        className ='navitem'         id="home">      <button    onClick={scrollto_home}>         Home             </button> </div>
      <div        className ='navitem'         id="Contactme"> <button    onClick={scrollto_footer}>       Contact me       </button> </div>
      {/* <div        className ='navitem'         id="Blog">                                                                 Blog              </div> */}
      <button type='button' onClick={props.ChangeNavbar}>            <img src={navicon} alt=""/>                                                                    </button>
    </div>
  )
}
