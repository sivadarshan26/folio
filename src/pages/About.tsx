import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJs, FaFigma, FaPaintBrush } from 'react-icons/fa';
import { SiMysql, SiMicrosoftword, SiMicrosoftexcel, SiLinux, SiAdobe } from 'react-icons/si';

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-6 md:p-8 lg:p-12">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>

      <div id='skills' className='bg-white/20 p-3 rounded-md shadow-md'>
        <ul className="list-none space-y-2 text-sm md:text-base lg:text-lg">
          <li className="flex items-center">
            <FaHtml5 className="mr-2 text-orange-500" /> HTML / 
            <FaCss3Alt className="ml-2 mr-2 text-blue-500" /> CSS / 
            <FaReact className="ml-2 mr-2 text-blue-600" /> React JS / 
            <FaNodeJs className="ml-2 text-green-600" /> Node.js
          </li>
          <li className="flex items-center">
            <FaPython className="mr-2 text-blue-400" /> Python
          </li>
          <li className="flex items-center">
            <FaJs className="mr-2 text-yellow-400" /> JavaScript
          </li>
          <li className="flex items-center">
            <SiMysql className="mr-2 text-blue-600" /> MySQL
          </li>
          <li className="flex items-center">
            <FaPaintBrush className="mr-2 text-gray-600" /> Poster Designing
          </li>
          <li className="flex items-center">
            <SiMicrosoftword className="mr-2 text-blue-500" /> MS Word / 
            <SiMicrosoftexcel className="ml-2 text-green-600" /> Excel Processing
          </li>
          <li className="flex items-center">
            <SiLinux className="mr-2 text-black" /> OS Manipulation
          </li>
          <li className="flex items-center">
            <FaFigma className="mr-2 text-red-500" /> UI/UX Designs – 
            <SiAdobe className="ml-2 text-red-600" /> Figma & Adobe XD
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
