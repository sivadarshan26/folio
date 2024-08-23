import React, { useState, useEffect } from 'react';
import Sivadarshan from '../assets/images/Sivadarshan.png';
import CroppedImg from '../assets/images/SivadarshanCropped.png'
import Header from '../components/Header';
import './Home.css'

const Home: React.FC = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='pages/home.tsx' className="flex flex-col items-center container mx-auto  pt-0 mt-0 md:p-8 md:pt-0 lg:p-12 lg:pt-0">
      {isAtTop ? (
        <>
          <Header />
          <div className="flex items-center space-x-4 w-full mt-4 transition-all duration-300 ease-in-out">
            <div id="name-container" className="flex flex-col w-4/5 text-center md:text-left">
              <h1
                id="name"
                className="md:text-5xl font-bold  text-white w-fit backdrop-blur-md"
                style={{ transition: 'all 0.3s ease-in-out' }}
              >
                Sivadarshan S K
              </h1>
              <div id="About Me" className="mt-4 p-3 bg-white/20 rounded-md shadow-md">
                <h2 className="text-xl md:text-2xl font-bold mb-4">About Me</h2>
                <p className="text-sm md:text-base lg:text-lg">
                  I completed my MCA degree at Sona College of Technology in Salem. I also have a BCA degree from Don Bosco College in Dharmapuri. 
                  My studies have given me a solid background in computer applications, and I've developed a strong interest in web development and UI/UX design.
                </p>
              </div>
            </div>
            <div
              id="img"
              className="flex justify-center items-center overflow-hidden rounded-full  
                         w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-gradient-to-tl from-white via-transparent to-transparent 
                         transition-transform duration-300 ease-in-out"
              style={{ transform: 'scale(1)' }}
            >
              <img
                src={Sivadarshan}
                alt="Sivadarshan"
                className="object-cover  h-full"
                style={{ transform: 'scale(1)', transition: 'transform 0.3s ease-in-out' }}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center  justify-between w-full sticky top-0 z-20  pt-0 transition-all duration-300 ease-in-out backdrop-blur-xl">
          <h1
            id="name"
            className="box text-white w-fit p-4 backdrop-blur rounded-md text-sm md:text-xl font-bold
                        bg-gradient-to-r from-gray-700/50 via-gray-800/40 to-gray-900/50 shadow-md"
            style={{ transition: 'all 0.3s ease-in-out' }}
          >
            Sivadarshan S K
          </h1>
          <div className='flex items-center justify-center'>
            <Header />
          </div>
          <div
            id="img"
            className="flex custom justify-center items-center overflow-hidden rounded-full 
                         w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-tl from-gray-700/70 via-transparent to-transparent 
                         transition-all duration-600 ease-in-out backdrop-blur"
            style={{ transform: 'scale(0.6)' }}
          >
            <img
              src={CroppedImg}
              alt="Sivadarshan"
              className=" object-cover h-full"
              style={{  transition: 'transform 0.3s ease-in-out' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
