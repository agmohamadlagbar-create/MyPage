import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const projects = [
{
  id: 1,
  title: 'LagbarShop Platform',
  description:
  'A multi-platform e-commerce ecosystem with a dual-provider AI Gateway (routing between Groq and GLM) and a multi-agent AI system (Planner, Shopping, Support, Reporting). Features real-time GPS delivery tracking on interactive Leaflet maps and live order lifecycle management via SignalR.',
  tech: ['ASP.NET Core', 'React (Vite)', 'SignalR', 'Groq & GLM', 'Leaflet'],
  image: '/lagbar_shop_dashboard.png',
  alt: 'A sleek, modern dark-themed dashboard showing a real-time delivery tracking map, live chat interface with an AI assistant, and order status indicators.',
  label: 'Full-Stack & AI',
  link: 'http://lagbar.runasp.net/',
  featured: true
},
{
  id: 2,
  title: 'AI Academic Mentor',
  description:
  'A full-stack academic mentoring platform leveraging LLMs for personalized career advice, transcript analysis, and custom project suggestions. Features automated PDF report generation, secure authentication, and a modern Blazor frontend.',
  tech: ['ASP.NET Core', 'Blazor', 'LLMs (Groq)', 'EF Core', 'PDF Generation'],
  image: '/ai_academic_mentor.png',
  alt: 'A premium futuristic academic mentor dashboard showing grade analytics, course progress, and a friendly AI chat advisor.',
  label: 'AI & Blazor',
  link: 'https://github.com/agmohamadlagbar-create/AIAM',
  featured: false
},
{
  id: 3,
  title: 'NetQueue Rooms',
  description:
  'A room-based chat and file-sharing desktop application implementing a TCP/IP network protocol. Features isolated message queues, TCP/IP sockets in C#, custom room commands (/join, /rooms), and a multi-client Windows Forms UI.',
  tech: ['C#', '.NET', 'TCP/IP Sockets', 'Windows Forms', 'Message Queues'],
  image: '/socket_chat_rooms.png',
  alt: 'A retro-modern chat client showing active rooms, connected user sockets, and file transfer logs in a terminal-style layout.',
  label: 'Networking',
  link: 'https://github.com/agmohamadlagbar-create/NetQueueRooms',
  featured: false
},
{
  id: 4,
  title: 'TaskManager',
  description:
  'A modern task manager featuring an ASP.NET Core Web API backend and a React (Vite) frontend. Includes user registration, dynamic dashboards, task prioritization (High, Medium, Low), custom category tagging, and date sorting.',
  tech: ['ASP.NET Core API', 'React (Vite)', 'SQL Server', 'Entity Framework', 'CSS Glassmorphism'],
  image: '/task_manager_dashboard.png',
  alt: 'An elegant glassmorphic dashboard with columns of active tasks, color-coded priority badges, and category dropdowns.',
  label: 'Full-Stack',
  link: 'https://github.com/agmohamadlagbar-create/TaskManager-',
  featured: false
}];

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.scroll-reveal');
            children.forEach((child, i) => {
              setTimeout(() => {
                child.classList.add('fade-in-up');
              }, i * 120);
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
    <section id="projects" className="relative py-24 px-6 overflow-hidden" ref={sectionRef}>
      {/* Background blob */}
      <div
        className="absolute top-0 right-0 w-96 h-96 blob-teal pointer-events-none"
        style={{ transform: 'translate(30%, -20%)' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="scroll-reveal opacity-100 mb-12">
          <span className="section-label block mb-3">02 — Selected Work</span>
          <h2 className="text-section-heading font-display font-bold text-foreground">
            Things I've{' '}
            <span className="gradient-text-accent">Built</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 — Featured, spans 2 cols */}
          <div className="scroll-reveal opacity-100 lg:col-span-2 group relative overflow-hidden rounded-2xl shimmer-hover cursor-pointer">
            <div className="relative h-72 md:h-80 overflow-hidden">
              <AppImage
                src={projects?.[0]?.image}
                alt={projects?.[0]?.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority />
              
              <div className="project-card-overlay absolute inset-0" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="skill-tag">{projects?.[0]?.label}</span>
                  <a
                    href={projects?.[0]?.link}
                    className="w-9 h-9 glass-card rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    aria-label={`View ${projects?.[0]?.title}`}>
                    
                    <Icon name="ArrowUpRightIcon" size={16} className="text-accent" />
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-display">
                    {projects?.[0]?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-sm">
                    {projects?.[0]?.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projects?.[0]?.tech?.map((t) =>
                    <span key={t} className="skill-tag-muted">{t}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Single col */}
          <div className="scroll-reveal opacity-100 group relative overflow-hidden rounded-2xl shimmer-hover cursor-pointer">
            <div className="relative h-72 md:h-80 overflow-hidden">
              <AppImage
                src={projects?.[1]?.image}
                alt={projects?.[1]?.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
              <div className="project-card-overlay absolute inset-0" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="skill-tag">{projects?.[1]?.label}</span>
                  <a
                    href={projects?.[1]?.link}
                    className="w-9 h-9 glass-card rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    aria-label={`View ${projects?.[1]?.title}`}>
                    
                    <Icon name="ArrowUpRightIcon" size={16} className="text-accent" />
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-display">
                    {projects?.[1]?.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    {projects?.[1]?.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {projects?.[1]?.tech?.slice(0, 3)?.map((t) =>
                    <span key={t} className="skill-tag-muted">{t}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 — Single col */}
          <div className="scroll-reveal opacity-100 group relative overflow-hidden rounded-2xl shimmer-hover cursor-pointer">
            <div className="relative h-72 overflow-hidden">
              <AppImage
                src={projects?.[2]?.image}
                alt={projects?.[2]?.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
              <div className="project-card-overlay absolute inset-0" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="skill-tag">{projects?.[2]?.label}</span>
                  <a
                    href={projects?.[2]?.link}
                    className="w-9 h-9 glass-card rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    aria-label={`View ${projects?.[2]?.title}`}>
                    
                    <Icon name="ArrowUpRightIcon" size={16} className="text-accent" />
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-display">
                    {projects?.[2]?.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    {projects?.[2]?.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {projects?.[2]?.tech?.slice(0, 3)?.map((t) =>
                    <span key={t} className="skill-tag-muted">{t}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 — Spans 2 cols */}
          <div className="scroll-reveal opacity-100 lg:col-span-2 group relative overflow-hidden rounded-2xl shimmer-hover cursor-pointer">
            <div className="relative h-72 overflow-hidden">
              <AppImage
                src={projects?.[3]?.image}
                alt={projects?.[3]?.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw" />
              
              <div className="project-card-overlay absolute inset-0" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="skill-tag">{projects?.[3]?.label}</span>
                  <a
                    href={projects?.[3]?.link}
                    className="w-9 h-9 glass-card rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    aria-label={`View ${projects?.[3]?.title}`}>
                    
                    <Icon name="ArrowUpRightIcon" size={16} className="text-accent" />
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-display">
                    {projects?.[3]?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-md">
                    {projects?.[3]?.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projects?.[3]?.tech?.map((t) =>
                    <span key={t} className="skill-tag-muted">{t}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
