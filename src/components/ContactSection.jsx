import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const socialLinks = [
  {
    label: 'GitHub',
    handle: '@agmohamadlagbar-create',
    href: 'https://github.com/agmohamadlagbar-create',
    icon: 'CodeBracketIcon',
  },
  {
    label: 'LinkedIn',
    handle: 'mohamadlagbar',
    href: 'https://www.linkedin.com/in/mohamadlagbar',
    icon: 'BriefcaseIcon',
  },
  {
    label: 'Email',
    handle: 'ag.mohamadlagbar@gmail.com',
    href: 'mailto:ag.mohamadlagbar@gmail.com',
    icon: 'EnvelopeIcon',
  },
];

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.contact-reveal');
            items.forEach((item, i) => {
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden" ref={sectionRef}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(27,160,152,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div
          className="contact-reveal mb-12 text-center"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)' }}
        >
          <span className="section-label block mb-3">05 — Contact</span>
          <h2 className="text-section-heading font-display font-bold text-foreground mb-4">
            Let's{' '}
            <span className="gradient-text-accent">Work Together</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-base leading-relaxed">
            Open to full-time roles, freelance projects, and interesting conversations.
            Drop me a message — I reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Social links */}
          <div
            className="contact-reveal lg:col-span-2 flex flex-col gap-4"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s' }}
          >
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-2">
              Find me here
            </h3>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 flex items-center gap-4 group hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon name={link.icon} size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{link.label}</p>
                  <p className="text-xs text-muted-foreground">{link.handle}</p>
                </div>
                <Icon
                  name="ArrowUpRightIcon"
                  size={16}
                  className="text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300"
                />
              </a>
            ))}

            {/* Availability badge */}
            <div className="glass-card rounded-2xl p-5 border border-accent/20 mt-2">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-semibold text-foreground">Available Now</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Open to full-time positions and freelance contracts starting immediately.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div
            className="contact-reveal lg:col-span-3"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s' }}
          >
            <div className="glass-card rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name="CheckIcon" size={28} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground">Message sent!</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                        className="bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                        className="bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project, role, or just say hi..."
                      value={formState.message}
                      onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                      className="bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all duration-200 resize-none"
                    />
                  </div>
                  <button type="submit" className="cta-primary w-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
