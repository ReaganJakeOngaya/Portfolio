// src/components/FooterInfo.jsx
import { memo } from "react";

const footerLinks = [
  { icon: "fas fa-envelope", label: "Email", value: "reaganjakeongaya@gmail.com", href: "mailto:reaganjakeongaya@gmail.com" },
  { icon: "fab fa-github",   label: "GitHub", value: "@ReaganJakeOngaya", href: "https://github.com/ReaganJakeOngaya" },
  { icon: "fas fa-phone",    label: "Phone", value: "+254 759 095501", href: "tel:+254759095501" },
];

function FooterInfo() {
  return (
    <div className="relative mt-10 pt-5">
      {/* Dashed top border */}
      <div className="absolute top-0 left-0 right-0 border-t border-dashed border-[hsl(var(--border))]" />

      <div className="flex flex-wrap justify-between items-center gap-3">
        {/* Name / brand */}
        <div className="flex items-center gap-2">
          <span
            className="text-sm font-bold tracking-tight text-[hsl(var(--foreground))]"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Reagan O. Jake
          </span>
          <span className="w-1 h-1 rounded-full bg-[hsl(var(--accent))]" />
          <span className="text-xs text-[hsl(var(--muted-foreground))]">Frontend Developer</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-3">
          {footerLinks.map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex items-center gap-1.5 text-xs text-[hsl(var(--muted-foreground))]
                hover:text-[hsl(var(--foreground))]
                transition-colors duration-200"
            >
              <i className={`${icon} text-[10px] text-[hsl(var(--accent))]`} />
              {value}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <span className="text-[10px] text-[hsl(var(--muted-foreground)/0.6)] tracking-wide">
          © {new Date().getFullYear()} Reagan O. Jake
        </span>
      </div>
    </div>
  );
}

export const FooterInfo = memo(FooterInfo);