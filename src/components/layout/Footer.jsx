import React from 'react'
import { Mail, MapPin, Github, Linkedin, Dribbble, MessageCircle } from 'lucide-react'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/yourusername", label: 'GitHub' },
  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/muhammad-ahmad-bajwa-532413213/", label: 'LinkedIn' },
  { icon: <MessageCircle className="w-5 h-5" />, href: "https://wa.me/923315525004", label: 'WhatsApp' },
  { icon: <Dribbble className="w-5 h-5" />, href: "https://dribbble.com/yourusername", label: 'Dribbble' },
]

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/[0.06]">

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">

          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold text-primary">Muhammad Ahmad Bajwa</h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Crafting seamless digital experiences with modern web technologies.
            </p>

            {/* Contact info pills */}
            <div className="flex flex-col gap-3 mt-1">
              <a
                href="mailto:alex@timetoprogram.com"
                className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 hover:border-primary/20 hover:bg-white/[0.07] transition-all duration-200 group w-fit"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-white/70 text-sm group-hover:text-white transition-colors duration-200">
                  ahmedbajwa871@gmail.com
                </span>
              </a>

              <div className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 w-fit">
                <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-white/70 text-sm">Islamabad, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-semibold text-base">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2.5 text-white/50 text-sm hover:text-white transition-colors duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors duration-200 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Connect */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-semibold text-base">Connect With Me</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Let's connect and create something amazing together.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                   target="_blank"
                  className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-sm">
            © 2025 Muhammad Ahmad Bajwa. All rights reserved.
          </p>
          <p className="text-white/30 text-sm flex items-center gap-1.5">
            Built with
            <span className="text-red-500">♥</span>
            using React & Tailwind CSS
          </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer