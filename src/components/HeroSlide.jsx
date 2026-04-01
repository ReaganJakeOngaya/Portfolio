import { memo, useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../assets/reaganongaya.jpg";

const roles = ["Frontend Developer", "React Specialist", "UI/UX Enthusiast", "Problem Solver"];

function HeroSlide({ isActive, onNavigate }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setVisible(true);
        }, 300);
      }, 2500);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  return (
    <div className="w-full h-full flex items-start md:items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 md:py-0 relative overflow-y-auto scrollbar-thin noise-overlay">

      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      {/* Soft ambient blobs */}
      <div className="absolute top-[-8%] left-[-5%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsla(16,85%,58%,0.09) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-10%] right-[-8%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsla(210,60%,55%,0.07) 0%, transparent 70%)' }} />

      {/* Grid dots */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.4
        }} />

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-5 md:space-y-7 text-center lg:text-left"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full dashed-box text-xs tracking-widest uppercase text-[hsl(var(--muted-foreground))] mx-auto lg:mx-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))] animate-pulse-soft inline-block" />
            Available for work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.03em' }}
          >
            Reagan<br />
            <span className="text-[hsl(var(--muted-foreground))] font-light italic" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              O. Jake
            </span>
          </motion.h1>

          {/* Role cycle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="h-8 flex items-center gap-2 justify-center lg:justify-start"
          >
            <span className="text-[hsl(var(--muted-foreground))] text-base md:text-lg">I'm a</span>
            <AnimatePresence mode="wait">
              {visible && (
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-base md:text-lg font-semibold text-[hsl(var(--accent))]"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {roles[roleIndex]}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="text-[hsl(var(--muted-foreground))] text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0"
          >
            Passionate about crafting impactful software that bridges creativity and functionality.
            I transform ideas into digital experiences that matter.
          </motion.p>

          {/* Blockquote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="border-l-2 border-[hsl(var(--accent)/0.5)] pl-4 italic text-[hsl(var(--muted-foreground))] text-sm max-w-sm mx-auto lg:mx-0"
          >
            "Code is my art, and the web is my canvas."
          </motion.blockquote>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start"
          >
            <button
              onClick={() => onNavigate && onNavigate(5)}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl
                bg-[hsl(var(--foreground))] text-[hsl(var(--background))]
                text-sm font-medium tracking-wide
                shadow-[0_4px_16px_hsla(224,25%,10%,0.18)]
                hover:shadow-[0_6px_24px_hsla(224,25%,10%,0.26)]
                hover:scale-[1.03] active:scale-[0.97]
                transition-all duration-200 cursor-pointer"
            >
              Work with Me
            </button>
            <button
              onClick={() => onNavigate && onNavigate(3)}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl
                dashed-box text-sm font-medium tracking-wide
                text-[hsl(var(--foreground))]
                hover:bg-[hsl(var(--muted))]
                hover:scale-[1.03] active:scale-[0.97]
                transition-all duration-200 cursor-pointer"
            >
              View Projects
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-3 pt-2 justify-center lg:justify-start"
          >
            {[
              { href: "https://www.linkedin.com/in/reaganongaya/", icon: "fab fa-linkedin-in", label: "LinkedIn" },
              { href: "https://github.com/ReaganJakeOngaya", icon: "fab fa-github", label: "GitHub" },
              { href: "https://wa.me/254759095501", icon: "fab fa-whatsapp", label: "WhatsApp" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl flex items-center justify-center
                  bg-[hsl(var(--card))] border border-[hsl(var(--border))]
                  text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]
                  hover:border-[hsl(var(--foreground)/0.3)]
                  shadow-[var(--shadow-soft)]
                  hover:scale-110 active:scale-95
                  transition-all duration-200"
              >
                <i className={`${icon} text-sm`}></i>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative flex items-center justify-center mt-6 lg:mt-0"
        >
          {/* Dashed rings */}
          <div
            className="dashed-ring rotate-dash"
            style={{ width: '110%', height: '110%', top: '-5%', left: '-5%' }}
          />
          <div
            className="dashed-ring rotate-dash-reverse"
            style={{ width: '125%', height: '125%', top: '-12.5%', left: '-12.5%', opacity: 0.4 }}
          />

          {/* Image container */}
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] mx-auto">
            {/* Glow under */}
            <div className="absolute inset-[10%] rounded-full blur-3xl opacity-30"
              style={{ background: 'hsl(var(--accent))' }} />

            <img
              src={profileImg}
              alt="Reagan Jake - Frontend Developer"
              className="relative z-10 w-full h-full object-cover rounded-full
                border-2 border-[hsl(var(--border))]
                shadow-[0_16px_64px_hsla(0,0%,0%,0.14)]
                animate-float"
              loading="eager"
            />

            {/* Corner accent tag */}
            <div className="absolute bottom-4 right-4 z-20
              bg-[hsl(var(--card))] border border-[hsl(var(--border))]
              rounded-xl px-3 py-1.5 shadow-[var(--shadow-card)]
              text-xs font-medium text-[hsl(var(--muted-foreground))]"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              2+ yrs exp
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default memo(HeroSlide);