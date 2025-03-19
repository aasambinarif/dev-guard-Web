import React from 'react';
import '../styles/Hero.css';


function Hero() {
  return (
     
     <div className="hero-container">
 

     <header class="header">
   <nav class="nav">
     <img src={require('../assets/images/vector2.png')} alt="Logo" class="logo" />
 
     <input type="checkbox" id="menu-toggle" class="menu-toggle" />
     <label for="menu-toggle" class="menu-toggle-label">
       <span></span>
       <span></span>
       <span></span>
     </label>
 
     <ul class="nav-links">
       <li><a href="#home">Home</a></li>
       <li><a href="#aboutus">About Us</a></li>
       <li><a href="#services">Services</a></li>
       <li><a href="#why-us">Why Us</a></li>
       <li><a href="#testimonials">Testimonials</a></li>
       <li><a href="#contact" class="contact-link">Contact Us</a></li>
     </ul>
   </nav>
 </header>
 
 
 
 
       {/* Hero Section */}
       <section className="hero">
         <div className="hero-overlay">
           <div className="hero-content">
           <h1 className="hero-title">DevGuard <br /> Solution</h1>
             <p className="description">
             <b>DevGuard Solutions is a leading software service provider dedicated to delivering high-quality, <br/>
              scalable, and innovative software solutions. We specialize in custom software development,<br/>
               cloud computing, enterprise solutions, and IT consulting to<br/>
                help businesses streamline operations and achieve digital transformation.<br/>
                 With a focus on efficiency, security, and user-centric design,<br/>
                  our expert team ensures that clients receive tailored solutions that drive
                  <br/> growth and success. At DevGuard Solutions, we empower businesses with cutting-edge
                  <br/> technology to stay ahead in the competitive digital landscape. </b>
             </p>
             
             <a href="#aboutus" className="cta-button">Read More</a>
           </div>
         </div>
       </section>
     </div>
  );
}

export default Hero;
