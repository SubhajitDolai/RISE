'use client';

import React from 'react';
import OptimizedImage from '../ui/OptimizedImage';
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

function ProjectsSection({ projects, isVisible }: ProjectsSectionProps) {
  const router = useRouter();

  const handleProjectClick = (projectId: string) => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 fade-in-element">
          <div className="text-sm font-bold text-slate-600 tracking-wider mb-4">OUR PORTFOLIO</div>
          <h2 className="text-5xl font-bold mb-6 text-slate-900">
            Completed
            <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent"> Projects</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing our expertise through successful project deliveries across Pune
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
                className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 cursor-pointer"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <OptimizedImage
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={256}
                    priority={index < 3} // Priority for first 3 projects (above the fold)
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6 bg-slate-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-xl font-bold mb-2">{project.name}</div>
                    <div className="text-sm opacity-90">{project.description}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
