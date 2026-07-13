import React, { useEffect, useRef } from 'react';

const experiences = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'Scramblebit Pazarlama Programlama LTŞ',
    period: '2024 — Present',
    location: 'Remote',
    description:
      'Developed and maintained robust backend services using ASP.NET Core and C#. Built scalable web architectures, integrated RESTful APIs, and optimized application performance.',
    tech: ['ASP.NET Core', 'C#', 'React', 'REST APIs', 'SQL Server'],
    current: true,
  },
];

const sideStats = [
  { label: 'Years Building', value: '2+' },
  { label: 'Projects Shipped', value: '4+' },
  { label: 'Technologies', value: '10+' },
];

export default function ExperienceSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.exp-reveal');
            items.forEach((item, i) => {
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="relative py-20 px-6 overflow-hidden" ref={sectionRef}>
      <div
        className="absolute top-1/4 right-0 w-72 h-72 blob-teal pointer-events-none"
        style={{ transform: 'translate(40%, 0)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 exp-reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)' }}>
          <span className="section-label block mb-3">04 — Work History</span>
          <h2 className="text-section-heading font-display font-bold text-foreground">
            Where I've{' '}
            <span className="gradient-text-accent">Worked</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Left: Timeline */}
          <div className="lg:col-span-2 flex flex-col gap-0">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className="exp-reveal flex gap-6 group"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
                }}
              >
                {/* Timeline spine */}
                <div className="flex flex-col items-center pt-1">
                  <div className="timeline-dot" style={{ animation: exp.current ? 'pulseGlow 2s ease-in-out infinite' : 'none' }} />
                  {i < experiences.length - 1 && (
                    <div className="timeline-line flex-1 mt-2" style={{ minHeight: '60px' }} />
                  )}
                </div>

                {/* Content */}
                <div className="pb-10 flex-1">
                  <div className="glass-card rounded-2xl p-6 group-hover:border-accent/25 transition-all duration-300 hover:shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-base font-bold text-foreground font-display">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-accent text-sm font-semibold">{exp.company}</span>
                          {exp.current && (
                            <span className="text-xs bg-accent/15 text-accent px-2 py-0.5 rounded-full border border-accent/25 font-medium">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                        <span className="text-xs text-muted-foreground font-medium">{exp.period}</span>
                        <span className="text-xs text-muted-foreground">{exp.location}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="skill-tag-muted">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Sticky stat card */}
          <div className="lg:col-span-1 exp-reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.3s' }}>
            <div className="lg:sticky lg:top-28 flex flex-col gap-4">
              {/* Stats card */}
              <div className="glass-card rounded-2xl p-6 border border-accent/15">
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-5">
                  Career at a Glance
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {sideStats.map((s) => (
                    <div key={s.label} className="flex flex-col gap-1">
                      <span className="text-2xl font-bold font-display text-accent">{s.value}</span>
                      <span className="text-xs text-muted-foreground">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resume CTA */}
              <div className="glass-card rounded-2xl p-6 flex flex-col gap-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Want the full picture? Download my resume for detailed responsibilities and achievements.
                </p>
                <a
                  href="/MOHAMAD_LAGBAR_CV2.pdf"
                  download="MOHAMAD_LAGBAR_CV2.pdf"
                  className="cta-primary text-center text-sm"
                  aria-label="Download resume"
                >
                  Download Resume
                </a>
              </div>

              {/* Education */}
              <div className="glass-card rounded-2xl p-6">
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                  Education
                </h4>
                <div>
                  <p className="text-sm font-semibold text-foreground">Bachelor of Science (B.Sc.) in Software Engineering</p>
                  <p className="text-xs text-accent mt-1">Faculty of Engineering, Karabuk University</p>
                  <p className="text-xs text-muted-foreground mt-1">2022 - 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
