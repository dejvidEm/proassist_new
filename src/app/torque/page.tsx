import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StickyCTA from './components/StickyCTA';
import DiagnosticsSection from './components/DiagnosticsSection';
import BrakesSection from './components/BrakesSection';
import TransmissionSection from './components/TransmissionSection';
import ReviewsSection from './components/ReviewsSection';
import AccidentReportSection from './components/AccidentReportSection';
import ServiceAreaSection from './components/ServiceAreaSection';
import InsuranceNumbersSection from './components/InsuranceNumbersSection';
import BookingSection from './components/BookingSection';

export default function TorquePage() {
  return (
    <div className="min-h-screen bg-workshop-white">
      <Header />
      <StickyCTA />
      <main>
        <HeroSection />
        <AboutSection />
        <div id="services">
          <DiagnosticsSection />
          <BrakesSection />
          <TransmissionSection />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <AccidentReportSection />
        <div id="service-area">
          <ServiceAreaSection />
        </div>
        <div id="insurers">
          <InsuranceNumbersSection />
        </div>
        <div id="booking">
          <BookingSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}