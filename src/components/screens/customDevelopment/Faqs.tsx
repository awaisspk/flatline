import * as AccordionPrimitive from '@radix-ui/react-accordion';
import cx from 'classnames';
import Image from 'next/image';
import type { ReactNode } from 'react';
import React from 'react';

interface AccordionItem {
  header: string;
  content: ReactNode;
}

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
    <div className="space-y-8 text-neutral-400">
      <h3 className="mb-3 text-3xl text-black">It depends</h3>
      <p>
        There are many development languages out there, of which, a few are
        dominating the market: Python, PHP, NodeJS, React, React Native, and
        Flutter.
      </p>
      <ul>
        {q1Bullets.map((bullet, i) => (
          <li key={i} className="flex items-center">
            <span className="mr-2 block h-1.5 w-1.5 rounded-full bg-neutral-400" />
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
      <h3 className="mb-3 text-3xl text-black">Wait, the architecture</h3>
      <p>
        Besides simply choosing the ‘right’ language, it is also important to
        think about the architecture. The architecture states if it can scale,
        how stability will be assured, and many other relevant variables. Within
        every project, one should first draw out a proper architecture and be
        able to thoroughly elaborate on this. This is simply because this will
        be the core principle of potential success (or failure). Simply put,
        there are more roads to digital Rome.
      </p>
    </div>
  );
};
const Question2 = () => {
  return (
    <div>
      <div className="space-y-8 text-neutral-400">
        <h3 className="mb-3 text-3xl text-black">Want something unique?</h3>
        <p>
          While there are many low-code, no-code, and SAAS providers available,
          custom development is not always the perfect fit. This is because it
          may already exist and therefore is cheaper to use the available
          tooling. However, as soon as you want something that doesn’t exist
          1-on-1 or really wants something unique, custom development becomes
          your next search on Google.
        </p>
        <p>
          This not only gives you the freedom to style and design the digital
          product in an exact manner your target group would love to see it but
          also the possibility to create custom functions, making your product
          unique.
        </p>
      </div>
    </div>
  );
};
const Question3 = () => {
  return (
    <div className="space-y-8 text-neutral-400">
      <h3 className="mb-3 text-3xl text-black">Want something unique?</h3>
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
    </div>
  );
};

const Question4 = () => {
  return (
    <div className="space-y-8 text-neutral-400">
      <h3 className="mb-3 text-3xl text-black">Yes, you can!</h3>
      <p>
        We can be brief about this one. Yes, you can! Either deliver the design
        of your dreams or let us blow your mind and design the perfect
        application.
      </p>
    </div>
  );
};
const Question5 = () => {
  return (
    <div className="space-y-8 text-neutral-400">
      <h3 className="mb-3 text-3xl text-black">Horizontal or vertical?</h3>
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
    </div>
  );
};

const items: AccordionItem[] = [
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

const Accordion = () => {
  return (
    // @ts-ignore
    <AccordionPrimitive.Root type="multiple" collapsible className="max-w-xl">
      {items.map(({ header, content }, i) => (
        <AccordionPrimitive.Item
          key={`header-${i}`}
          value={`item-${i + 1}`}
          className=""
        >
          <AccordionPrimitive.Header className="w-full border-b border-neutral-300/80">
            <AccordionPrimitive.Trigger
              className={cx(
                'group',
                'radix-state-open:rounded-t-lg radix-state-closed:rounded-lg',
                'focus:outline-none',
                'w-full text-start py-6 grid grid-cols-[4fr,1fr] gap-5'
              )}
            >
              <span className="text-lg">{header}</span>
              <span className="justify-self-end">+</span>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="w-full py-6">
            <div className="">{content}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};

export default Accordion;

export const Faqs = () => {
  return (
    <section className="mx-auto max-w-flat gap-20 px-8 pt-32 pb-52 sm:px-12">
      <div className="flex">
        <div className="basis-[60%] space-y-10">
          <h2 className="text-6xl">FAQ</h2>
          <Accordion />
        </div>
        <div className="relative -mt-5 h-[600px] w-[400px] ">
          <Image
            src="https://www.flatlineagency.com/wp-content/uploads/2021/11/alex-knight-2EJCSULRwC8-unsplash.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
      <div className="mt-40 flex flex-col items-center space-y-16">
        <p className="text-5xl underline">Let&apos;s grab a coffee?</p>
        <button className="flex w-full max-w-lg cursor-pointer items-center justify-center rounded-[100px] border-[1px] border-gray-500/50 bg-black  py-4 text-sm leading-4 text-white duration-300 hover:bg-white hover:text-black sm:py-5 sm:px-10">
          Schedule a meeting
        </button>
      </div>
    </section>
  );
};
