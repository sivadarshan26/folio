import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto ">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p>If you would like to get in touch, you can reach me at:</p>
      <ul className="list-disc list-inside my-6">
        <li>Email: <a href="mailto:sivadarshan2270@gmail.com" className="text-blue-600">sivadarshan2270@gmail.com</a></li>
        <li>Phone: +91 99432 33987</li>
      </ul>
      <p>Alternatively, you can connect with me on <a href="https://linkedin.com" className="text-blue-600">LinkedIn</a>.</p>
    </div>
  );
};

export default Contact;
