import React from 'react';
import CertificationCard from '../components/CertificationCard';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'PCAP - Programming Essentials in Python',
      description: 'Certification from CISCO’s Netacad.',
      date: 'June 2023',
      institution: 'CISCO Networking Academy'
    },
    {
      title: 'Google UX Design',
      description: 'Completed courses on Foundations of User Experience (UX) Design, High-Fidelity Designs and Prototypes in Figma, and more on Coursera by Google.',
      date: 'May 2023',
      institution: 'Google'
    },
    {
      title: 'Introduction to Packet Tracer',
      description: 'Course by The Cisco Networking Academy®.',
      date: 'May 2023',
      institution: 'CISCO Networking Academy'
    },
    {
      title: 'Cyber Security Essentials',
      description: 'Cyber Security course by The Cisco Networking Academy®.',
      date: 'May 2023',
      institution: 'CISCO Networking Academy'
    },
    {
      title: 'Python Course in Kaggle',
      description: 'Certification for Python course in Kaggle.',
      date: 'December 2022',
      institution: 'Kaggle'
    }
  ];
  
  return (
    <div id='pages/certifications' className="container mx-auto p-6 md:p-8 lg:p-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={index}
              title={certification.title}
              description={certification.description}
              date={certification.date}
              institution={certification.institution} // Ensure institution is passed
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
