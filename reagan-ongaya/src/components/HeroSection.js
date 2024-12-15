import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf"; // Include pdfjs for worker configuration
import Modal from "react-modal";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.15.349/pdf.worker.min.js`; // Match the installed version


const HeroSection = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [numPages, setNumPages] = useState(null); // State for total number of pages
  // Handle the document load success
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages); // Set total pages
  }; 
  
  return (
    <section
      id={id}
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ 
        // backgroundImage: "url('https://source.unsplash.com/random/1920x1080')",
        backgroundColor: "#74EBD5",
        backgroundImage: "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)"
 

      }}
    >
      <section className="text-center py-4">
        <h1
          className="text-6xl md:text-5xl font-extrabold text-gray-300 transform transition-transform duration-1000 hover:scale-110 space-y-4 t"
          style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)" }}
        >
          {"Hi, my name is ".split(" ").map((word, index) => (
            <span key={index} className="mr-2 block md:inline">
              {word.split("").map((char, charIndex) => (
                <span
                  key={charIndex}
                  className="inline-block transition-transform duration-300 hover:animate-bounce"
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>
         <h1
          className="text-6xl md:text-7xl font-extrabold  transform transition-transform duration-1000 hover:scale-110 space-y-4  bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 bg-clip-text text-transparent"
          style={{ textShadow: "1px 1px 2.5px rgba(0, 0, 0, 0.7)" }}
        >
          {"Reagan O. Jake ".split(" ").map((word, index) => (
            <span key={index} className="mr-2 block md:inline">
              {word.split("").map((char, charIndex) => (
                <span
                  key={charIndex}
                  className="inline-block transition-transform duration-500 hover:animate-bounce"
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p className="text-lg md:text-2xl text-gray-500 mt-6 max-w-2xl mx-auto">
          Discover my work, projects, and passion for <br/> <span style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)" }} className="text-4xl font-extrabold  text-gray-300" > Design </span>
           and <span style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)" }} className="text-4xl font-extrabold  text-gray-300"> Web development</span>.
        </p>
        <div className=' pt-6 px-2'>
          <button
              onClick={openModal}
              className="text-gray-700 hover:text-white px-6 py-3 font-semibold border-gray-700 rounded-full shadow-md hover:border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
          >
            View Resume
          </button>
          <button
              href="/ReaganOngayaResume.pdf" // Replace with the path to your PDF file
              download="ReaganJakeResume.pdf" // File name when downloaded
              className=" text-gray-700 hover:text-white px-6 py-3 font-semibold border-gray-700 rounded-full shadow-md hover:border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
        >
          Download Resume
        </button>
        </div>
      {/* Modal for PDF Viewer */}
      <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="PDF Viewer"
          ariaHideApp={false}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "80%",
            padding: "20px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        }}
      >
        <button
          onClick={closeModal}
          style={{
            display: "inline-block",
            marginBottom: "10px",
            padding: "5px 10px",
            backgroundColor: "red",
            color: "#fff",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
        <div style={{ overflow: "auto", height: "calc(100% - 50px)" }}>
          <Document file="/ReaganOngayaResume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            {/* Render all pages */}
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </Modal>
      </section>

    </section>
  );
};

export default HeroSection;