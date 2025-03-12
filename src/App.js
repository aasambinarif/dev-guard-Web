import React from 'react';
import './App.css';

import 'swiper/css';

function App() {
  return (
    <div  className="Back">
      {/* Navigation Bar */}
    <div className="hero-container">
 

    <header class="header">
  <nav class="nav">
    <img src={require('./shape.png')} alt="Logo" class="logo" />

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

      {/* About Section */}
      <div className="about-us-container" id="aboutus">
    <div className="about-us-left">
        {/* Text Content to Appear on Hover */}
        <div className="text-content">
            <h2>5+</h2>
            <p>Years Experience</p>
        </div>
    </div>


    <div className="about-us-right">
        <h3>The Best Service Provider</h3>
        <p>
        DevGuards Solution is a premier digital marketing service provider, specializing in cutting-edge web development, search engine optimization (SEO), pay-per-click (PPC) advertising, and social media management. Our team of passionate and skilled professionals is dedicated to helping businesses enhance their online presence and achieve measurable growth. By utilizing advanced tools like Google My Business, Google Analytics, and Google Search Console, we ensure that your brand gains maximum visibility and stays ahead of the competition. Whether you need improved search rankings, high-converting PPC campaigns, or engaging social media content, our experts craft tailored strategies to meet your unique business needs.

Beyond marketing, we also provide graphic design services for social media, ensuring your brand’s visuals align with your business goals. Our creative team delivers visually appealing and compelling designs that captivate audiences and boost engagement. DevGuards Solution stands out as a reliable and results-driven digital solutions provider, committed to excellence and innovation. Whether you're a startup or an established enterprise, we are here to help you navigate the evolving digital landscape and achieve long-term success.
        </p>
    </div>
</div>




{/* Services Section */}
<div className="service-container" id="services">

  {/* Inner Wrapper for Proper Alignment */}
  <div className="service-inner-wrapper">

    {/* Services Heading at Top Center */}
    <h2 className="services-heading">Services</h2>

    {/* Card Container */}
    <div className="card-grid">

      {/* Card 1 */}
      <div className="service-box">
        <div className="service-box-icon">
          <img src={require('./profile.png')} alt="Profile Icon" />
        </div>
        <h3>UI/UX</h3>
        <p>We create exceptional digital marketing plans that align with your unique brand, ensuring every campaign resonates with your target audience. By understanding your business goals and market dynamics, we craft strategies that drive engagement and enhance brand visibility. </p>
        <div className="service-box-footer">UI/UX</div>
      </div>

      {/* Card 2 */}
      <div className="service-box">
        <div className="service-box-icon">
          <img src={require('./profile.png')} alt="Profile Icon" />
        </div>
        <h3>Web Development</h3>
        <p>We create exceptional digital marketing plans that align with your unique brand, ensuring every campaign resonates with your target audience. By understanding your business goals and market dynamics, we craft strategies that drive engagement and enhance brand visibility. </p>
        <div className="service-box-footer">Web Dev</div>
      </div>

      {/* Card 3 */}
      <div className="service-box">
        <div className="service-box-icon">
          <img src={require('./profile.png')} alt="Profile Icon" />
        </div>
        <h3>Android Development</h3>
        <p>We create exceptional digital marketing plans that align with your unique brand, ensuring every campaign resonates with your target audience. By understanding your business goals and market dynamics, we craft strategies that drive engagement and enhance brand visibility. </p>
        <div className="service-box-footer">Android</div>
      </div>

    </div>
  </div>
</div>






{/* Why Us Section */}
<section className="why-us" id="why-us">
  <h2 className="why-us-title">
    WHY <span>DEVGUARDS</span>?
  </h2>
  <div className="why-us-content">
    <div className="why-card">
      <div className="why-card-icon">
        <img src={require('./profile.png')} alt="Customisation" />
      </div>
      <h3 className="why-card-title">Customisation</h3>
      <p className="why-card-description">
        Tailored solutions to fit your unique needs and preferences.
      </p>
    </div>
    <div className="why-card">
      <div className="why-card-icon">
        <img src={require('./profile.png')} alt="Security" />
      </div>
      <h3 className="why-card-title">Security</h3>
      <p className="why-card-description">
        Robust security measures to protect your data and privacy.
      </p>
    </div>
    <div className="why-card">
      <div className="why-card-icon">
        <img src={require('./profile.png')} alt="Customer Support" />
      </div>
      <h3 className="why-card-title">Customer Support</h3>
      <p className="why-card-description">
        24/7 support to assist you whenever you need help.
      </p>
    </div>
  </div>
</section>



     {/* Testimonials Section */}
<section className="testimonials" id="testimonials">
  <h2 className="testimonials-title">
    <span>Testimonials</span>
  </h2>
  <div className="testimonials-content">
    <div className="testimonial-card">
      <div className="testimonial-card-icon">
        <img src={require('./profile.png')} alt="User" />
      </div>
      <h3 className="testimonial-card-title">John Doe</h3>
      <p className="testimonial-card-description">
        Outstanding service with top-notch security measures. Highly recommended!
      </p>
      <div className="testimonial-rating">
      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>

      </div>
    </div>

    <div className="testimonial-card">
      <div className="testimonial-card-icon">
        <img src={require('./profile.png')} alt="User" />
      </div>
      <h3 className="testimonial-card-title">Jane Smith</h3>
      <p className="testimonial-card-description">
        Customisation options are excellent, and support is super responsive.
      </p>
      <div className="testimonial-rating">
      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>

      </div>
    </div>

    <div className="testimonial-card">
      <div className="testimonial-card-icon">
        <img src={require('./profile.png')} alt="User" />
      </div>
      <h3 className="testimonial-card-title">Michael Lee</h3>
      <p className="testimonial-card-description">
        Security is robust and customer support is always there to help.
      </p>
      <div className="testimonial-rating">
      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>

      </div>
    </div>
  </div>
</section>


      {/* Contact Section */}
<section className="contact" id="contact">
  <h2 className="section-title">Contact Us</h2>
  <form className="contact-form">
    <div className="contact-left">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Email Account" />
      <input type="text" placeholder="Subject" />
    </div>
    <div className="contact-right">
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send Message</button>
    </div>
  </form>
</section>

    <footer>
      <p>&copy; 2025 DevGuards. All rights reserved.</p>
    </footer>
</div>
  );
}

export default App;
