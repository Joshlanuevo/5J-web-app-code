import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Company from './components/Company';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import Mission from './components/Mission';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Mission />
      <Company />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
