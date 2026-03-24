import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/reaganongaya.jpg";

const roles = ["Frontend Developer", "React Specialist", "UI/UX Enthusiast", "Problem Solver"];

export default function HeroSlide({ isActive }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-12">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 md:space-y-6 text-center lg:text-left"
        >
          <p className="text-sm md:text-lg text-muted-foreground tracking-wide">Hello, I'm</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
            Reagan <br className="hidden sm:block" /> O. Jake
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
            <span className="text-muted-foreground">I'm a </span>
            <span className="text-primary inline-block min-w-[160px] sm:min-w-[180px] md:min-w-[200px]">{roles[roleIndex]}</span>
          </div>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
            Passionate about crafting impactful software solutions that bridge the gap between creativity and functionality. I transform ideas into digital experiences that matter.
          </p>
          <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground text-sm md:text-base max-w-md mx-auto lg:mx-0">
            "Code is my art, and the web is my canvas."
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="btn btn-primary bg-primary text-primary-foreground px-6 md:px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Work with Me
            </a>
            <a
              href="#projects"
              className="btn btn-outline border border-input bg-background px-6 md:px-8 py-3 rounded-md font-medium hover:bg-accent transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              View Projects
            </a>
          </div>
          <div className="flex gap-4 md:gap-6 pt-6 md:pt-8 justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/reaganongaya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-all duration-200 hover:scale-110 active:scale-95 p-2 rounded-full hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Visit LinkedIn profile"
            >
              <i className="fab fa-linkedin-in text-xl md:text-2xl"></i>
            </a>
            <a
              href="https://github.com/ReaganJakeOngaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-all duration-200 hover:scale-110 active:scale-95 p-2 rounded-full hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Visit GitHub profile"
            >
              <i className="fab fa-github text-xl md:text-2xl"></i>
            </a>
            <a
              href="https://wa.me/254759095501"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-all duration-200 hover:scale-110 active:scale-95 p-2 rounded-full hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Contact via WhatsApp"
            >
              <i className="fab fa-whatsapp text-xl md:text-2xl"></i>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="relative w-full aspect-square max-w-sm md:max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"></div>
            <img
              src={profileImg}
              alt="Reagan Jake - Frontend Developer"
              className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl border-4 border-background/50"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}