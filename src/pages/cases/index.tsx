import cx from 'classnames';
import { motion } from 'framer-motion';

import { WorkCard } from '@/components/screens/work/WorkCard';
import { Main, Meta, PageLayout } from '@/layouts';
import { headingReveal, sectionReveal } from '@/utils/animations';

const data = [
  {
    title: 'Just Eat Takeaway',
    subtitle: "Europe's leading food delivery service",
    creation: ['Development', 'Design'],
  },
  {
    title: 'Bud',
    subtitle: 'King of beers',
    creation: ['Development', 'Design'],
  },
  {
    title: 'Mystic',
    subtitle: 'Brutal action sports',
    creation: ['PIM', 'ERP', 'E-commerce'],
  },
  {
    title: 'Vanilla',
    subtitle: 'Fashion,redefined',
    creation: ['UX', 'animations', 'flow'],
  },
  {
    title: 'MG motor',
    subtitle: 'Iconic cars',
    creation: ['Coding', 'Design'],
  },
  {
    title: 'Hugo Boss',
    subtitle: 'Welcome to metaverse',
    creation: ['Metaverse', 'Web 3.0', 'AR', 'VR'],
  },
  {
    title: 'Kingdom OS',
    subtitle: '',
    creation: ['Development', 'Design', 'Animation'],
  },
];

const Cases = () => {
  return (
    <Main
      meta={
        <Meta
          title="Cases - Flatline Agency"
          description="flatline agency services"
        />
      }
    >
      <main>
        <div className="mx-auto mb-24 mt-10 flex max-w-flat overflow-hidden  px-8  sm:px-12 md:justify-end">
          <motion.div
            className="text-5xl font-semibold leading-[100px] text-[#dbdbdb] sm:text-[104px]"
            variants={headingReveal}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6 }}
          >
            Our work
          </motion.div>
        </div>
        <section className="mx-auto mt-40 flex max-w-flat flex-wrap justify-between gap-10 px-4 pb-24 md:px-0">
          {data.map((d, i) => {
            return (
              <motion.div
                variants={sectionReveal}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6 }}
                key={i}
                className={cx(
                  'relative basis-full pb-10 md:pb-0 md:basis-[45%]',
                  {
                    'md:mt-40': i % 2 !== 0,
                    'md:-mt-10': i % 2 === 0,
                  }
                )}
              >
                <WorkCard
                  title={d.title}
                  subtitle={d.subtitle}
                  creation={d.creation}
                />
              </motion.div>
            );
          })}
        </section>
      </main>
    </Main>
  );
};

Cases.getLayout = (page: any) => <PageLayout>{page}</PageLayout>;

export default Cases;
