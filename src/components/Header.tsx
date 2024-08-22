import React from 'react';
// import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='px-5 mt-2 rounded-full flex justify-center py-3 sticky top-0 bg-black/20 w-fit backdrop-blur'>
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
