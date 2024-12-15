import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and TailwindCSS.",
    link: "https://your-portfolio-link.com",
    image: "/website.webp",
  },
  {
    title: "E-Commerce Platform",
    description: "An e-commerce platform for selling electronics with a React frontend and Flask backend.",
    link: "https://your-ecommerce-link.com",
    image: "/mydevice-dashboard.png",
  },
  {
    title: "Chat Application",
    description: "A real-time chat app with React, Node.js, and WebSocket integration.",
    link: "https://your-chat-app-link.com",
    image: "/chatbotapp.webp",
  },
  {
    title: "Note-Taking App",
    description: "A modern note-taking app with bookmarking and tagging features.",
    link: "https://your-note-taking-app-link.com",
    image: "/notebookapp.webp",
  },
];

const Projects = ({ id }) => {
  return (
    <section
      id={id}
      className="min-h-screen py-14 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 px-6"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover border-b-4 border-blue-800"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-sm"
              >
                View Project &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

