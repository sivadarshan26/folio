import React from 'react';
import './ProjectCard.css'

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  image: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, image }) => {
  return (
    <div className="card-container h-full shadow-white/30 shadow-lg">
      <div className="card  rounded-md">
        <div className="img-content  rounded-md">
          <img src={image} alt={title} className="w-full h-auto mb-4 project-card-img" />
          <h3 className="text-xl font-bold mb-2 p-2">{title}</h3>
        </div>
        <div className="content h-full ">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span key={index} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
