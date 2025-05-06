import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RealTravelers from './components/RealTravelers';
import PlanningProcess from './components/PlanningProcess';
import Testimonials from './components/Testimonials';
import WhatsappSupport from './components/WhatsappSupport';
import HotelShowcase from './components/HotelShowcase';
import SuccessStories from './components/SuccessStories';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-slate-800">
      <Header />
      <Hero />
      <RealTravelers />
      <PlanningProcess />
      <Testimonials />
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8">
        <WhatsappSupport />
        <HotelShowcase />
      </div>
      <SuccessStories />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;