import React from 'react';
import CertificationCard from '../components/CertificationCard';

const Certifications: React.FC = () => {
    const certifications = [
        {
          title: 'PCAP - Programming Essentials in Python',
          description: 'Certification from CISCO’s Netacad.',
          date: 'June 2023',
          institution: 'CISCO Networking Academy' // Add this line
        },
        {
          title: 'Google UX Design',
          description: 'Completed courses on Foundations of User Experience (UX) Design, High-Fidelity Designs and Prototypes in Figma, and more on Coursera by Google.',
          date: 'May 2023',
          institution: 'Google' // Add this line
        },
        {
          title: 'Introduction to Packet Tracer',
          description: 'Course by The Cisco Networking Academy®.',
          date: 'May 2023',
          institution: 'CISCO Networking Academy' // Add this line
        },
        {
          title: 'Cyber Security Essentials',
          description: 'Cyber Security course by The Cisco Networking Academy®.',
          date: 'May 2023',
          institution: 'CISCO Networking Academy' // Add this line
        },
        {
          title: 'Python Course in Kaggle',
          description: 'Certification for Python course in Kaggle.',
          date: 'December 2022',
          institution: 'Kaggle' // Add this line
        }
      ];
      
  return (
    <div className="container mx-auto ">
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      {certifications.map((certification, index) => (
        <CertificationCard key={index} title={certification.title} description={certification.description} date={certification.date} />
      ))}
    </div>
  );
};

export default Certifications;
