import React from 'react';
import './App.css';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'swiper/css';

function App() {
  return (
    <div  className="Back">
      <Hero />
      <AboutUs />
      <Services />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
</div>
  );
}

export default App;

