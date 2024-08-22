import React from 'react';
import Sivadarshan from '../assets/Sivadarshan.png';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center p-8 space-y-6 md:space-y-0 md:space-x-20'>
      <div className="text-center md:text-left w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sivadarshan S K</h1>
        <p className="text-xl md:text-2xl mb-6">MCA Student | Web Developer | UI/UX Designer</p>
        {/* <div className="mt-6">
          <a href="https://github.com/sivadarshan26" className="text-lg md:text-xl mx-2 hover:underline">GitHub</a>
          <a href="https://linkedin.com" className="text-lg md:text-xl mx-2 hover:underline">LinkedIn</a>
          <a href="mailto:sivadarshan2270@gmail.com" className="text-lg md:text-xl mx-2 hover:underline">Email</a>
        </div> */}

        <div id='About Me' className='mt-4 p-3 bg-white/20 rounded-md shadow-md'>
          <h2 className="text-xl md:text-2xl font-bold mb-4">About Me</h2>
          <p className="text-sm md:text-base lg:text-lg">
            I completed my MCA degree at Sona College of Technology in Salem. I also have a BCA degree from Don Bosco College in Dharmapuri. My studies have given me a solid background in computer applications, and I've developed a strong interest in web development and UI/UX design.
          </p>
        </div>
      </div>
      
      <div className="w-60 md:w-72 bg-gradient-to-t from-white/70 via-transparent to-transparent rounded-full flex justify-center items-center overflow-hidden">
        <img src={Sivadarshan} alt="Sivadarshan" className="h-60 md:h-72" />
      </div>
    </div>
  );
};

export default Home;
