import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Team from '@/components/Team';
import Insights from '@/components/Insights';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const scrollToInitialSection = () => {
      const sectionId = window.location.hash.slice(1);
      if (sectionId) document.getElementById(sectionId)?.scrollIntoView({ behavior: 'instant' });
    };
    if (document.readyState === 'complete') {
      scrollToInitialSection();
      return;
    }
    window.addEventListener('load', scrollToInitialSection, { once: true });
    return () => window.removeEventListener('load', scrollToInitialSection);
  }, []);

  return (
     <div className="min-h-screen bg-blue-50 text-gray-900 font-sans">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Insights />
      <Contact />
      <Footer />
    </div>
  );
}
