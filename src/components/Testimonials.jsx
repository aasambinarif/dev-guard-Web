import React from 'react';
import '../styles/Testimonials.css';



function Testimonials() {
  return (
    
<div className="testimonial-container" id="testimonials">

<div className="testimonial-inner-wrapper">

  <h2 className="testimonials-heading">Testimonials</h2>

  <div className="card-grid">

    <div className="testimonial-box card-container">
      <div className="test-card-image">
        <img src={require('../assets/images/testpro.png')} alt="John Doe" />
      </div>
      <div className="test-card-content">
        <h3 className="testimonial-card-title">John Doe</h3>
        <p className="testimonial-card-description">Outstanding service with top-notch security measures. Highly recommended!</p>
        <div className="testimonial-rating">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
      </div>
    </div>

    <div className="testimonial-box card-container">
      <div className="test-card-image">
        <img src={require('../assets/images/testpro.png')} alt="Jane Smith" />
      </div>
      <div className="test-card-content">
        <h3 className="testimonial-card-title">Jane Smith</h3>
        <p className="testimonial-card-description">Customisation options are excellent, and support is super responsive.</p>
        <div className="testimonial-rating">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
      </div>
    </div>

    <div className="testimonial-box card-container">
      <div className="test-card-image">
        <img src={require('../assets/images/testpro.png')} alt="Michael Lee" />
      </div>
      <div className="test-card-content">
        <h3 className="testimonial-card-title">Michael Lee</h3>
        <p className="testimonial-card-description">Security is robust and customer support is always there to help.</p>
        <div className="testimonial-rating">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
      </div>
    </div>
  </div>
  
</div>
</div>
  );
}

export default Testimonials;
