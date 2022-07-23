import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { usePostPagination } from '@/hooks/usePostPagination';
import { GET_POSTS_BY_CATEGORIES, PAGINATED_POSTS } from '@/utils/queries/blog';

import { ChevronLeft, ChevronRight } from '../ui/icons';
import { BreakpointsIcon } from '../ui/icons/Breakpoints';

type IPaginatePosts = {
  initialData: any;
  setPostsData: (data: any) => void;
  preview: boolean;
  totalPosts: number;
  allCategories: any[];
};

export function PaginatePosts({
  initialData,
  setPostsData,
  preview,
  totalPosts,
  allCategories,
}: IPaginatePosts) {
  const first = 10;
  const [skip, setSkip] = useState(0);
  const [pageCount, setPageCount] = useState(totalPosts);
  const router = useRouter();
  const { category } = router.query;
  const categoryId = allCategories.find((item) => item.name === category);
  const query = category ? GET_POSTS_BY_CATEGORIES : PAGINATED_POSTS;

  const variables = category
    ? { first, skip, category: categoryId.id }
    : { first, skip };
  const { data, isSuccess } = usePostPagination({
    key: ['posts', skip, categoryId],
    query,
    initialData: { posts: initialData },
    variables,
    preview,
  });

  const handlePageClick = (event: any) => {
    const newOffset = event.selected * first;
    setSkip(newOffset);
  };

  useEffect(() => {
    if (isSuccess && data.postsCount) {
      setPostsData(data.posts);
      setPageCount(parseInt(data.postsCount.count, 10));
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [data]);

  return (
    <div
      className="my-10"
      style={{
        display: pageCount < first ? 'none' : 'block',
      }}
    >
      <ReactPaginate
        className="flex  h-10 items-center rounded-full border-[1px] border-l border-[#bbbbbb50]"
        activeClassName="bg-black text-white h-full"
        pageClassName="border-l border-r border-[#bbbbbb50] h-full flex items-center"
        pageLinkClassName="px-3"
        previousClassName="w-9 flex justify-center"
        nextClassName="w-9 flex justify-center"
        breakLabel={<BreakpointsIcon />}
        nextLabel={<ChevronRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(pageCount / first)}
        previousLabel={<ChevronLeft />}
      />
    </div>
  );
}
