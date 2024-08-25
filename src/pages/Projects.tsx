import React, { useState, useEffect, useRef } from 'react';
import Wapp from '../assets/images/Whatsapp_clone.png';
import Twitter from '../assets/images/TwitterClone.png';
import SchoolSync from '../assets/images/SchoolSync.png';
import Medical from '../assets/images/Medical.png';
import Dummy from '../assets/images/dummy.png';
import { FaPlay, FaPause } from 'react-icons/fa';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";


const projects = [
  {
    title: 'EEHL',
    description: 'The CRM application stores data about students and staff within the organization, including academic profiles. It manages staff attendance and allows exporting information to Excel or PDF formats. It also helps streamline administrative tasks for educational consultancy operations.',
    techStack: ['React', 'Vite', 'TailwindCSS', 'Electron', 'Firebase'],
    image: Wapp,
  },
  {
    title: 'MediSync',
    description: 'The website can sign up patients and manage medicine supplies, holding info about patients and suppliers. Keep patient records private, handle pharmacy billing, and manage patient queues. Provide doctors with waiting lists and medicine stock checks.',
    techStack: ['React', 'Vite', 'TailwindCSS', 'MUI', 'Daisy UI', 'Redux', 'Nginx', 'Azure', 'MongoDB Atlas'],
    image: Medical,
  },
  {
    title: 'Twitter UI Clone',
    description: 'This project is a simple UI clone of Twitter\'s login and home pages. It is built using modern frontend technologies such as Vite, Tailwind CSS, React, React Router DOM, and React Icons. The clone focuses on replicating the design and layout of Twitter\'s user interface, providing a responsive and interactive experience.',
    techStack: ['Vite', 'React', 'Tailwind CSS', 'React Router DOM', 'React Icons'],
    image: Twitter,
  },
  {
    title: 'SchoolSync',
    description: 'This project is a comprehensive school management system designed to track student and staff attendance, manage homework assignments, and handle other basic administrative tasks. The system offers a user-friendly interface for school administrators, teachers, and students, helping streamline daily operations within educational institutions.',
    techStack: [
      'React', 'Redux Toolkit', 'Material-UI (MUI)', 'Tailwind CSS', 'Formik', 
      'Day.js', 'Framer Motion', 'Node.js', 'Express.js', 'Mongoose', 'Firebase Admin', 'JWT',
      'Passport', 'TypeScript', 'Vite', 'Nodemon'
    ],
    image: SchoolSync,
  },
  {
    title: 'WhatsApp Web UI Clone',
    description: 'This project is a UI-centered clone of the WhatsApp Web interface. It replicates the layout and design of the original WhatsApp Web, focusing on providing a similar user experience. The clone includes features such as chat lists, message bubbles, and a responsive design, making it a great project for practicing UI development with modern web technologies.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'DaisyUI', 'MUI', 'React Icons', 'Lottie', 'React Router DOM'],
    image: Wapp,
  },
  {
    title: 'PDF to Word Conversion Website',
    description: 'This project is a website designed to automate the conversion of PDF files to Word documents (non-OCR). Users can upload their PDF files, and the site will convert them into Word documents while preserving the layout and text. The website leverages a Flask server for handling file uploads and conversions using the pdf2docx library.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Flask', 'pdf2docx'],
    image: Dummy,
  },
  {
    title: 'Excel File Splitter',
    description: 'This project is a web application that allows users to split Excel files into smaller files based on a specified number of rows per file. The frontend is built with React, and the backend is powered by Flask. Users can upload an Excel file, specify the number of rows per file, and download the split files as a zip archive. The application uses Pandas for processing Excel files and Flask-CORS to handle cross-origin requests.',
    techStack: ['React', 'Axios', 'Flask', 'Flask-CORS', 'Pandas', 'Werkzeug', 'JavaScript (ES6+)', 'HTML/CSS', 'Python'],
    image: Dummy,
  },
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(progress);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        setProgress((prev) => {
          progressRef.current = prev + 1;
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 1;
        });
      }, 100); // Update progress every 100ms
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    setProgress(0);
    progressRef.current = 0;
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setProgress(0);
    progressRef.current = 0;
  };

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleProjectClick = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    progressRef.current = 0;
    setIsPlaying(true); // Pause auto-scroll when a project is clicked
  };

  const project = projects[currentIndex];

  return (
    <div className="custombg p-4 w-full">
      {/* Top section displaying all project titles and tech stacks */}
      <div id="pages/projects-top" className="mb-4">
        <h1 className="text-2xl font-bold text-start mb-4 ">Projects</h1>
        <div className="lg:flex gap-4 mx-auto ">
          {projects.map((proj, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(index)}
              className={`cursor-pointer p-4 rounded-lg shadow-md ${
                currentIndex === index
                  ? "bg-blue-500 text-white"
                  : "custombg text-white"
              } hover:bg-white/10 transition duration-300`}
            >
              <h3 className="font-bold mb-2">{proj.title}</h3>
              {/* <div className="flex flex-wrap gap-2">
                {proj.techStack.map((tech, techIndex) => (
                  <React.Fragment key={techIndex}>
                    <span className="py-1 px-1 text-xs">
                      {tech}
                    </span>
                    {techIndex < proj.techStack.length - 1 && (
                      <span className="">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </div>


      {/* Left and right sections displaying the current project */}
      <div className="flex flex-col md:flex-row items-center">
        <div id="left" className="flex-1 p-4 overflow-hidden">
          <div className="vertical-carousel">
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4 ">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-white/20 py-1 px-3 rounded-full text-sm shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="bottom-0 left-0 w-full h-2 bg-white/20 rounded-full shadow-md">
              <div
                className="h-full bg-white/40 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
        <div id="right" className="flex-1 p-4 flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto max-w-md rounded-md shadow-md shadow-gray-800"
          />
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-4 mt-4 items-center">
        <button
          onClick={handlePrev}
          className="bg-white/20 text-white p-2 rounded-full hover:bg-gray-600 shadow-md"
        >
          <GrFormPrevious />
        </button>
        <button
          onClick={handlePlayPause}
          className="bg-white/20 text-white p-2 rounded-full hover:bg-gray-600 size-12 justify-center items-center flex shadow-md"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button
          onClick={handleNext}
          className="bg-white/20 text-white p-2 rounded-full hover:bg-gray-600 shadow-md"
        >
          <GrFormNext className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Projects;