import Link from 'next/link';

type Category = {
  id: string;
  name: string;
  slug: string;
};

type ICategories = {
  categories: Category[];
};

export const Categories = ({ categories }: ICategories) => {
  return (
    <div className="mb-32">
      {categories.map((category: any, i: number) => (
        <Link key={category.id} href={`/blog/category/${category.slug}`}>
          <a className="my-20 text-center text-5xl capitalize text-[#BAAEAE]">
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
