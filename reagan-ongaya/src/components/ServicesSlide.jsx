import { motion } from "framer-motion";

const services = [
  {
    icon: "fas fa-layer-group",
    title: "Frontend Development",
    description: "Creating responsive, interactive, and modern web interfaces using the latest technologies and best practices.",
    features: ["Responsive Web Design", "React Applications", "Performance Optimization", "Cross-browser Compatibility"],
    accent: "hsla(16,85%,58%,0.1)",
    accentBorder: "hsla(16,85%,58%,0.3)",
  },
  {
    icon: "fas fa-server",
    title: "Backend Development",
    description: "Building robust, scalable server-side applications with secure APIs and efficient database management.",
    features: ["RESTful API Development", "Database Design", "Authentication & Security", "Cloud Integration"],
    accent: "hsla(210,60%,55%,0.1)",
    accentBorder: "hsla(210,60%,55%,0.3)",
  },
  {
    icon: "fas fa-pen-nib",
    title: "UI/UX Development",
    description: "Designing and developing intuitive user interfaces that deliver excellent experiences across all devices.",
    features: ["User Interface Design", "Prototyping & Wireframing", "UX Optimization", "Design Systems"],
    accent: "hsla(155,60%,45%,0.1)",
    accentBorder: "hsla(155,60%,45%,0.3)",
  },
  {
    icon: "fas fa-plug",
    title: "API Integration",
    description: "Seamlessly connecting applications with third-party services and creating efficient data flow systems.",
    features: ["Third-party Integrations", "Payment Gateways", "Social Media APIs", "Custom Webhooks"],
    accent: "hsla(280,60%,55%,0.1)",
    accentBorder: "hsla(280,60%,55%,0.3)",
  },
];

export default function ServicesSlide() {
  return (
    <div className="w-full h-full flex items-start md:items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 md:py-0 overflow-y-auto scrollbar-thin relative noise-overlay">

      {/* Background */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.4
        }} />

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
              style={{ fontFamily: 'Syne, sans-serif' }}>04 — Services</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold"
              style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.03em' }}>
              What I Do
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-[hsl(var(--accent))]" />
              <div className="w-2 h-2 rounded-full border border-[hsl(var(--accent))]" />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl
                  bg-[hsl(var(--card))] border border-[hsl(var(--border))]
                  shadow-[var(--shadow-card)]
                  hover:shadow-[var(--shadow-elevated)]
                  hover:-translate-y-1
                  transition-all duration-300
                  p-5 md:p-6 flex flex-col gap-4"
              >
                {/* Accent glow in corner */}
                <div className="absolute top-0 right-0 w-28 h-28 rounded-bl-full pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-60"
                  style={{ background: `radial-gradient(circle at top right, ${service.accent}, transparent 70%)` }} />

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: service.accent,
                    border: `1px dashed ${service.accentBorder}`
                  }}>
                  <i className={`${service.icon} text-base`} style={{ color: `hsl(var(--foreground))` }}></i>
                </div>

                <div className="flex-grow space-y-2">
                  <h3 className="text-base md:text-lg font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Feature list */}
                <div className="pt-1 border-t border-dashed border-[hsl(var(--border))] space-y-1.5">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[hsl(var(--muted-foreground))]">
                      <span className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: service.accentBorder }} />
                      {feat}
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