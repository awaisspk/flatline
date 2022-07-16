import type { ReactNode } from 'react';

const q1Bullets = [
  'Python',
  'PHP',
  'NodeJS',
  'React / React Native',
  'Flutter',
];

const q3Bullets = [
  'Kick-off meeting',
  'Digital strategy session',
  'Empathy mapping',
  'Personas',
  'User stories set-up',
  'UX mock-up',
  'Design mock-up',
  'Technical documentation',
  'Development',
  'Testing and bug hunt',
  'Soft launch',
  'Public launch & Optimization.',
];

const Question1 = () => {
  return (
    <>
      <h3>It depends</h3>
      <p>
        There are many development languages out there, of which, a few are
        dominating the market: Python, PHP, NodeJS, React, React Native, and
        Flutter.
      </p>
      <ul>
        {q1Bullets.map((bullet, i) => (
          <li key={i}>
            <span />
            {bullet}
          </li>
        ))}
      </ul>
      <p>
        All of them have strong <strong>pros</strong> and <strong>cons</strong>{' '}
        and are created with different goals in mind. Choosing the ‘wrong’
        language can result in delays, higher costs, impossibilities, a complete
        rebuild, or even have the project failing as a whole. Therefore, it is
        essential to not only think of the current state of your company but
        also elaborate on your future plans/vision. If an agency always sticks
        to ‘one favorite language’, it is highly likely they don’t operate in
        your best interest. Whenever the agency goes a bit deeper, elaborate on
        the characteristics, and let you ultimately decide – you can confidently
        say this will be the best.
      </p>
      <h3>Wait, the architecture</h3>
      <p>
        Besides simply choosing the ‘right’ language, it is also important to
        think about the architecture. The architecture states if it can scale,
        how stability will be assured, and many other relevant variables. Within
        every project, one should first draw out a proper architecture and be
        able to thoroughly elaborate on this. This is simply because this will
        be the core principle of potential success (or failure). Simply put,
        there are more roads to digital Rome.
      </p>
    </>
  );
};
const Question2 = () => {
  return (
    <>
      <h3>Want something unique?</h3>
      <p>
        While there are many low-code, no-code, and SAAS providers available,
        custom development is not always the perfect fit. This is because it may
        already exist and therefore is cheaper to use the available tooling.
        However, as soon as you want something that doesn’t exist 1-on-1 or
        really wants something unique, custom development becomes your next
        search on Google.
      </p>
      <p>
        This not only gives you the freedom to style and design the digital
        product in an exact manner your target group would love to see it but
        also the possibility to create custom functions, making your product
        unique.
      </p>
    </>
  );
};
const Question3 = () => {
  return (
    <>
      <h3>Want something unique?</h3>
      <p>
        Not only is the built-in process important, but it is even essential for
        every development & design project. While the deliverables are ‘free of
        form’ – the process assures certain milestones, check-ups, and actually
        creates a necessary safety net for the client. For example, if
        dissatisfaction, miscommunication, or a mistake is detected early on,
        the impact will be minimal. However, at the end of a process, it can be
        horrific and very costly/time-consuming for both parties. Therefore, the
        process should always be able to match the size of the project and
        should be ‘agile’ (yes, I said Agile).
      </p>
      <p>
        Therefore, only trust the agencies that are able to set up a strong yet
        flexible process. The high-level custom development & design process
        consists of (minimal) the following steps:
      </p>
      <ul>
        {q3Bullets.map((bullet, i) => (
          <li key={i} className="flex items-center">
            <span className="mr-2 block h-1.5 w-1.5 rounded-full bg-neutral-400" />
            {bullet}
          </li>
        ))}
      </ul>
    </>
  );
};

const Question4 = () => {
  return (
    <>
      <h3>Yes, you can!</h3>
      <p>
        We can be brief about this one. Yes, you can! Either deliver the design
        of your dreams or let us blow your mind and design the perfect
        application.
      </p>
    </>
  );
};
const Question5 = () => {
  return (
    <>
      <h3>Horizontal or vertical?</h3>
      <p>
        Scaling can be done in multiple ways and this can either be horizontally
        or vertically. When scaling vertically this for example means growing in
        the number of users. However, for example, sometimes a company decides
        to scale horizontally by scaling to 20 other languages and countries.
      </p>
      <p>
        We build for semi-scale as the standard and know exactly how to scale
        from 2 to 120 million users. A few usefull examples are building a
        Headless application, a progressive web app, strong Devops, Headless
        CMS, the ‘right’ combination of development languages/frameworks, and
        much more.
      </p>
    </>
  );
};

interface AccordionItem {
  header: string;
  content: ReactNode;
}

export const customDevelopmentFaqs: AccordionItem[] = [
  {
    header: 'What development language and architecture should I choose?',
    content: <Question1 />,
  },
  {
    header: 'Is custom development the right fit?',
    content: <Question2 />,
  },
  {
    header: 'How would the process work and is it important?',
    content: <Question3 />,
  },
  {
    header: 'Can I design it exactly how we like it?',
    content: <Question4 />,
  },
  {
    header: 'How are we able to scale?',
    content: <Question5 />,
  },
];
