'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { revealVariants, cardHoverVariants, imageZoomVariants } from '@/lib/animation';
import type { Project } from '@/content/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Gradient colors from prototypes
  const gradients: Record<string, string> = {
    shopify: '135deg, #6E8CFF, #C2CEFF',
    'restaurant-service-design': '135deg, #FF6B35, #FFB89C',
    'insurance-crm-email': '135deg, #2FBE83, #9EE8C5',
    brixli: '135deg, #3352E1, #8AA3FF',
    icebreakr: '135deg, #14181C, #63666B',
    'bet-sync': '135deg, #FF6B35, #2FBE83',
  };

  const gradient = gradients[project.slug] || 'linear-gradient(135deg, #3352E1, #8AA3FF)';
  const hasRealCover = /\.(png|webp)$/.test(project.coverImage);

  return (
    <motion.div
      custom={index}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="card-wrapper"
    >
      <motion.div
        variants={cardHoverVariants}
        initial="initial"
        whileHover="hover"
        className="card"
        style={{ cursor: 'pointer' }}
      >
        <Link href={`/case-studies/${project.slug}`} className="card-link">
          <div className="card-cover">
            <motion.div
              className="card-cover-inner"
              variants={imageZoomVariants}
              initial="initial"
              whileHover="hover"
              style={
                hasRealCover
                  ? {
                      backgroundImage: `url(${project.coverImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'top center',
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                    }
                  : ({
                      background: `linear-gradient(${gradient})`,
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                    } as React.CSSProperties)
              }
            />
          </div>
          <div className="card-body">
            <span className="card-tag">{project.industry}</span>
            <h3 className="card-title">{project.title}</h3>
            <p className="card-desc">{project.summary}</p>
          </div>
        </Link>
      </motion.div>

      <style jsx>{`
        .card-wrapper {
          width: 100%;
        }

        .card {
          display: block;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--card-shadow);
          transition: border-color 0.4s var(--ease), box-shadow 0.4s var(--ease);
        }

        .card:hover {
          box-shadow: var(--card-shadow-hover);
        }

        :global(.card-link) {
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .card-cover {
          height: 220px;
          position: relative;
          overflow: hidden;
        }

        .card-cover-inner {
          position: absolute;
          inset: 0;
        }

        .card-body {
          padding: 22px 24px 26px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .card-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 10px;
          display: block;
        }

        .card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 19px;
          letter-spacing: -0.01em;
          margin-bottom: 8px;
          color: var(--text);
        }

        .card-desc {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.5;
          flex: 1;
        }
      `}</style>
    </motion.div>
  );
}
