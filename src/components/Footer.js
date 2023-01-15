import React from "react";
import "./Footer.css";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import mail from "../images/mail.png";
import github from "../images/github.png"
import clipboard from "../images/clipboard.png"
export default function Footer() {

  // const socials = [twitter,mail, github,linkedin ];
  function onclick_emailid(){
    let btn = document.getElementsByClassName("emailid")[0]
    btn.disabled=true
    setTimeout(function(){
      btn.disabled=false
    },1000)
    console.log("hello world")
    let element = document.getElementsByClassName("mail-container")[0]
    let text = element.innerHTML

    navigator.clipboard.writeText(text)
    let popup = document.createElement("div")
    popup.innerHTML="copied to clipboard ✅"
    popup.style.backgroundColor="#3C79F5  "
    popup.style.color="#FBF1D3"
    popup.style.width="15%"
    popup.style.borderRadius="10px"
    popup.margin="1em"
    popup.style.fontFamily="Arial"
    element.append(popup)

    //clearing popup div
    setTimeout(function () {popup.remove()}, 1000); 
  }
  const Socialobject = {
    twitter :[twitter,"https://twitter.com/Shrirang0010"],
    mail :[mail,"mailto:shrirangthatsit10@gmail.com"],
    github :[github,"https://github.com/shrirang010?tab=repositories"],
    linkedin :[linkedin,"https://www.linkedin.com/in/shrirang-patil-75725920b/"]
  };
  let sociallink =  Object.values(Socialobject);

  return (
    <div className="footerbox">
      <div className="sub-footerbox">
        <div className="Socialsbox">
          <div className="mail-container">
            <div>You can reach out to me at :&nbsp;</div>  
            <button className="emailid"onClick={onclick_emailid}>shrirangthatsit10@gmail.com<img src={clipboard} alt="" style={{width:"30px",marginLeft:"3px"}}/></button>
          </div>
          <h2 >Socials</h2>
          { 
            sociallink.map((el) => {
                // el is value of element in socialicons
              return (<a href={el[1]} target ="_blank"> <img src={el[0]} alt="" style={{width:"50px"}} /></a>)
            })
          }
        </div>
        <div className="Otherstuff-box">
          <div className="footerquote">Where there is a will there is a way !</div>
        </div>
      </div>
    </div>
  );
}
