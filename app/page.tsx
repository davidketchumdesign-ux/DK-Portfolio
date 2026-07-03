import { Hero } from '@/components/home/Hero';
import { StatsBar } from '@/components/home/StatsBar';
import { ProjectGrid } from '@/components/home/ProjectGrid';
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
