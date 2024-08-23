import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'CRM Website and Windows Application for an Educational Consultancy',
      description: 'The CRM application stores data about students and staff within the organization, including academic profiles. It manages staff attendance and allows exporting information to Excel or PDF formats. It also helps streamline administrative tasks for educational consultancy operations.',
      techStack: ['React', 'Vite', 'TailwindCSS', 'Electron', 'Firebase'],
    },
    {
      title: 'CRM Application to manage an entire Medical Clinic with pharmacy',
      description: 'The website can sign up patients and manage medicine supplies, holding info about patients and suppliers. Keep patient records private, handle pharmacy billing, and manage patient queues. Provide doctors with waiting lists and medicine stock checks.',
      techStack: ['React', 'Vite', 'TailwindCSS', 'MUI', 'Daisy UI', 'Redux', 'Nginx', 'Azure', 'MongoDB Atlas'],
    },
  ];

  return (
    <div className="container mx-auto p-6 md:p-8 lg:p-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Projects</h2>
      <div className="space-y-6  md:grid-rows-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
