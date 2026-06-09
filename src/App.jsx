import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tomorrow from './components/Tomorrow';
import HelpProgress from './components/HelpProgress';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import FAQs from './components/FAQs';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Tomorrow />
      <HelpProgress />
      <Services />
      <AboutUs />
      <Newsletter />
      <Footer />
      <FAQs />
    </div>
  );
}

export default App;