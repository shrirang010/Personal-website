import React from 'react'
import'./Hobbies.css'
import cycle from "../images/cycle.png"
import business from "../images/business.jpg"
import music from "../images/music.jpg"


export default function Hobbies() {
  return (
    <div className='mainheading-Hobbies'>
      <div className='Hobbiesbox-textheading'>Hobbies and interests</div>

      <div className='Hobbies-gridbox'>

        <div className='hobby-griditem'id="#h1" >
          <div className='hobby-imagebx'>
            <img src={cycle}  alt=""  />
          </div>
          <div className='hobby-textbx'>
            <div className="hoobby-textbx-heading">
              Cycling
            </div>
            <div className='hobby-textbx-info'>
              Cycling is fun ,it gives me joy,and freedom    
            </div>
          </div>
        </div>

        <div className='hobby-griditem' id="#h2" >
          <div className='hobby-imagebx2'>
            <img src={business} alt=""/>
          </div>
          <div className='hobby-textbx'>
            <div className='hoobby-textbx-heading'>
              Reading about Startups & Business 
            </div>
            <div className='hobby-textbx-info'>
                Getting to know about different facets of the business world is very fascinating 
                It helps me understand better how the large corporates function and how to run business 
            </div>
          </div>
        </div>

        <div className='hobby-griditem' id="#h3" >
          <div className='hobby-imagebx'>
            <img src={music}  alt=""/>
          </div>
          <div className='hobby-textbx'>
            <div className="hoobby-textbx-heading">
              Listening to music & podcasts
            </div>
            <div className='hobby-textbx-info'>
              I like listening to music,also I like Listening to podcasts
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
