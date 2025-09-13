'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Project {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
}

interface ProjectsSectionProps {
  projects: Project[];
  isVisible: { [key: string]: boolean };
}


import { useState } from 'react';

function ProjectsSection({ projects, isVisible }: ProjectsSectionProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleProjectClick = (projectId: string) => {
    setLoading(true);
    router.push(`/projects/${projectId}`);
  };

  return (
    <section id="projects" className="py-32 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 fade-in-element">
          <div className="text-xs font-semibold text-slate-500 tracking-widest mb-2 uppercase">Our Portfolio</div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-slate-900 text-left">Completed Projects</h2>
          <div className="h-1 w-16 bg-slate-700 rounded mb-4" />
          <p className="text-slate-500 text-lg max-w-2xl text-left">
            Showcasing our expertise through successful project deliveries across Pune.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`fade-in-element group ${isVisible[`element-${index + 10}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-1000`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className="relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={256}
                    priority={index < 3}
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 text-slate-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-lg font-bold mb-1">{project.name}</div>
                    <div className="text-sm opacity-90">{project.description}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Loader Overlay */}
        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="w-16 h-16 border-4 border-slate-300 border-t-slate-700 rounded-full animate-spin" />
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
