import React from 'react';
import '../styles/WhyUs.css';

function WhyUs() {
  return (
    
<div className="why-us-container" id="why-us">
  <div className="why-us-inner-wrapper">
    <h2 className="why-us-heading">WHY DEVGUARDS ?</h2>
    <div className="card-grid">
      <div className="why-box card-container">
        <div className="card-image">
          <img src={require('../assets/images/🦆 vector4.png')} alt="Customisation" />
        </div>
        <div className="why-card-content">
          <h3 className="why-card-title">Customisation</h3>
          <p className="why-card-description">We Create Exceptional Digital Marketing Plans That Align with your Unique Brands, Ensuring every Campaign resonates with Your target Audience.</p>
        </div>
      </div>
      <div className="why-box card-container">
        <div className="card-image">
          <img src={require('../assets/images/vector5.png')} alt="Security" />
        </div>
        <div className="why-card-content">
          <h3 className="why-card-title">Security</h3>
          <p className="why-card-description">We Create Exceptional Digital Marketing Plans That Align with your Unique Brands, Ensuring every Campaign resonates with Your target Audience.</p>
        </div>
      </div>
      <div className="why-box card-container">
        <div className="card-image">
          <img src={require('../assets/images/vector6.png')} alt="Customer Support" />
        </div>
        <div className="why-card-content">
          <h3 className="why-card-title">Customer Support</h3>
          <p className="why-card-description">We Create Exceptional Digital Marketing Plans That Align with your Unique Brands, Ensuring every Campaign resonates with Your target Audience.</p>
        </div>
      </div>
    </div>
  </div>
  <footer className='why-footer'><img src={require('../assets/images/slider.png')} alt="John Doe" /></footer>
</div>
  );
}

export default WhyUs;
