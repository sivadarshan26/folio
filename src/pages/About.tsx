import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container md:p-8 lg:p-12">
     
     <h2 className="text-3xl font-bold mb-4">Skills</h2>

      <div 
        id='skills' 
        className='bg-white/20 p-3 rounded-md shadow-md'>
        <ul className="list-disc list-inside space-y-2 text-sm md:text-base lg:text-lg">
          <li>HTML / CSS / React JS / Node.js</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>MySQL</li>
          <li>Poster Designing</li>
          <li>MS Word / Excel Processing</li>
          <li>OS Manipulation</li>
          <li>UI/UX Designs – Figma & Adobe XD</li>
        </ul>
        </div>
    </div>
  );
};

export default About;
