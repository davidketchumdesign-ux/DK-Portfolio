'use client';

import { ProjectCard } from './ProjectCard';
import type { Project } from '@/content/projects';

interface ProjectGridProps {
  title: string;
  description: string;
  projects: Project[];
  sectionId?: string;
}

export function ProjectGrid({ title, description, projects, sectionId }: ProjectGridProps) {
  return (
    <section className="work-section" id={sectionId}>
      <style jsx>{`
        .work-section {
          max-width: var(--container);
          margin: 0 auto;
          padding: 40px var(--gutter) 120px;
        }

        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 48px;
          gap: 24px;
        }

        .section-head h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          letter-spacing: -0.02em;
        }

        .section-head p {
          color: var(--text-muted);
          font-size: 14.5px;
          max-width: 320px;
          text-align: right;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 860px) {
          .work-section {
            padding: 24px 22px 90px;
          }
          .section-head {
            flex-direction: column;
            align-items: flex-start;
          }
          .section-head p {
            text-align: left;
          }
          .project-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="section-head">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="project-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
