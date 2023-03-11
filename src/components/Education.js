import React from "react";
import education from '../images/degree.png'
import "./Education.css";
export default function Education() {
  return (
    <div id="Temp_cmpnt">
      <div className="Temp-header">
        <img src={education} alt=""></img>
        <div>&nbsp;My Education </div>
      </div>
      <hr className="hline"/>
      <div className="Temp-box">
       
        <div className="box-item">
          <div className="circle">2018</div>
          <div className="line"></div>
          <div className="rect">
            <div className="info-item"> I completed schooling till 10th from Nirmala Convent Hight school , Nashik </div>
          </div>
        </div>

        <div className="box-item">
          <div className="circle">2018 to<br/>2020</div>
          <div className="line"></div>
          <div className="rect">
            <div className="info-item"> I did my 11th and 12th  from K.V.N.Naik College , Nashik </div>
          </div>
        </div>

        <div className="box-item">
          <div className="circle">2023</div>
          <div className="line"></div>
          <div className="rect">
            <div className="info-item"> I am currently pursuing my B.tech in Computer Engineering from Coep Pune </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
