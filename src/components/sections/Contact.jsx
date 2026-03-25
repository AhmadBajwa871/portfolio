import React, { useState, useRef } from 'react'
import { MessageSquare, Mail, MapPin, Github, Linkedin, MessageCircle, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import FadeIn from '../animations/FadeIn'

// ─── Replace these three values with your EmailJS credentials ───
const EMAILJS_SERVICE_ID  = 'service_blamf0a'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_5ifkoyc'  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY = 'vNvfOSfFdt8LVl22n'   // e.g. 'a1B2c3D4e5F6g7H8'
// ────────────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5 text-primary" />,
    label: 'Email',
    value: 'ahmedbajwa871@gmail.com',
  },
  {
    icon: <MapPin className="w-5 h-5 text-primary" />,
    label: 'Location',
    value: 'Islamabad, Pakistan',
  },
]

const socials = [
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/yourusername", label: 'GitHub' },
  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/muhammad-ahmad-bajwa-532413213/", label: 'LinkedIn' },
  { icon: <MessageCircle className="w-5 h-5" />, href: "https://wa.me/923315525004", label: 'WhatsApp' },
]

const Contact = () => {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-24 bg-black overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-[500px] sm:h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 border border-primary/30 rounded-full mb-4 sm:mb-6">
              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm text-primary font-medium tracking-wider uppercase">
                Get In Touch
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-normal text-white mb-3 sm:mb-4 leading-tight">
              Let's Work Together
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">

          {/* LEFT — Form */}
          <FadeIn delay={100}>
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 sm:p-8 lg:p-10">
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-white/80 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-white/80 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-white/80 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-green-400 hover:from-green-400 hover:to-primary text-black font-semibold text-sm rounded-xl py-3.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Success message */}
                {status === 'success' && (
                  <div className="w-full border border-primary/30 bg-primary/5 rounded-xl px-4 py-3 text-primary text-sm text-center">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {/* Error message */}
                {status === 'error' && (
                  <div className="w-full border border-red-500/30 bg-red-500/5 rounded-xl px-4 py-3 text-red-400 text-sm text-center">
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

              </form>
            </div>
          </FadeIn>

          {/* RIGHT — Info */}
          <FadeIn delay={200}>
            <div className="flex flex-col gap-6 lg:gap-8 lg:pt-2">

              <div>
                <h3 className="text-2xl sm:text-3xl font-normal text-white mb-3">
                  Let's Connect
                </h3>
                <p className="text-white/50 text-sm sm:text-base leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
                </p>
              </div>

              {/* Contact info cards */}
              <div className="flex flex-col gap-3">
                {contactInfo.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-4 hover:border-primary/20 hover:bg-white/[0.05] transition-all duration-200"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-white/40 mb-0.5">{item.label}</div>
                      <div className="text-white text-sm sm:text-base font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-3">
                  Connect with me
                </p>
                <div className="flex gap-3">
                  {socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}

export default Contact