import React from 'react';
import Background from '../components/Background'; 
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import CoursesSection from '../components/CoursesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection'; // <--- Nova Seção
import Footer from '../components/Footer';         // <--- Footer (Estrutura)

import plateImg from '../assets/images/plate.png';
import plateBg from '../assets/images/plate-bg.jpg';
import logo from '../assets/images/logo.png'; 

function Home() {
  return (
    <div className="bg-[#080808]">
      
      <main className="relative w-full h-screen overflow-hidden selection:bg-red-900 selection:text-white">
        <Background bgImage={plateBg} />
        <div className="absolute top-0 left-0 w-full z-50">
            <Header logoSrc={logo} />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <HeroSection plateImage={plateImg} alt="Prato Gourmet Cheff Instituto" />
        </div>
      </main>

      <AboutSection />
      
      <CoursesSection />
      
      {/* Testimonials tem z-20 e rounded-b */}
      <TestimonialsSection />

      {/* CTA tem z-10 e margem negativa para entrar embaixo do Testimonials */}
      <CTASection />

      {/* Footer tem z-20, margem negativa e rounded-t para cobrir o final da CTA */}
      <Footer />

    </div>
  );
}

export default Home;