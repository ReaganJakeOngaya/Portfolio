import { memo } from "react";
import { motion } from "framer-motion";

const contactItems = [
  {
    icon: "fas fa-phone-alt",
    label: "Call Me",
    value: "+254 759 095501",
    href: "tel:+254759095501",
    accent: "hsla(130,55%,45%,0.12)",
    accentBorder: "hsla(130,55%,45%,0.3)",
  },
  {
    icon: "fas fa-envelope",
    label: "Email",
    value: "reaganjakeongaya@gmail.com",
    href: "mailto:reaganjakeongaya@gmail.com",
    accent: "hsla(16,85%,58%,0.12)",
    accentBorder: "hsla(16,85%,58%,0.3)",
  },
  {
    icon: "fas fa-map-marker-alt",
    label: "Location",
    value: "Nairobi City, Kenya",
    href: null,
    accent: "hsla(210,70%,55%,0.12)",
    accentBorder: "hsla(210,70%,55%,0.3)",
  },
];

const socialLinks = [
  { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/reaganongaya/", label: "LinkedIn" },
  { icon: "fab fa-github", href: "https://github.com/ReaganJakeOngaya", label: "GitHub" },
  { icon: "fab fa-whatsapp", href: "https://wa.me/254759095501", label: "WhatsApp" },
];

function ContactSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 overflow-y-auto scrollbar-thin relative noise-overlay">

      {/* Background */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.4,
        }} />
      <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsla(16,85%,58%,0.07) 0%, transparent 70%)' }} />

      <div className="w-full max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8 md:space-y-10"
        >

          {/* Header */}
          <div className="space-y-2">
            <span className="text-xs tracking-widest uppercase text-[hsl(var(--accent))]"
              style={{ fontFamily: 'Syne, sans-serif' }}>05 — Contact</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold"
              style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.03em' }}>
              Let's Work<br />
              <span className="text-[hsl(var(--muted-foreground))] font-light italic"
                style={{ fontFamily: 'DM Sans, sans-serif' }}>Together</span>
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-[hsl(var(--accent))]" />
              <div className="w-2 h-2 rounded-full border border-[hsl(var(--accent))]" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">

            {/* Left — intro */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-5"
            >
              <p className="text-[hsl(var(--muted-foreground))] text-sm md:text-base leading-relaxed">
                Ready to bring your ideas to life? I'm always excited to work on new projects and
                collaborate with amazing people. Let's create something extraordinary together.
              </p>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full dashed-box text-xs text-[hsl(var(--muted-foreground))]">
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))] animate-pulse-soft" />
                Available 7am – 11pm EAT
              </div>

              {/* Social links */}
              <div className="space-y-2 pt-2">
                <p className="text-xs tracking-widest uppercase text-[hsl(var(--muted-foreground))]">Find me on</p>
                <div className="flex gap-2">
                  {socialLinks.map(({ icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
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
                </div>
              </div>
            </motion.div>

            {/* Right — contact cards */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              {contactItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + idx * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl
                    bg-[hsl(var(--card))] border border-[hsl(var(--border))]
                    shadow-[var(--shadow-soft)]
                    hover:shadow-[var(--shadow-card)]
                    hover:-translate-y-0.5
                    transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: item.accent,
                      border: `1px dashed ${item.accentBorder}`,
                    }}>
                    <i className={`${item.icon} text-sm text-[hsl(var(--foreground))]`}></i>
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <p className="text-xs text-[hsl(var(--muted-foreground))] mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href}
                        className="text-sm font-medium truncate block
                          hover:text-[hsl(var(--accent))] transition-colors duration-200"
                        style={{ fontFamily: 'Syne, sans-serif' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium" style={{ fontFamily: 'Syne, sans-serif' }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Quick message CTA */}
              <motion.a
                href="mailto:reaganjakeongaya@gmail.com"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center justify-center gap-2 w-full mt-2 py-3 rounded-2xl
                  bg-[hsl(var(--foreground))] text-[hsl(var(--background))]
                  text-sm font-medium tracking-wide
                  shadow-[0_4px_16px_hsla(224,25%,10%,0.18)]
                  hover:shadow-[0_6px_24px_hsla(224,25%,10%,0.26)]
                  hover:scale-[1.02] active:scale-[0.98]
                  transition-all duration-200"
              >
                <i className="fas fa-paper-plane text-xs"></i>
                Send a Message
              </motion.a>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}

export default memo(ContactSlide);