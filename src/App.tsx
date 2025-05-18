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
    <div className="font-inter text-slate-800 overflow-x-hidden">
      <Header />
      <Hero />
      <div className="px-4 sm:px-6 md:px-8">
        <RealTravelers />
        <PlanningProcess />
        <Testimonials />
        <div className="max-w-7xl mx-auto py-8 md:py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <WhatsappSupport />
          <HotelShowcase />
        </div>
        <SuccessStories />
        <BlogSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;