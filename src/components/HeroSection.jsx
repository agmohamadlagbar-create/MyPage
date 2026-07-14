import React, { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const stats = [
    { label: 'Years Building', value: '2+' },
    { label: 'Projects Shipped', value: '5+' },
    { label: 'Technologies', value: '27+' },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Blob layer 1 — slow morph */}
      <div
        className="absolute blob-morph-slow pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          top: '-10%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(27,160,152,0.14) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 15}px)`,
          transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* Blob layer 2 */}
      <div
        className="absolute blob-morph pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          bottom: '-5%',
          left: '-8%',
          background: 'radial-gradient(circle, rgba(15,76,117,0.2) 0%, transparent 70%)',
          filter: 'blur(100px)',
          transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -10}px)`,
          transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* Floating orb 1 */}
      <div
        className="absolute float-anim pointer-events-none hidden md:block"
        style={{
          width: '80px',
          height: '80px',
          top: '20%',
          right: '15%',
          background: 'radial-gradient(circle, rgba(27,160,152,0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(8px)',
          border: '1px solid rgba(27,160,152,0.2)',
        }}
      />

      {/* Floating orb 2 */}
      <div
        className="absolute float-anim-slow pointer-events-none hidden md:block"
        style={{
          width: '50px',
          height: '50px',
          bottom: '30%',
          right: '25%',
          background: 'radial-gradient(circle, rgba(77,217,208,0.25) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(6px)',
          border: '1px solid rgba(77,217,208,0.15)',
          animationDelay: '2s',
        }}
      />

      <div className="container relative z-10 max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="fade-in-up mb-6 flex items-center gap-3">
          <div className="flex items-center gap-2 glass-card-light rounded-full px-4 py-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="section-label">Available for opportunities</span>
          </div>
        </div>

        {/* Massive hero typography */}
        <div className="mb-6">
          <h1 className="fade-in-up font-display text-5xl sm:text-6xl md:text-7xl lg:text-hero-xl font-bold text-foreground leading-none tracking-tight">
            <span className="block">MOHAMAD</span>
            <span
              className="block gradient-text-accent"
              style={{ animationDelay: '0.1s' }}
            >
              LAGBAR
            </span>
          </h1>
        </div>

        {/* Role + description */}
        <div className="max-w-xl mb-10" style={{ animationDelay: '0.2s' }}>
          <p
            className="fade-in-up text-lg font-semibold text-foreground mb-3 tracking-wide"
            style={{ animationDelay: '0.25s' }}
          >
            Software Engineer
          </p>
          <p
            className="fade-in-up text-base text-muted-foreground leading-relaxed"
            style={{ animationDelay: '0.35s' }}
          >
            I build fast, thoughtful web applications with clean architecture and
            great developer experience. Focused on full-stack engineering, scalable
            systems, and shipping products people love.
          </p>
        </div>

        {/* CTAs */}
        <div
          className="fade-in-up flex flex-col sm:flex-row gap-3 mb-16"
          style={{ animationDelay: '0.45s' }}
        >
          <a href="#projects" className="cta-primary text-center">
            View My Work
          </a>
          <a href="#contact" className="cta-secondary text-center">
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div
          className="fade-in-up grid grid-cols-3 gap-4 max-w-md"
          style={{ animationDelay: '0.55s' }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-2xl font-bold font-display text-accent">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
