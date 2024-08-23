import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Wapp from  '../assets/images/Whatsapp_clone.png';
import Twitter from '../assets/images/TwitterClone.png';
import SchoolSync from '../assets/images/SchoolSync.png';
import Medical from '../assets/images/Medical.png'


const Projects: React.FC = () => {
  const projects = [
    {
      title: 'CRM Website and Windows Application for an Educational Consultancy',
      description: 'The CRM application stores data about students and staff within the organization, including academic profiles. It manages staff attendance and allows exporting information to Excel or PDF formats. It also helps streamline administrative tasks for educational consultancy operations.',
      techStack: ['React', 'Vite', 'TailwindCSS', 'Electron', 'Firebase'],
      image: Wapp, // Use the image path directly
    },
    {
      title: 'MediSync',
      description: 'The website can sign up patients and manage medicine supplies, holding info about patients and suppliers. Keep patient records private, handle pharmacy billing, and manage patient queues. Provide doctors with waiting lists and medicine stock checks.',
      techStack: ['React', 'Vite', 'TailwindCSS', 'MUI', 'Daisy UI', 'Redux', 'Nginx', 'Azure', 'MongoDB Atlas'],
      image: Medical, // Use the image path directly
    },
    {
      title: 'Twitter UI Clone',
      description: 'This project is a simple UI clone of Twitter\'s login and home pages. It is built using modern frontend technologies such as Vite, Tailwind CSS, React, React Router DOM, and React Icons. The clone focuses on replicating the design and layout of Twitter\'s user interface, providing a responsive and interactive experience.',
      techStack: ['Vite', 'React', 'Tailwind CSS', 'React Router DOM', 'React Icons'],
      image: Twitter, // Replace with actual image path
    },
    {
      title: 'SchoolSync',
      description: 'This project is a comprehensive school management system designed to track student and staff attendance, manage homework assignments, and handle other basic administrative tasks. The system offers a user-friendly interface for school administrators, teachers, and students, helping streamline daily operations within educational institutions.',
      techStack: [
        'React', 'Redux Toolkit', 'Material-UI (MUI)', 'Tailwind CSS', 'Formik', 'Axios',
        'Day.js', 'Framer Motion', 'React Router DOM', 'React Icons',
        'Node.js', 'Express.js', 'Mongoose', 'Firebase Admin', 'JWT',
        'Multer', 'Twilio', 'Passport', 'TypeScript', 'Vite', 'Nodemon'
      ],
      image: SchoolSync, // Replace with actual image path
    },
    {
      title: 'WhatsApp Web UI Clone',
      description: 'This project is a UI-centered clone of the WhatsApp Web interface. It replicates the layout and design of the original WhatsApp Web, focusing on providing a similar user experience. The clone includes features such as chat lists, message bubbles, and a responsive design, making it a great project for practicing UI development with modern web technologies.',
      techStack: ['React','Vite','Tailwind CSS','DaisyUI','MUI','React Icons','Lottie','React Router DOM'],
      image: Wapp, // Replace with actual image path
    }, 
    {
      title: 'PDF to Word Conversion Website',
      description: 'This project is a website designed to automate the conversion of PDF files to Word documents (non-OCR). Users can upload their PDF files, and the site will convert them into Word documents while preserving the layout and text. The website leverages a Flask server for handling file uploads and conversions using the pdf2docx library.',
      techStack: ['React', 'Vite', 'Tailwind CSS','Flask','pdf2docx'],
      image: 'path/to/pdf-to-word-conversion-website-image.jpg', // Replace with the actual image path
    },
    {
      title: 'Excel File Splitter',
      description: 'This project is a web application that allows users to split Excel files into smaller files based on a specified number of rows per file. The frontend is built with React, and the backend is powered by Flask. Users can upload an Excel file, specify the number of rows per file, and download the split files as a zip archive. The application uses Pandas for processing Excel files and Flask-CORS to handle cross-origin requests.',
      techStack: ['React','Axios','Flask','Flask-CORS','Pandas','Werkzeug','JavaScript (ES6+)','HTML/CSS','Python'],
      image: 'path/to/excel-file-splitter-image.jpg' // Replace with the actual image path
    }
  ];

  return (
    <div className="container mx-auto p-6 md:p-8 lg:p-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            image={project.image} // Pass the image directly
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
