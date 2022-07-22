import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
    <div className="mb-32">
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
    </div>
  );
};
