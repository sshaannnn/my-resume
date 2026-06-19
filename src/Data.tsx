import type { ReactNode } from 'react';

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  blog: string;
  summary: string;
  experience: {
    company: string;
    date: string;
    title: string;
    location: string;
    bullets: ReactNode[];
  }[];
  projects: {
    name: string;
    link: string;
    description: ReactNode;
  }[];
  skills: {
    label: string;
    items: string;
  }[];
  education: {
    school: string;
    degree: string;
    date: string;
  }[];
}

export const resumeData: ResumeData = {
  name: 'Shanny WU',
  title: 'Backend Engineer',
  email: 'theshannywu@gmail.com',
  phone: '+64 274950280',
  location: 'Auckland, New Zealand',
  linkedin: 'linkedin.com/in/yswuu',
  github: 'github.com/sshaannnn',
  blog: 'blog.shanny.cc',
  summary:
    'Enthusiastic and detail-oriented Software Engineer with strong backend expertise in Node.js and ASP.NET Core, and growing proficiency in mobile app development (Flutter). Experienced in delivering scalable backend systems, API integrations, and user-centric web applications for large- scale commercial clients. A highly motivated problem-solver who values clean architecture, collaboration, and continuous learning. Skilled at bridging technical complexity with user-friendly functionality.',
  experience: [
    {
      company: '17LIFE INC.',
      date: 'Jan 2022 – Mar 2024',
      title: 'Backend Engineer',
      location: 'Taipei, Taiwan',
      bullets: [
        <>
          Designed and implemented complete backend architecture for multiple
          digital platforms.
        </>,
        <>
          Maintained high-traffic web systems with ≈ <strong>100 k </strong>{' '}
          concurrent users during launch periods.
        </>,
        <>
          Led integration with SMS and SMTP services, enabling large-scale
          customer communication.
        </>,
        <>
          Solely responsible for backend of the in-store Pad System, integrating
          with 3rd-party vendors.
        </>,
        <>Tech stack: Node.js / NestJS / MySQL.</>,
      ],
    },
    {
      company: 'TPIsoftware Corp.',
      date: 'Aug 2020 – Dec 2021',
      title: 'Software Engineer',
      location: 'Taipei, Taiwan',
      bullets: [
        <>
          Delivered software solutions for major financial and insurance
          clients.
        </>,
        <>Developed APIs, UI components, and middleware integrations.</>,
        <>Tech stack: Angular + TypeScript and ASP.NET + MSSQL.</>,
        <>
          Balanced ≈ <strong>60 %</strong> backend / <strong>40 %</strong>{' '}
          frontend tasks.
        </>,
      ],
    },
  ],
  projects: [
    {
      name: 'Feastogether Reservation Platform',
      link: 'https://www.ieatogether.com.tw/',
      description: (
        <>
          Developed and maintained reservation platforms across web and tablet
          applications for <strong>more than 100 stores</strong> nationwide.
          Designed and integrated IVR-based reservation and waitlist workflows,
          automating customer interactions and improving operational efficiency
          at scale.
        </>
      ),
    },
  ],
  skills: [
    {
      label: 'Languages',
      items: 'JavaScript (ES6+), TypeScript, HTML5, CSS3/SASS, Python',
    },
    {
      label: 'Frameworks & Libraries',
      items:
        'React, Vue, Angular, Next.js, Node.js, NestJS, Express, Redux, ASP.NET Core, Redis, Kafka',
    },
    {
      label: 'Tools & Infrastructure',
      items: 'Git, GCP, Kubernetes, Vite, Docker, Elastic Stack, CI/CD, AWS',
    },
  ],
  education: [
    {
      school: 'University Of Auckland',
      degree: 'Master of Information Technology',
      date: 'Mar 2026 – Now',
    },
    {
      school: 'National Taichung University of Science and Technology',
      degree: 'Bachelor of Information Management',
      date: 'Sep 2017 – June 2020',
    },
  ],
};
