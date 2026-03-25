import { memo } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "7+", label: "Projects Shipped" },
  { value: "5+", label: "Happy Clients" },
];

function AboutSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 relative overflow-hidden noise-overlay">

      {/* Background mesh */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsla(210,60%,55%,0.07) 0%, transparent 70%)' }} />

      {/* Grid dots */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.4
        }} />

      <div className="w-full max-w-5xl relative z-10 overflow-y-auto scrollbar-thin max-h-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8 md:space-y-10 py-2"
        >

          {/* Section header */}
          <div className="space-y-2">
            <span className="text-xs tracking-widest uppercase text-[hsl(var(--accent))]"
              style={{ fontFamily: 'Syne, sans-serif' }}>01 — About</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold"
              style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.03em' }}>
              About Me
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-[hsl(var(--accent))]" />
              <div className="w-2 h-2 rounded-full border border-[hsl(var(--accent))] dashed-box" />
            </div>
          </div>

          {/* Stats row */}
          <div className="flex gap-4 sm:gap-6 flex-wrap">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.2 }}
                className="flex flex-col px-4 py-3 rounded-xl dashed-box bg-[hsl(var(--card))]
                  shadow-[var(--shadow-soft)] min-w-[80px]"
              >
                <span className="text-2xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>{stat.value}</span>
                <span className="text-xs text-[hsl(var(--muted-foreground))] mt-0.5">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Two column content */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <p className="text-[hsl(var(--muted-foreground))] text-sm md:text-base leading-relaxed">
                I'm a passionate frontend developer with over 2 years of experience crafting beautiful,
                responsive web applications. My journey in tech started with a curiosity for how things work,
                and it's grown into a career dedicated to creating seamless digital experiences.
              </p>
              <p className="text-[hsl(var(--muted-foreground))] text-sm md:text-base leading-relaxed">
                I specialize in React and modern JavaScript, with a strong focus on performance,
                accessibility, and clean code. I believe great design and great code go hand in hand.
              </p>

              <div className="pt-3 space-y-2">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-[hsl(var(--muted-foreground))]">Education</h3>
                <div className="space-y-1.5">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="w-1 h-1 rounded-full bg-[hsl(var(--accent))] mt-2 flex-shrink-0" />
                    <span>Computer Science, CTC (2023)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="w-1 h-1 rounded-full bg-[hsl(var(--accent))] mt-2 flex-shrink-0" />
                    <span>Certified Full-Stack Developer, Moringa (2024)</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold tracking-wide uppercase text-[hsl(var(--muted-foreground))]">Experience</h3>

              {[
                {
                  role: "Full-Stack Developer",
                  company: "Freelance",
                  period: "Nov 2025 – Present",
                  desc: "Leading full-stack development for client projects, mentoring junior developers, and implementing design systems that meet client need for a solution."
                },
                {
                  role: "Junior Developer",
                  company: "SPG Agency",
                  period: "Sep 2024 – Oct 2025",
                  desc: "Creating and optimizing user interfaces, collaborating with designers and backend developers to deliver and maintaining applications."
                },
                {
                  role: "Intern Developer",
                  company: "SPG Agency",
                  period: "Jun – Aug 2024",
                  desc: "Assist in developing and maintaining web system applications for the Agency."
                }
              ].map((exp, i) => (
                <div key={i}
                  className="relative pl-4 border-l border-dashed border-[hsl(var(--border))] space-y-0.5"
                >
                  <div className="absolute -left-1 top-1 w-2 h-2 rounded-full border-2 border-[hsl(var(--foreground))] bg-[hsl(var(--background))]" />
                  <p className="font-semibold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {exp.role} <span className="font-normal text-[hsl(var(--muted-foreground))]">@ {exp.company}</span>
                  </p>
                  <p className="text-xs text-[hsl(var(--accent))] tracking-wide">{exp.period}</p>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{exp.desc}</p>
                </div>
              ))}

              {/* <div className="pt-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium
                    px-4 py-2 rounded-xl dashed-box
                    text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]
                    shadow-[var(--shadow-soft)]
                    hover:scale-[1.03] active:scale-[0.97]
                    transition-all duration-200"
                >
                  <i className="fas fa-download text-xs text-[hsl(var(--accent))]"></i>
                  Download Resume
                </a>
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default memo(AboutSlide);