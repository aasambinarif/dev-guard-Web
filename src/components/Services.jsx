import React from 'react';
import '../styles/Services.css';


function Services() {
  return (
    
<div className="service-container" id="services">

  
<div className="service-inner-wrapper">

 
  <h2 className="services-heading">Services</h2>


  <div className="card-grid">

   
    <div className="service-box card-container">
    
      <div className="s-card-image">
        <img src={require('../assets/images/Vector.png')} alt="UI/UX Design" />
      </div>
      
      <div className="card-content">
        
        <p>We create exceptional digital marketing plans that align with your unique brand, ensuring every campaign resonates with your target audience. By understanding your business goals and market dynamics, we craft strategies that drive engagement and enhance brand visibility.</p>
        <div className="service-box-footer">UI/UX</div>
      </div>
    </div>

  
    <div className="service-box card-container">
     
      <div className="s-card-image">
        <img src={require('../assets/images/vector2.png')} alt="Web Development" />
      </div>
      <div className='card-border'>
      <div className="card-content">
        
        <p>We create exceptional digital marketing plans that align with your unique brand, ensuring every campaign resonates with your target audience. By understanding your business goals and market dynamics, we craft strategies that drive engagement and enhance brand visibility.</p>
        <div className="service-box-footer">Web Dev</div>
      </div>
      </div>
    </div>

    
    <div className="service-box card-container">
     
      <div className="s-card-image">
        <img src={require('../assets/images/vector3.png')} alt="Android Development" />
      </div>
      
      <div className="card-content">
       
        <p>We create exceptional digital marketing plans that align with your unique brand, ensuring every campaign resonates with your target audience. By understanding your business goals and market dynamics, we craft strategies that drive engagement and enhance brand visibility.</p>
        <div className="service-box-footer">Android</div>
      </div>
    </div>
  </div>
  <a href="#why-us" className="cta-button">Why Us</a>
</div>
</div>
  );
}

export default Services;
