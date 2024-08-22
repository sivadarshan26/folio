import React from 'react';

type CertificationCardProps = {
  title: string;
  institution?: string;
  date: string;
  description: string;
};

const CertificationCard: React.FC<CertificationCardProps> = ({ title, institution, date, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{institution}</p>
      <p className="text-gray-500 mb-4">{date}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default CertificationCard;
