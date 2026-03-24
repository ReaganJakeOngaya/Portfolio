import { motion } from "framer-motion";
import { memo, useEffect, useRef } from "react";

const skills = [
  { name: "HTML5 / CSS3", level: 90, color: "hsla(16,85%,58%,0.85)" },
  { name: "JavaScript (ES6+)", level: 85, color: "hsla(45,90%,55%,0.85)" },
  { name: "React", level: 88, color: "hsla(200,80%,55%,0.85)" },
  { name: "Tailwind CSS", level: 90, color: "hsla(180,70%,45%,0.85)" },
  { name: "Node.js", level: 75, color: "hsla(130,55%,45%,0.85)" },
  { name: "Python", level: 70, color: "hsla(210,70%,55%,0.85)" },
  { name: "Git & GitHub", level: 85, color: "hsla(270,55%,55%,0.85)" },
  { name: "UI/UX Design", level: 80, color: "hsla(340,70%,55%,0.85)" },
];

function SkillsSlide({ isActive }) {
  const skillRefs = useRef([]);

  useEffect(() => {
    if (isActive) {
      skillRefs.current.forEach((el, i) => {
        if (el) {
          setTimeout(() => {
            el.style.width = el.getAttribute("data-width");
          }, i * 80);
        }
      });
    } else {
      skillRefs.current.forEach((el) => {
        if (el) el.style.width = "0";
      });
    }
  }, [isActive]);

  return (
    <div className="w-full h-full flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 relative overflow-hidden noise-overlay">

      {/* Background */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.4,
        }} />
      <div className="absolute bottom-0 left-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsla(210,60%,55%,0.07) 0%, transparent 70%)' }} />

      <div className="w-full max-w-4xl relative z-10 overflow-y-auto scrollbar-thin max-h-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8 md:space-y-10 py-2"
        >

          {/* Header */}
          <div className="space-y-2">
            <span className="text-xs tracking-widest uppercase text-[hsl(var(--accent))]"
              style={{ fontFamily: 'Syne, sans-serif' }}>02 — Skills</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold"
              style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.03em' }}>
              Skills &amp; Expertise
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-[hsl(var(--accent))]" />
              <div className="w-2 h-2 rounded-full border border-[hsl(var(--accent))]" />
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.07 + 0.2, duration: 0.5 }}
                className="space-y-1.5"
              >
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-medium" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {skill.name}
                  </span>
                  <span className="text-xs text-[hsl(var(--muted-foreground))] tabular-nums">
                    {skill.level}%
                  </span>
                </div>

                {/* Track */}
                <div className="relative h-1.5 rounded-full overflow-hidden"
                  style={{ background: 'hsl(var(--muted))' }}>
                  {/* Fill */}
                  <div
                    ref={(el) => (skillRefs.current[idx] = el)}
                    data-width={`${skill.level}%`}
                    className="skill-progress absolute left-0 top-0 h-full rounded-full"
                    style={{ width: 0, background: skill.color }}
                  />
                  {/* Tick marks overlay */}
                  <div className="absolute inset-0 flex"
                    style={{ pointerEvents: 'none' }}>
                    {[25, 50, 75].map((tick) => (
                      <div key={tick}
                        className="absolute top-0 bottom-0 w-px"
                        style={{
                          left: `${tick}%`,
                          background: 'hsl(var(--background) / 0.6)'
                        }} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-3 pt-2"
          >
            <div className="flex-1 border-t border-dashed border-[hsl(var(--border))]" />
            <p className="text-xs text-[hsl(var(--muted-foreground))] px-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))] animate-pulse-soft inline-block" />
              Constantly learning &amp; expanding my toolkit
            </p>
            <div className="flex-1 border-t border-dashed border-[hsl(var(--border))]" />
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}

export default memo(SkillsSlide);