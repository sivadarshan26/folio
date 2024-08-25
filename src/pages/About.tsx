import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJs, FaFigma, FaPaintBrush } from 'react-icons/fa';
import { SiMysql, SiMicrosoftword, SiMicrosoftexcel, SiLinux, SiAdobe } from 'react-icons/si';

// Define an array for skills with categories
const skillGroups = [
  {
    category: 'Web Development',
    skills: [
      { icon: <FaHtml5 />, label: 'HTML', color: 'orange-500' },
      { icon: <FaCss3Alt />, label: 'CSS', color: 'blue-500' },
      { icon: <FaReact />, label: 'React JS', color: 'blue-600' },
      { icon: <FaNodeJs />, label: 'Node.js', color: 'green-600' },
    ],
  },
  {
    category: 'Programming Languages',
    skills: [
      { icon: <FaPython />, label: 'Python', color: 'blue-400' },
      { icon: <FaJs />, label: 'JavaScript', color: 'yellow-400' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { icon: <SiMysql />, label: 'MySQL', color: 'blue-600' },
    ],
  },
  {
    category: 'Design and Creativity',
    skills: [
      { icon: <FaPaintBrush />, label: 'Poster Designing', color: 'gray-600' },
      { icon: <FaFigma />, label: 'Figma', color: 'red-500' },
      { icon: <SiAdobe />, label: 'Adobe XD', color: 'red-600' },
    ],
  },
  {
    category: 'Productivity Tools',
    skills: [
      { icon: <SiMicrosoftword />, label: 'MS Word', color: 'blue-500' },
      { icon: <SiMicrosoftexcel />, label: 'Excel Processing', color: 'green-600' },
    ],
  },
  {
    category: 'Operating Systems',
    skills: [
      { icon: <SiLinux />, label: 'OS Manipulation', color: 'black' },
    ],
  },
];

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-6 md:p-8 lg:p-12">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>

      <div id='skills' className='custombg p-3 rounded-md shadow-md'>
        {skillGroups.map((group, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold mb-3">{group.category}</h3>
            <ul className="list-none space-y-4 text-sm md:text-base lg:text-sm flex space-x-4">
              {group.skills.map((skill, idx) => (
                <li
                  key={idx}
                  className="flex items-center p-3 rounded-lg  shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out
                              bg-gradient-to-r from-gray-700/50 via-gray-800/40 to-gray-900/50 
                              hover:bg-gradient-to-r hover:from-gray-700/70 hover:via-gray-800/60 hover:to-gray-900/70 "
                >
                  <span className="mr-2 text-white text-xl">
                    {React.cloneElement(skill.icon, { className: 'text-white' })}
                  </span>
                  <span className={`hover:text-${skill.color} transition-colors duration-300`}>
                    {skill.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
