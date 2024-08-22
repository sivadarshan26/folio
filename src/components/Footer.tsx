import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Sivadarshan S K. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com/sivadarshan26" className="hover:text-teal-400">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-teal-400">LinkedIn</a>
          <a href="mailto:sivadarshan2270@gmail.com" className="hover:text-teal-400">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
