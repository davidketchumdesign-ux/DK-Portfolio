import { Hero } from '@/components/Hero';
import { StatsBar } from '@/components/StatsBar';
import { ProjectGrid } from '@/components/ProjectGrid';
import { gridProjects, personalProjects } from '@/content/projects';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProjectGrid
        title="Consulting Projects"
        description="Enterprise design system and UX work — client names withheld per NDA."
        projects={gridProjects}
        sectionId="work"
      />
      <ProjectGrid
        title="Personal Projects"
        description="Self-directed products, built and designed outside of client work."
        projects={personalProjects}
      />
    </>
  );
}
