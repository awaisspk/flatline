import { useQuery } from '@tanstack/react-query';

import { request } from '@/utils/datocms';

type QueryProps = {
  key: any;
  query: any;
  variables: any;
  preview: boolean;
  initialData: any;
};

export const usePostPagination = ({
  key,
  initialData,
  query,
  variables,
  preview,
}: QueryProps) => {
  return useQuery([key], () => request({ query, variables, preview }), {
    initialData,
    keepPreviousData: true,
  });
};
