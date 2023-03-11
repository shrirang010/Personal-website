import React from 'react'
import  './Home.css'
export default function Home() {
  return (
    <div id="Home_cmpnt">
      <div className='mainheading-Home'>
        <div className='flexbx'>
            <div className="hiwave">
             <div className='hibox'>
              Hi ! 
             </div>
             <div className='wave'>
              👋 
             </div>
            </div>
            <div className='namebox1'>
                I'm 
            </div>
            <div className='namebox2'>
            Shrirang  
            </div>
            <div className='infobox'>
                <p>
                I'm a college student<br/>
                studying enginnering in Pune,India<br/>  
                I like cycling 🚲, listening to music🎵,podcasts🎙️ 
                </p> 
            </div>
        </div>
      </div>
    </div>
  )
}
