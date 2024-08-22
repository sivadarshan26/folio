import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <>
    <div>
      <div className='flex justify-center w-full sticky top-0'>
      <Header />
      </div>
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="certifications">
          <Certifications />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
      </div>
    </>
  );
};

export default App;
