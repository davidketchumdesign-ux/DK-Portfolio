'use client';

import { use } from 'react';
import { getCaseStudyBySlug } from '@/content/projects';
import { BackLink } from '@/components/BackLink';
import { CaseStudyHero } from '@/components/CaseStudyHero';
import { CaseMeta } from '@/components/CaseMeta';
import { PhaseSection } from '@/components/PhaseSection';
import { OutcomesGrid } from '@/components/OutcomesGrid';
import { NextProject } from '@/components/NextProject';

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = use(params);
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  return (
    <>
      <BackLink />

      <CaseStudyHero subtitle={caseStudy.hero.subtitle} description={caseStudy.hero.description} />

      <CaseMeta
        role={caseStudy.meta.role}
        timeline={caseStudy.meta.timeline}
        platform={caseStudy.meta.platform}
        tools={caseStudy.meta.tools}
      />

      <div className="cs-cover reveal">
        <style jsx>{`
          .cs-cover {
            max-width: var(--container);
            margin: 56px auto 0;
            padding: 0 var(--gutter);
          }

          .cs-cover-inner {
            height: 460px;
            border-radius: var(--radius);
            background: linear-gradient(135deg, #6e8cff, #c2ceff);
          }

          .reveal {
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);
          }

          .reveal.revealed {
            opacity: 1;
            transform: translateY(0);
          }

          @media (max-width: 860px) {
            .cs-cover {
              padding: 0 22px;
            }

            .cs-cover-inner {
              height: 240px;
            }
          }
        `}</style>
        <div className="cs-cover-inner" />
      </div>

      {caseStudy.phases.map((phase) => (
        <PhaseSection
          key={phase.number}
          number={phase.number}
          title={phase.title}
          description={phase.description}
          chips={phase.chips}
          hmw={phase.hmw}
          gallery={phase.gallery}
        />
      ))}

      <OutcomesGrid outcomes={caseStudy.outcomes} />

      <NextProject nextSlug={caseStudy.nextSlug} nextTitle={caseStudy.nextTitle} />
    </>
  );
}
