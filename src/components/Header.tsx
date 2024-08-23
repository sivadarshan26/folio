import React from 'react';
// import { Link } from 'react-router-dom';
import '.././index.css'

const Header: React.FC = () => {
  return (
    <header className='box px-5 mt-2 rounded-md flex justify-center py-3 sticky top-2  w-fit backdrop-blur
                         bg-gradient-to-r from-gray-700/50 via-gray-800/30 to-gray-900/50 shadow-md'>
    <nav>
      <ul className='flex space-x-4'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  );
};

export default Header;
