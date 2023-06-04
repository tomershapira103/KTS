// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./app.js";


function Titles() {
  return (
    <div className="titles">
      <img src="./imgs/KTS-white-logo.png" className="logo"/>
      <h1 className="h1--titles">By Dr. Keren Tiberg-Shapira</h1>
      <h1 className="h1--titles">יישור שיניים בקשתיות שקופות</h1>
      <img src="./imgs/yolo.png" class="yolo"/>
    </div>
    )
}

function Contactbar() {
  return (
    <div className="contact_bar">
           <ul className="contact_icons_ul">
                  <li><a href="tel:+9729772767"><img src="./imgs/phone-icon.png" className="contact_buttons"/></a></li>
                  <li><a href="https://wa.me/9729772767?text=%D7%92%D7%9D%20%D7%90%D7%A0%D7%99%20%D7%A8%D7%95%D7%A6%D7%94%20%D7%97%D7%99%D7%95%D7%9A%20%D7%9E%D7%95%D7%A9%D7%9C%D7%9D%2C%20%D7%90%D7%99%D7%9A%20%D7%9E%D7%AA%D7%97%D7%99%D7%9C%D7%99%D7%9D%3F"><img src="./imgs/contact_via_whatsapp.png" className="contact_buttons"/></a></li>
                  <li><a href="https://www.instagram.com/kts.ortho"><img src="./imgs/contact_via_insta.png" className="contact_buttons"/></a></li>
                  <li><a href="https://www.facebook.com/profile.php?id=100083220517896"><img src="./imgs/contact_via_facebook.png" className="contact_buttons"/></a></li>
                  <li><a href="mailto:KTS.ortho@gmail.com?subject=גם אני רוצה חיוך מושלם :)&body=שלום, אשמח לקבל פרטים על הטיפול המתקדם שאתם מציעים"><img src="./imgs/contact_via_email.png" className="contact_buttons"/></a></li>
           </ul> 
      </div>
    )
}

function Videobackgrpund () {
  return  (
    <div>
      <video autoPlay muted loop playsInline className="background-video">
            <source src="./media/1084872961-hd.mov" type="video/mp4"/>
      </video>
    </div>
  )
} 


// function Menu() {
//   return (
//     <div id="menu">
//       <div className="w3-sidebar w3-bar-block w3-animate-right div--menulist" id="menuList">
//             <button className="w3-bar-item" onClick={document.getElementById("menuList").style.display = "none"}>סגור &times;</button>
//             <button className="w3-button w3-block w3-left-align w3-border-bottom" onClick="">מה השיטה</button>
//             <button className="w3-button w3-block w3-left-align w3-border-bottom" onClick="">מי הרופאה</button>
//             <button className="w3-button w3-block w3-left-align w3-border-bottom" onClick="">FAQ</button>
//             <button className="w3-button w3-block w3-left-align w3-border-bottom" onClick="">פרטים על המרפאה</button>
//             <button className="w3-button w3-block w3-left-align w3-border-bottom" onClick="">צור קשר</button>

//       </div>
//       <div className="w3-teal div--button" id="menuButton">
//             <button className="w3-button w3-yellow w3-text-black w3-xxxlarge w3-right" onClick={document.getElementById("menuList").style.display = "block"}>&#9776;</button>
//       </div>
//   </div>
//   )
// }

function App() {
    return (
      <div>
        <Titles />
        <Contactbar />
        <Videobackgrpund />
        {/* <Menu /> */}

      </div>
      )
  }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

// function openMenu() {
//   document.getElementById("menuList").style.display = "block";
// }

// function closeMenu() {
//   document.getElementById("menuList").style.display = "none";
// }