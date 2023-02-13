import './App.css';
import Home from './components/Home';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import Education from './components/Education';
import Navbar from './components/Navbar';
import React from 'react'
import { useState } from 'react'
function App() {

  document.title="Shrirang"

  const [collapseStatus,ChangecollapseStatus]=useState("false");
  const ChangeNavbar=()=>
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
  
  window.addEventListener("scroll", (event) => {
    let scroll = window.scrollY;
    { console.log("executing...!")  
    if(scroll < 200)
      ChangecollapseStatus("true")
      {ChangeNavbar()}
    }

    console.log(scroll)
});
  return (
    
    <div className="App "id="holder">
      <div className='navbar'>
        <Navbar ChangeNavbar= {ChangeNavbar} />
      </div>
      <Home className="homeclass" />
      <Hobbies />
      <Education/>
      <Footer />
    </div>
  
  );
}

export default App;
