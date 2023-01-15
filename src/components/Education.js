import React from 'react'
import "./Education.css"
import cycle from "../images/cycle.png"
import school from "../images/school.png"
import college from "../images/college.png"
import nashik from "../images/Nashik.png"
export default function Education() {

  return (
      <div className='ed-box'>
        
        <div className='ed-box-txt'> My journey So far...</div>
            
        <div className='journey-bx' id='journeybx-odd'>
                <div className='journey-bx-txt'>
                 I was born and brought up in Nashik , a city in Maharashtra ,India  
                </div>
        
                <div className='journey-bx-img'>
                <img  src={nashik} alt=""/>
                </div>
        </div>

            
        <div className='journey-bx' id="journeybx-even">
                <div className='journey-bx-txt'>
                Completed my schooling and College till 12th there 
                </div> 
               
                <div className='journey-bx-img'>
                <img src={school}  alt=""/>
                </div>
        </div>  

            
        <div className='journey-bx' id="journeybx-odd">
                <div className='journey-bx-txt'>
                After 12th I choose  engineering and got into College of Engineering Pune (COEP) in Computer branch
                </div>
        
                <div className='journey-bx-img'>
                <img   src={college} alt=""/>
                </div>
        </div>


      </div>
  )
}
