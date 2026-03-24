import { motion } from "framer-motion";

const services = [
  {
    icon: "fas fa-paint-brush",
    title: "Frontend Development",
    description: "Creating responsive, interactive, and modern web interfaces using the latest technologies and best practices.",
    features: ["Responsive Web Design", "React/Vue.js Applications", "Performance Optimization", "Cross-browser Compatibility"],
  },
  {
    icon: "fas fa-server",
    title: "Backend Development",
    description: "Building robust, scalable server-side applications with secure APIs and efficient database management.",
    features: ["RESTful API Development", "Database Design & Management", "Authentication & Security", "Cloud Integration"],
  },
  {
    icon: "fas fa-lightbulb",
    title: "UI/UX Development",
    description: "Designing and developing intuitive user interfaces that provide excellent user experiences across all devices.",
    features: ["User Interface Design", "Prototyping & Wireframing", "User Experience Optimization", "Design System Creation"],
  },
  {
    icon: "fas fa-plug",
    title: "API Integration",
    description: "Seamlessly connecting applications with third-party services and creating efficient data flow systems.",
    features: ["Third-party API Integration", "Payment Gateway Setup", "Social Media Integration", "Custom API Development"],
  },
];

export default function ServicesSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-12 overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 md:space-y-12"
        >
          <div className="space-y-3 md:space-y-4 text-center lg:text-left">
            <span className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground">04</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Services</h2>
            <div className="w-16 md:w-20 h-1 bg-primary mx-auto lg:mx-0"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card p-4 md:p-6 rounded-xl shadow-md border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="text-3xl md:text-4xl text-primary mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-200">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base mb-3 md:mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-1 md:space-y-2">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm md:text-base">
                      <i className="fas fa-check text-primary text-xs md:text-sm flex-shrink-0"></i>
                      <span className="text-muted-foreground">{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}