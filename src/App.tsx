import React from 'react';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import './app.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 w-full h-full mainbg -z-10"></div>

      <div className="relative z-0 overflow-auto">
        <main>
          <div className="sticky top-0 z-10">
            <Home />
          </div>
          <div id="about" className="pt-20"> {/* Adjust padding to avoid overlap with sticky */}
            <About />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="certifications">
            <Certifications />
          </div>
          <div id="contact" className="flex items-center justify-center">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
