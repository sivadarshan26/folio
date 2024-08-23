import React from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack }) => {
  return (
    <div className="bg-white/30 shadow-lg rounded-lg p-6 ">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className=" mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span key={index} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
