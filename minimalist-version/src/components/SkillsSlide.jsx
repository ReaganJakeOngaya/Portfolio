import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const skillsData = {
  Frontend: [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "TypeScript", level: 80 },
  ],
  Backend: [
    { name: "Python", level: 88 },
    { name: "FastAPI", level: 82 },
    { name: "Flask", level: 85 },
    { name: "Node.js", level: 75 },
  ],
  "Tools & Others": [
    { name: "Git/GitHub", level: 90 },
    { name: "JS & CSS Animations", level: 60 },
    { name: "Deployment", level: 55 },
    { name: "UI/UX Design", level: 78 },
  ],
};

export default function SkillsSlide({ isActive }) {
  const [animated, setAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isActive && !animated) {
      setAnimated(true);
    }
  }, [isActive, animated]);

  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-12 overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 md:space-y-12"
        >
          <div className="space-y-3 md:space-y-4 text-center lg:text-left">
            <span className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground">02</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Skills & Technologies</h2>
            <div className="w-16 md:w-20 h-1 bg-primary mx-auto lg:mx-0"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Object.entries(skillsData).map(([category, skills], idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-4 md:space-y-6"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-center lg:text-left">{category}</h3>
                <div className="space-y-3 md:space-y-4">
                  {skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm md:text-base font-medium">{skill.name}</span>
                        <span className="text-xs md:text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 md:h-3 overflow-hidden">
                        <motion.div
                          className="bg-primary h-full rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: animated ? `${skill.level}%` : "0%" }}
                          transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}