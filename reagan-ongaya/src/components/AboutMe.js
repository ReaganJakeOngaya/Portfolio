import React, { useState } from 'react';

const AboutMe = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id={id} className="w-full py-16 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-white">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl mb-4 animate__animated animate__fadeIn  font-extrabold  text-gray-900"
          >About Me</h2>
          <p className="text-lg mb-8 text-gray-900 font-semibold animate__animated animate__fadeIn animate__delay-1s">
            I'm a passionate software developer who loves to create efficient, scalable, and innovative solutions. My skills include backend and frontend development, and I strive to build intuitive and user-friendly applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate__animated animate__fadeIn animate__delay-2s">
          <div className="flex justify-center">
            <img 
              src="/reaganjakeprof.jpg" 
              alt="Profile" 
              className="w-64 h-64 object-cover rounded-full border-2 border-white shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-xl mb-4 text-center animate__animated animate__fadeIn  font-extrabold  text-gray-300">Skills & Expertise</h3>
            <p className="text-lg mb-6 text-gray-900 font-semibold ">I have a strong foundation in both frontend and backend technologies. Here are the technologies I'm skilled in:</p>

            <div className=' pt-6'>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-gray-700 hover:text-white px-6 py-3 font-semibold border-gray-700 rounded-full shadow-md hover:border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
                >
                    View Certificate
                </button>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg relative focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4">My Certificate</h2>
                        <img
                            src="/ReaganJake.jpg" 
                            alt="Certificate"
                            className="w-52 rounded-md"
                        />
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
          </div>
          
        </div>
        
        <div className="mt-16">
          <h3 className="text-4xl mb-4 text-center animate__animated animate__fadeIn  font-extrabold  text-gray-900">My Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="skill-card p-6 text-center rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-400">
              <img src="/react.png" alt="React" className="mx-auto mb-4"/>
              <h4 className="text-xl  hover:text-black-400 font-semibold">React</h4>
            </div>
            <div className="skill-card p-4 text-center rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-400">
              <img src="/nextjs.png" alt="Nextjs" className="mx-auto mb-4"/>
              <h4 className="text-xl font-semibold">NextJS</h4>
            </div>
            <div className="skill-card p-4 text-center rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-400">
              <img src="/nodejs.png" alt="Nodejs" className="mx-auto mb-4"/>
              <h4 className="text-xl font-semibold">NodeJS</h4>
            </div>
            <div className="skill-card p-4 text-center rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-400">
              <img src="/tailwindcss.png" alt="TailwindCSS" className="mx-auto mb-4"/>
              <h4 className="text-xl font-semibold">TailwindCSS</h4>
            </div>
            <div className="skill-card p-4 text-center rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-400">
              <img src="/bootsrap.png" alt="Bootstrap" className="mx-auto mb-4"/>
              <h4 className="text-xl font-semibold">Bootstrap</h4>
            </div>
            <div className="skill-card p-4 text-center rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-400">
              <img src="/python.png" alt="Python" className="mx-auto mb-4"/>
              <h4 className="text-xl font-semibold">Python</h4>
            </div>
            <div className="skill-card p-4 text-center rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-400">
              <img src="/javascript.png" alt="JavaScript" className="mx-auto mb-4"/>
              <h4 className="text-xl font-semibold">JavaScript</h4>
            </div>
            <div className="skill-card p-4 text-center rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-400">
              <img src="/postresql.png" alt="Postgresql" className="mx-auto mb-4"/>
              <h4 className="text-xl font-semibold">PostgreSQL</h4>
            </div>
            <div className="skill-card p-4 text-center rounded-lg shadow-xltransform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-400">
              <img src="/git.png" alt="Git" className="mx-auto mb-4"/>
              <h4 className="text-xl font-semibold">Git</h4>
            </div>
            <div className="skill-card p-4 text-center rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-400">
              <img src="/sqlite.png" alt="SQL" className="mx-auto mb-4"/>
              <h4 className="text-xl font-semibold">SQLite</h4>
            </div>
            <div className="skill-card p-4 text-center rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-400">
              <img src="/flask.png" alt="Flask" className="mx-auto mb-4"/>
              <h4 className="text-xl font-semibold">Flask</h4>
            </div>
            <div className="skill-card p-4 text-center rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-400">
              <img src="/html5.png" alt="html" className="mx-auto mb-4"/>
              <h4 className="text-xl font-semibold">HTML 5</h4>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;