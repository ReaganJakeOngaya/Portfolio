import React from "react";

const services = [
  {
    title: "Frontend Development",
    description: "Building responsive and dynamic websites using modern technologies.",
    icon: "https://img.icons8.com/?size=100&id=81WilxWp48oi&format=png&color=000000",
    image: "https://images.surferseo.art/9602bc4b-cfc4-410e-b291-611d478c9d6a.png",
  },
  {
    title: "Backend Development",
    description: "Developing robust and scalable server-side applications.",
    icon: "https://img.icons8.com/?size=100&id=Ujhf0HU7XkM4&format=png&color=000000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhybMkb0r7m9dy-B758PTm8u7IA4ZmSLiz7Q&s",
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and visually appealing user interfaces.",
    icon: "https://img.icons8.com/?size=100&id=TNMFlPDNS18k&format=png&color=000000",
    image: "https://supersourcing.com/blog/wp-content/uploads/2021/07/1-8.jpg",
  },
  {
    title: "API Integration",
    description: "Integrating third-party APIs for seamless data connectivity.",
    icon: "https://img.icons8.com/?size=100&id=1DMI6yH4fduC&format=png&color=000000",
    image: "https://ellow.io/wp-content/uploads/2024/03/Frontend-vs-Backend-edited.png",
  },
];

const Services = ({ id }) => {
  return (
    <section
      id={id}
      className="min-h-screen py-16 bg-black flex flex-col items-center px-6"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-6">
        My Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Service Image */}
            <div className="w-full h-40 bg-gray-200">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 border-b-4 border-blue-800"
              />
            </div>
            {/* Service Content */}
            <div className="p-6 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xl font-semibold">
              Learn More
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
