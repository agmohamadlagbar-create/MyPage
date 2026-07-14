import React, { useState, useEffect, useRef } from "react";
import FrameCanvas from "./components/FrameCanvas";
import { developerData } from "./data";
import { ChevronDown, Menu, X } from "lucide-react";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import "./App.css";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loadingPct, setLoadingPct] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Initializing workspace...");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTrackRef = useRef(null);

  // Dynamic loading text
  useEffect(() => {
    if (loadingPct < 25) {
      setLoadingText("Bootstrapping React environment...");
    } else if (loadingPct < 50) {
      setLoadingText("Loading visual assets...");
    } else if (loadingPct < 75) {
      setLoadingText("Setting up Tailwind layout engine...");
    } else if (loadingPct < 99) {
      setLoadingText("Configuring neural nodes...");
    } else {
      setLoadingText("System ready.");
    }
  }, [loadingPct]);

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isLoading) return;
      
      const track = scrollTrackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const totalScrollHeight = rect.height - window.innerHeight;
      
      const currentScroll = -rect.top;
      let progress = currentScroll / totalScrollHeight;
      
      progress = Math.min(1, Math.max(0, progress));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  // Determine visibility and opacity for scroll text overlays
  const getTextOverlayStyle = (start, end) => {
    const fadeInStart = start;
    const fadeInEnd = start + 0.05;
    const fadeOutStart = end - 0.05;
    const fadeOutEnd = end;

    let opacity = 0;
    let translateY = 20;

    if (scrollProgress >= fadeInStart && scrollProgress <= fadeOutEnd) {
      if (scrollProgress < fadeInEnd) {
        const ratio = (scrollProgress - fadeInStart) / (fadeInEnd - fadeInStart);
        opacity = ratio;
        translateY = 20 - ratio * 20;
      } else if (scrollProgress > fadeOutStart) {
        const ratio = (fadeOutEnd - scrollProgress) / (fadeOutEnd - fadeOutStart);
        opacity = ratio;
        translateY = - (1 - ratio) * 20;
      } else {
        opacity = 1;
        translateY = 0;
      }
    }

    return {
      opacity,
      transform: `translateY(${translateY}px)`,
      display: opacity > 0 ? "block" : "none",
    };
  };

  return (
    <div className="portfolio-app font-sans bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
      {/* Dynamic Header */}
      {!isLoading && (
        <>
          <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 glass-card-light py-4 px-6 md:px-12 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src="/ML_icon.svg" alt="ML Logo" className="w-6 h-6 object-contain" />
              <span className="font-display font-bold text-lg tracking-wider text-foreground">
                ML
              </span>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
              <a href="#home" className="hover:text-accent transition-colors duration-200">Home</a>
              <a href="#projects" className="hover:text-accent transition-colors duration-200">Work</a>
              <a href="#skills" className="hover:text-accent transition-colors duration-200">Stack</a>
              <a href="#experience" className="hover:text-accent transition-colors duration-200">History</a>
              <a href="#contact" className="hover:text-accent transition-colors duration-200">Contact</a>
            </nav>
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-accent transition-colors focus:outline-none z-50 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </header>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-40 bg-[#050508]/98 backdrop-blur-xl md:hidden flex flex-col justify-center items-center gap-8 text-xl font-semibold transition-all duration-300">
              <a 
                href="#home" 
                className="text-foreground/80 hover:text-accent transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#projects" 
                className="text-foreground/80 hover:text-accent transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Work
              </a>
              <a 
                href="#skills" 
                className="text-foreground/80 hover:text-accent transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Stack
              </a>
              <a 
                href="#experience" 
                className="text-foreground/80 hover:text-accent transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                History
              </a>
              <a 
                href="#contact" 
                className="text-foreground/80 hover:text-accent transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          )}
        </>
      )}

      {/* 1. Preloader Overlay */}
      {isLoading && (
        <div className="loader-screen">
          <div className="loader-card">
            <h1 className="loader-title glow-text">{developerData.name}</h1>
            <h3 className="loader-subtitle">{developerData.title}</h3>
            
            <div className="loader-bar-container">
              <div 
                className="loader-bar" 
                style={{ width: `${loadingPct}%` }}
              />
            </div>
            
            <div className="loader-percentage">{loadingPct}%</div>
            <div className="loader-status-text">{loadingText}</div>
          </div>
        </div>
      )}

      {/* 2. Scroll Canvas Section */}
      <div 
        ref={scrollTrackRef} 
        className="intro-scroll-track"
        style={{ height: "450vh" }}
      >
        <div className="canvas-sticky-container">
          <FrameCanvas 
            scrollProgress={scrollProgress}
            onLoadingProgress={setLoadingPct}
            onLoadingComplete={() => setIsLoading(false)}
          />

          {/* Environmental Glows and Vignettes */}
          <div className="radial-glow glow-blue"></div>
          <div className="radial-glow glow-purple"></div>
          <div className="vignette-overlay"></div>

          {/* Scroll Checkpoint Overlays */}
          <div className="text-overlay-container">
            <div className="scroll-text" style={getTextOverlayStyle(0.0, 0.22)}>
              <h2 className="tagline glow-cyan">Welcome to my space</h2>
              <h1 className="hero-name">{developerData.name}</h1>
              <p className="hero-description">
                Building fast, thoughtful web applications with clean architecture and great developer experience.
              </p>
            </div>

            <div className="scroll-text" style={getTextOverlayStyle(0.26, 0.48)}>
              <h2 className="tagline glow-purple">Enterprise Engineering</h2>
              <h3 className="overlay-heading">Scalable Backend Systems</h3>
              <p className="hero-description">
                Designing highly reliable APIs, database architectures, and modular microservices.
              </p>
            </div>

            <div className="scroll-text" style={getTextOverlayStyle(0.52, 0.74)}>
              <h2 className="tagline glow-emerald">Intelligent Workflows</h2>
              <h3 className="overlay-heading">AI Integrations & Agents</h3>
              <p className="hero-description">
                Deploying cognitive automation networks and semantic LLM orchestrations.
              </p>
            </div>

            <div className="scroll-text" style={getTextOverlayStyle(0.78, 0.94)}>
              <h2 className="tagline glow-gold">Professional Profile</h2>
              <h3 className="overlay-heading">Step Inside</h3>
              <p className="hero-description">
                Scroll down further to view my work history, stack, and direct contacts.
              </p>
            </div>
          </div>

          {/* Indicator */}
          {!isLoading && scrollProgress < 0.92 && (
            <div className="scroll-indicator">
              <span>SCROLL TO STEP INSIDE</span>
              <ChevronDown className="bounce-arrow" size={24} />
            </div>
          )}
        </div>
      </div>

      {/* 3. Render Your Exact Code Sections */}
      {!isLoading && (
        <main className="relative z-20">
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      )}

      {/* Footer */}
      {!isLoading && (
        <footer className="py-12 border-t border-border/40 text-center text-xs text-muted-foreground relative z-20 bg-background/80 backdrop-blur-md">
          <p>© {new Date().getFullYear()} Mohamad Lagbar. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
}
