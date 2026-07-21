export interface Passion {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const aboutHero = {
  eyebrow: 'About',
  heading: 'Hi, I’m David — I design products people actually enjoy using.',
  bio: '[Write 2–4 sentences here about your background: how you got into design, the kinds of problems you like to solve, and what your day-to-day looks like right now.]',
  mission:
    '[Write your mission statement as a designer — the belief or principle that guides how you approach every project, in a sentence or two.]',
};

export const passions: Passion[] = [
  {
    title: '[Passion One]',
    description: '[Short description of this outside-work interest and why it matters to you.]',
  },
  {
    title: '[Passion Two]',
    description: '[Short description of this outside-work interest and why it matters to you.]',
  },
  {
    title: '[Passion Three]',
    description: '[Short description of this outside-work interest and why it matters to you.]',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      '[Swap in a real quote from a coworker or client about what it’s like to work with you.]',
    name: '[Full Name]',
    role: '[Title, Company]',
  },
  {
    quote:
      '[Swap in a real quote from a coworker or client about what it’s like to work with you.]',
    name: '[Full Name]',
    role: '[Title, Company]',
  },
  {
    quote:
      '[Swap in a real quote from a coworker or client about what it’s like to work with you.]',
    name: '[Full Name]',
    role: '[Title, Company]',
  },
];
