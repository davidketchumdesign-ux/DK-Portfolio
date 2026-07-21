import { AboutHero } from '@/components/about/AboutHero';
import { Passions } from '@/components/about/Passions';
import { Testimonials } from '@/components/about/Testimonials';
import { aboutHero, passions, testimonials } from '@/content/about';

export default function AboutPage() {
  return (
    <>
      <AboutHero
        eyebrow={aboutHero.eyebrow}
        heading={aboutHero.heading}
        bio={aboutHero.bio}
        mission={aboutHero.mission}
      />
      <Passions passions={passions} />
      <Testimonials testimonials={testimonials} />
    </>
  );
}
