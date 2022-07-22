import cx from 'classnames';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { headingReveal } from '@/utils/animations';

type Category = {
  id: string;
  name: string;
};

type ICategories = {
  categories: Category[];
};

export const Categories = ({ categories }: ICategories) => {
  const router = useRouter();
  return (
    <motion.div
      className="mb-32"
      variants={headingReveal}
      initial="initial"
      animate="animate"
      transition={{
        duration: 0.6,
      }}
    >
      {categories.map((category: any, i: number) => (
        <Link
          key={category.id}
          href={{
            pathname: '/blog',
            query: {
              category: category.name,
            },
          }}
        >
          <a
            className={cx('my-20 text-center text-5xl capitalize', {
              'text-[#BAAEAE]': router.query.category !== category.name,
              'text-black': router.query.category === category.name,
            })}
          >
            {category.name}
            {i !== categories.length - 1 && (
              <span className="text-black"> / </span>
            )}
          </a>
        </Link>
      ))}
    </motion.div>
  );
};
