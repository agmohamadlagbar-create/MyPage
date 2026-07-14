import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: 'CodeBracketIcon',
    tags: ['C#', 'JavaScript (ES6+)', 'Python', 'SQL'],
    accent: true,
  },
  {
    id: 'frontend',
    label: 'Frontend Development',
    icon: 'ComputerDesktopIcon',
    tags: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'],
    accent: false,
    colSpan: 'lg:col-span-2',
  },
  {
    id: 'backend',
    label: 'Backend (.NET Ecosystem)',
    icon: 'ServerIcon',
    tags: ['ASP.NET Core Web APIs', 'Entity Framework Core', 'LINQ', 'SignalR (Real-Time)', 'JWT Authentication', 'ASP.NET Core Identity'],
    accent: false,
  },
  {
    id: 'databases',
    label: 'Databases & Caching',
    icon: 'CircleStackIcon',
    tags: ['SQL Server', 'SQLite', 'Supabase', 'Redis Caching'],
    accent: false,
  },
  {
    id: 'ai_architecture',
    label: 'AI & Architecture',
    icon: 'CpuChipIcon',
    tags: ['LLM Integration (Groq, OpenAI)', 'AI Agent Orchestration', 'RESTful API Design', 'Microservices Architecture', 'OOP', 'Data Structures & Algorithms'],
    accent: false,
  },
  {
    id: 'tools_testing',
    label: 'DevOps, Tools & Testing',
    icon: 'WrenchScrewdriverIcon',
    tags: ['Docker', 'Git & GitHub', 'CI/CD', 'Stripe API Integration', 'xUnit Unit Testing'],
    accent: false,
    colSpan: 'lg:col-span-3',
  },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.skill-card-reveal');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
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

  return (
    <section id="skills" className="relative py-20 px-6 overflow-hidden" ref={sectionRef}>
      <div
        className="absolute bottom-0 left-0 w-80 h-80 blob-navy pointer-events-none"
        style={{ transform: 'translate(-30%, 20%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12">
          <span className="section-label block mb-3">03 — Technical Skills</span>
          <h2 className="text-section-heading font-display font-bold text-foreground">
            My{' '}
            <span className="gradient-text-accent">Stack</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className={`skill-card-reveal glass-card rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-accent/30 group ${cat.colSpan || ''}`}
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center bg-muted text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300"
                >
                  <Icon name={cat.icon} size={18} />
                </div>
                <span className="font-semibold text-foreground text-sm tracking-wide">
                  {cat.label}
                </span>
                {cat.isLearning && (
                  <span className="ml-auto text-xs text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                    In progress
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="skill-tag-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
