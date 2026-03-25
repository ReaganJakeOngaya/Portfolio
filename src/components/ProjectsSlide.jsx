import { memo } from "react";
import { motion } from "framer-motion";
import rubikImg from "../assets/Rubik.png";
import sushiImg from "../assets/Sushi-king.png";
import somaImg from "../assets/project-soma.png";
import sampesaImg from "../assets/sampesagroup.png";
import notesHubImg from "../assets/NotesHub.png";

const projects = [
  {
    title: "Rubik's Cube 3D",
    type: "Frontend",
    description:
      "A realistic 3D Rubik's Cube with smooth animations, timer, move counter, and statistics tracking. Features intuitive controls, win detection, and local best time storage.",
    tech: ["HTML5", "CSS3", "JavaScript", "Three.js"],
    image: rubikImg,
    live: "https://rubiks-3-d-game.vercel.app/",
    code: "https://github.com/ReaganJakeOngaya/Rubiks-3D-Game",
  },
  {
    title: "Restaurant Platform",
    type: "Frontend",
    description:
      "An online restaurant platform for Japanese food and drinks with beautiful animations and an immersive user experience.",
    tech: ["Vite + React", "JavaScript", "Tailwind", "Framer Motion"],
    image: sushiImg,
    live: "https://sushiking.vercel.app/",
    code: "https://github.com/ReaganJakeOngaya/sushimaster",
  },
  {
    title: "Soma",
    type: "Full-Stack",
    description:
      "Student performance analysis platform. Teachers and parents can assess academic progress, track metrics, and take action based on real-time insights.",
    tech: ["React", "TailwindCSS", "Node.js", "PostgreSQL"],
    image: somaImg,
    live: "https://project-soma.vercel.app",
    code: "https://github.com/festus-sulumeti/Project_Soma",
  },
  {
    title: "Sampesa Group",
    type: "Full-Stack",
    description:
      "Corporate website for Sampesa Group, showcasing their services and company information with a clean, professional aesthetic.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    image: sampesaImg,
    live: "https://sampesagroup.com",
    code: null,
  },
  {
    title: "NotesHub",
    type: "Full-Stack",
    description:
      "Intelligent note-taking app with search, sharing, favorites, editing, and note-categories support.",
    tech: ["React", "Node.js", "Flask", "PostgreSQL"],
    image: notesHubImg,
    live: "https://notes-app-seven-ecru.vercel.app/",
    code: "https://github.com/ReaganJakeOngaya/notes-app",
  },
];

function ProjectsSlide() {
  return (
    <div className="w-full h-full flex items-start  justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 padding-top:10 py-10 md:py-0 overflow-y-auto scrollbar-thin relative noise-overlay">

      {/* Background */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.4
        }} />

      <div className="w-full max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8 md:space-y-10"
        >

          {/* Header */}
          <div className="space-y-2">
            <span className="text-xs tracking-widest uppercase text-[hsl(var(--accent))]"
              style={{ fontFamily: 'Syne, sans-serif' }}>03 — Projects</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold"
              style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.03em' }}>
              Featured Work
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-[hsl(var(--accent))]" />
              <div className="w-2 h-2 rounded-full border border-[hsl(var(--accent))]" />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group card-modern overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[hsl(var(--foreground)/0.75)] opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        aria-label={`Live demo: ${project.title}`}
                        className="w-9 h-9 rounded-full flex items-center justify-center
                          bg-[hsl(var(--background))] text-[hsl(var(--foreground))]
                          hover:scale-110 transition-transform duration-200
                          shadow-[var(--shadow-soft)]"
                      >
                        <i className="fas fa-arrow-up-right-from-square text-xs"></i>
                      </a>
                    )}
                    {project.code && (
                      <a href={project.code} target="_blank" rel="noopener noreferrer"
                        aria-label={`Source code: ${project.title}`}
                        className="w-9 h-9 rounded-full flex items-center justify-center
                          bg-[hsl(var(--background))] text-[hsl(var(--foreground))]
                          hover:scale-110 transition-transform duration-200
                          shadow-[var(--shadow-soft)]"
                      >
                        <i className="fab fa-github text-sm"></i>
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold leading-snug" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {project.title}
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full dashed-box
                      text-[hsl(var(--muted-foreground))] flex-shrink-0 mt-0.5">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-[hsl(var(--muted-foreground))] text-xs leading-relaxed mb-3 line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span key={i}
                        className="text-[10px] px-2 py-0.5 rounded-full
                          bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]
                          hover:bg-[hsl(var(--secondary))] transition-colors duration-150"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="text-center pt-2">
            <a
              href="https://github.com/ReaganJakeOngaya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium
                px-5 py-2.5 rounded-xl dashed-box
                text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]
                hover:scale-[1.03] active:scale-[0.97]
                transition-all duration-200"
            >
              View all on GitHub <i className="fab fa-github text-sm"></i>
            </a>
          </div>

        </motion.div>
      </div>
    </div>
  );
}

export default memo(ProjectsSlide);