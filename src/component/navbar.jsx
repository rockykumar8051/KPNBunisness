import {React } from "react";
import Counter from "./conter";
import Carrer from "./carrer";
import Footer from "./footer";
import Textimonial from "./textimonial";
import OurService from "./our_service";
import Contact from "./contact";
import "./style.css";
import { useState } from "react";

function Navbar() {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  console.log(colorChange);

  return (
    <>
      <header>
        <div className="heading_content" data-aos="fade-right"
     
     data-aos-easing="ease-in-sine"  data-aos-duration="1000">
          <h1>Telecommunications & Consultancy Services</h1>
          <p>
            Looking for targeted B2B solutions to generate qualified leads and
            achieve sustainable growth? Look no further than KPN Business
            Solutions! We execute global campaigns with reliability and
            professionalism. Count on us for Content syndication, B2B marketing,
            Lead generation, Appointment setting, Email/Chat/Voice Support, and
            Account-based marketing
          </p>
        </div>
      </header>
      <nav
        className="navbar navbar-expand-sm fixed-top navbar-light "
        // style={ { background: colorChange ? 'rgba(42, 42, 44, 0.7)' : 'none' } } 
        style={ colorChange ? { background:'rgba(42, 42, 44, 0.8)' ,  boxShadow:
        "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)"} : {background : 'none'}}
      >
        <div className="container">
          <a className="navbar-brand logo" href="/" >
           <img src="img/logo2.png" alt="logo"  />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarRightAlignExample"
            aria-controls="navbarRightAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" style={{ color: "#fff" }}></i>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarRightAlignExample"
          
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="#ourserice">
                  Our Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
      <div className="sticky-top  hidden-spacer"> </div>
      <div id="ourserice"> <OurService /></div>
  
      
     
      <Counter />
      <Textimonial />
      <Carrer />
      <div id="contact"></div>
      <Contact />
      <div id="about">  <Footer /></div>
     
    </>
  );
}

export default Navbar;
