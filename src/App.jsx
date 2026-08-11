import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TerminalPreview from './components/TerminalPreview';
import WhyLeakX from './components/WhyLeakX';
import WhatILearned from './components/WhatLearned';
import Installation from './components/Installation';
import Roadmap from './components/Roadmap';
import AboutDeveloper from './components/AboutDeveloper';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

export default function App() {
   const isHomePage =
    window.location.pathname === "/" ||
    window.location.pathname === "";

  if (!isHomePage) {
    return <NotFound />;
  }
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TerminalPreview />
        <WhyLeakX />
        <WhatILearned />
        <Installation />
        <Roadmap />
        <AboutDeveloper />
      </main>
      <Footer />
    </>
  );
}
