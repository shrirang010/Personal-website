import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import navicon from '../images/navbar.png'
export default function Navbar() {

  const [collapseStatus,ChangecollapseStatus]=useState("false");
  

  function ChangeNavbar()
  {
    let navitems=["home","Contactme","Blog"] 
    if(collapseStatus === "true")
    {
      navitems.forEach((item,index)=>{
        document.getElementById(item).style.display="flex" 
      })
      ChangecollapseStatus("false")
      document.getElementsByClassName("navbarbox")[0].style.width="50%";
      document.getElementsByClassName("navbarbox")[0].style.borderRadius="200px";
      document.getElementsByClassName("navbarbox")[0].style.marginLeft="0%"
    }
    else if(collapseStatus === "false")
    {
      navitems.forEach((item,index)=>{
        document.getElementById(item).style.display="none" 
       })                                                    
      ChangecollapseStatus("true")
      document.getElementsByClassName("navbarbox")[0].style.width="10%"
      document.getElementsByClassName("navbarbox")[0].style.borderRadius="40%";
      document.getElementsByClassName("navbarbox")[0].style.marginLeft="40%"
    }
  }
  return (
    <div className='navbarbox'>
      <div        className ='navitem'         id="home">       Home        </div>
      <div        className ='navitem'         id="Contactme"> Contact me  </div>
      <div        className ='navitem'         id="Blog">       Blog        </div>
      <button onClick={ChangeNavbar} type='button'><img src={navicon} alt=""/></button>
    </div>
  )
}
