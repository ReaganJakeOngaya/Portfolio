import { motion } from "framer-motion";
import rubikImg from "../assets/Rubik.png";
import sushiImg from "../assets/Sushi-king.png";
import somaImg from "../assets/project-soma.png";
import sampesaImg from "../assets/sampesagroup.png";
import notesHubImg from "../assets/NotesHub.png";

const projects = [
  {
    title: "Rubik's Cube 3D Game",
    type: "Frontend",
    description:
      "A realistic 3D Rubik's Cube game with smooth animations, timer, move counter, and statistics tracking. Features intuitive controls, win detection, pause/resume functionality, and local best time storage. Includes keyboard shortcuts and responsive design for optimal gameplay experience.",
    tech: ["HTML5", "CSS3", "JavaScript(ES6+)", "Three.js + WebGL"],
    image: rubikImg,
    live: "https://rubiks-3-d-game.vercel.app/",
    code: "https://github.com/ReaganJakeOngaya/Rubiks-3D-Game",
  },
  {
    title: "Restaurant Platform",
    type: "Frontend",
    description:
      "An online restaurant platform for Japanese food and drinks that are mostly loved around the world.",
    tech: ["Vite + React", "JavaScript", "Tailwind", "FramerMotion"],
    image: sushiImg,
    live: "https://sushiking.vercel.app/",
    code: "https://github.com/ReaganJakeOngaya/sushimaster",
  },
  {
    title: "Soma - Student Performance Analysis Platform",
    type: "Full-Stack",
    description:
      "Soma is a web-based platform designed to streamline the process of analyzing student performance and providing feedback. Teachers and parents can use Soma to quickly assess academic progress, track performance metrics, and take action based on real-time insights.",
    tech: ["React+Vite", "TailwindCSS", "Radix UI", "Node.js", "Python-Flask", "PostgreSQL"],
    image: somaImg,
    live: "https://project-soma.vercel.app",
    code: "https://github.com/festus-sulumeti/Project_Soma",
  },
  {
    title: "Sampesa Group",
    type: "Full-Stack",
    description:
      "A corporate website for Sampesa Group, showcasing their services and company information.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    image: sampesaImg,
    live: "https://sampesagroup.com",
    code: null,
  },
  {
    title: "NotesHub",
    type: "Full-Stack",
    description:
      "An intelligent note-taking application with search functionality, share with others, favorite marking, editing features and note-categories support.",
    tech: ["React+Vite", "JavaScript", "Node.js", "Python-Flask", "PostgresDB"],
    image: notesHubImg,
    live: "https://notes-app-seven-ecru.vercel.app/",
    code: "https://github.com/ReaganJakeOngaya/notes-app",
  },
];

export default function ProjectsSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-12 overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
      <div className="w-full max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-8 md:space-y-12">
          <div className="space-y-3 md:space-y-4 text-center lg:text-left">
            <span className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground">03</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Featured Projects</h2>
            <div className="w-16 md:w-20 h-1 bg-primary mx-auto lg:mx-0"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/20"
              >
                <div className="relative overflow-hidden h-48 md:h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 md:gap-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-2 md:p-3 rounded-full hover:scale-110 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <i className="fas fa-earth-africa text-sm md:text-base"></i>
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-2 md:p-3 rounded-full hover:scale-110 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        aria-label={`View source code for ${project.title}`}
                      >
                        <i className="fas fa-file-code text-sm md:text-base"></i>
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                    <span className="text-xs px-2 py-1 bg-secondary rounded-full self-start">{project.type}</span>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-muted rounded-full hover:bg-muted/80 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center pt-6 md:pt-8">
            <a
              href="https://github.com/ReaganJakeOngaya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-input px-4 md:px-6 py-2 md:py-3 rounded-md hover:bg-accent transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              View All Projects <i className="fas fa-arrow-right text-sm"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}