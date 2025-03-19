import React from 'react';
import '../styles/AboutUs.css';

function AboutUs() {
  return (
   
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
  );
}

export default AboutUs;
