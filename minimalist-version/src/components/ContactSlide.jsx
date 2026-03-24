import { motion } from "framer-motion";

export default function ContactSlide() {
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
            <span className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground">05</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Let's Work Together</h2>
            <div className="w-16 md:w-20 h-1 bg-primary mx-auto lg:mx-0"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold">Get In Touch</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
                Let's create something extraordinary together.
              </p>
              <p className="text-xs md:text-sm flex items-center gap-2 text-muted-foreground">
                <i className="fas fa-info-circle"></i> Available 7am - 11pm (EAT)
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border border-border hover:border-primary/20 hover:bg-accent/5 transition-all duration-200">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <i className="fas fa-phone-alt text-sm md:text-base"></i>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">Call Me</p>
                  <a
                    href="tel:+254759095501"
                    className="text-base md:text-lg font-medium hover:text-primary transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                  >
                    +254 759 095501
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border border-border hover:border-primary/20 hover:bg-accent/5 transition-all duration-200">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <i className="fas fa-envelope text-sm md:text-base"></i>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:reaganjakeongaya@gmail.com"
                    className="text-base md:text-lg font-medium hover:text-primary transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                  >
                    reaganjakeongaya@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border border-border hover:border-primary/20 hover:bg-accent/5 transition-all duration-200">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-sm md:text-base"></i>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">Location</p>
                  <p className="text-base md:text-lg font-medium">Nairobi City, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}