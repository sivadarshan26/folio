import React from 'react';

type CertificationCardProps = {
  title: string;
  institution?: string;
  date: string;
  description: string;
};

const CertificationCard: React.FC<CertificationCardProps> = ({ title, institution, date, description }) => {
  return (
    <div className="bg-white/30 shadow-lg rounded-lg p-4 md:p-6 mb-4 md:mb-6 md:lg">
      <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{title}</h3>
      <p className="text-sm md:text-base  mb-1 md:mb-2">{institution}</p>
      <p className="text-xs md:text-sm mb-2 md:mb-4">{date}</p>
      <p className="text-sm md:text-base ">{description}</p>
    </div>
  );
};

export default CertificationCard;
