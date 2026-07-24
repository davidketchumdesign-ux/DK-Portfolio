'use client';

import { use } from 'react';
import { getCaseStudyBySlug } from '@/content/projects';
import { Reveal } from '@/components/shared/Reveal';
import { BackLink } from '@/components/case-study/BackLink';
import { CaseStudyHero } from '@/components/case-study/CaseStudyHero';
import { CaseMeta } from '@/components/case-study/CaseMeta';
import { PhaseSection } from '@/components/case-study/PhaseSection';
import { PrototypeEmbed } from '@/components/case-study/PrototypeEmbed';
import { OutcomesGrid } from '@/components/case-study/OutcomesGrid';
import { CaseQuote } from '@/components/case-study/CaseQuote';
import { NextProject } from '@/components/case-study/NextProject';

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

      <CaseStudyHero
        eyebrow={`${caseStudy.industry} · Case Study`}
        subtitle={caseStudy.hero.subtitle}
        description={caseStudy.hero.description}
      />

      <CaseMeta
        role={caseStudy.meta.role}
        timeline={caseStudy.meta.timeline}
        platform={caseStudy.meta.platform}
        tools={caseStudy.meta.tools}
      />

      {caseStudy.prototypeUrl ? (
        <PrototypeEmbed url={caseStudy.prototypeUrl} />
      ) : (
        <Reveal className="cs-cover">
          <style jsx>{`
            :global(.cs-cover) {
              max-width: var(--container);
              margin: 56px auto 0;
              padding: 0 var(--gutter);
            }

            .cs-cover-inner {
              height: 460px;
              border-radius: var(--radius);
              background: linear-gradient(135deg, #6e8cff, #c2ceff);
            }

            @media (max-width: 860px) {
              :global(.cs-cover) {
                padding: 0 22px;
              }

              .cs-cover-inner {
                height: 240px;
              }
            }
          `}</style>
          <div className="cs-cover-inner" />
        </Reveal>
      )}

      {caseStudy.phases.map((phase, i) => (
        <PhaseSection
          key={phase.number}
          number={phase.number}
          totalPhases={caseStudy.phases.length}
          title={phase.title}
          description={phase.description}
          chips={phase.chips}
          hmw={phase.hmw}
          gallery={phase.gallery}
          isLast={i === caseStudy.phases.length - 1}
        />
      ))}

      <OutcomesGrid outcomes={caseStudy.outcomes} />

      {caseStudy.quote && <CaseQuote quote={caseStudy.quote} />}

      <NextProject nextSlug={caseStudy.nextSlug} nextTitle={caseStudy.nextTitle} />
    </>
  );
}
