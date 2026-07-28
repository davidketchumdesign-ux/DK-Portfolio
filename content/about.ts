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
  bio: 'I got my start in graphic design in New York’s Finger Lakes region, and spent the years since learning that good design is really about making complicated things feel simple. Today I specialize in Salesforce platform design as a Senior UX Designer at Slalom, holding multiple Salesforce UX and Agentforce Trailblazer certifications. When I’m not at my desk, I’m usually training for the next race, out on a trail, or bringing an old piece of furniture back to life.',
  mission:
    'I believe the best interfaces disappear. They let people focus on their goal instead of the tool. Whether I’m designing a kiosk system or a Salesforce workflow, my job is the same: translate complexity into something clear enough that nobody has to think twice.',
};

export const passions: Passion[] = [
  {
    title: 'Endurance Racing',
    description: 'I’m an endurance athlete: an Ironman 70.3 last September, three full marathons, and more half marathons and triathlons than I can count. Training teaches patience and pacing — lessons that show up in my design work too.',
  },
  {
    title: 'Backcountry & Water',
    description: 'Overnight backpacking trips and quiet hours fishing are how I recharge. No screens, just a tent, a rod, and a trail.',
  },
  {
    title: 'Furniture Restoration',
    description: 'I pick up worn furniture from places like ReStore and Goodwill and give it new life — sanding, repairing, repainting. Same instinct as design: see what something could be, then build toward it.',
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
