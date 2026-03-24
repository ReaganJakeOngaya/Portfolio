import { motion } from "framer-motion";

export default function AboutSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-12 overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
      <div className="w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 md:space-y-12"
        >
          <div className="space-y-3 md:space-y-4 text-center lg:text-left">
            <span className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground">01</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">About Me</h2>
            <div className="w-16 md:w-20 h-1 bg-primary mx-auto lg:mx-0"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-xl leading-relaxed text-center lg:text-left">
                Hello! I'm a dedicated <span className="text-primary font-semibold">Software Developer</span> with a passion for creating scalable, efficient, and user-friendly solutions. I specialize in Frontend development, modern UI design, and building responsive web applications.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-center lg:text-left">
                With a keen eye for detail and a drive for innovation, I thrive on solving complex challenges and turning ideas into reality. My mission is to craft experiences that leave a lasting impact, whether it's through code or collaboration.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-secondary/30 p-4 md:p-6 rounded-lg text-center hover:bg-secondary/50 transition-colors duration-200">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary">1+</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-secondary/30 p-4 md:p-6 rounded-lg text-center hover:bg-secondary/50 transition-colors duration-200">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary">6+</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-secondary/30 p-4 md:p-6 rounded-lg text-center hover:bg-secondary/50 transition-colors duration-200">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary">100%</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}