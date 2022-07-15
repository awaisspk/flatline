import AutoHeight from 'embla-carousel-auto-height';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import React, { useCallback, useEffect } from 'react';

const BlogCarousal = () => {
  const [viewportRef, embla] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      align: 'center',
      containScroll: 'trimSnaps',
    },
    [AutoHeight()]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="relative">
      <div className="w-full overflow-x-hidden" ref={viewportRef}>
        <div className="ml-4 flex select-none items-start md:ml-[calc((100vw-1200px)/2)]">
          {[1, 2, 3, 4, 5, 6, 7].map((index) => (
            <div
              className="relative mr-4 shrink-0 grow-0 basis-[90vw] sm:mr-8 sm:basis-[560px]"
              key={index}
            >
              <figure className="h-[200px] w-full sm:h-[370px]">
                <div className="h-full w-full bg-gray-600"></div>
              </figure>
              <figcaption className="mt-5">
                <h3 className="text-lg">
                  Difference - project manager & scrum master
                </h3>
                <Link href="blog">
                  <a className="text-sm text-[#888] underline hover:text-black hover:no-underline">
                    Read more
                  </a>
                </Link>
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Blog = () => {
  return (
    <section className="mb-10 pt-20 pb-28 sm:pt-40">
      <div className="mx-auto flex max-w-flat flex-col px-12">
        <h2 className="text-5xl font-medium text-[#dbdbdb] sm:text-6xl md:text-[104px]">
          Thinking
        </h2>
      </div>
      <div className="mt-16 sm:mt-20">
        <BlogCarousal />
      </div>
    </section>
  );
};
