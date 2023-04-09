import { useInfiniteQuery } from 'react-query';
import ApiService from '../service/api';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const useInfiniteScroll = (url: string, params?: object) => {
  const fetchData = ({ pageParam = 1 }) =>
    new ApiService(`${url}?page=${pageParam}&per_page=20`).get(params);

  const [ref, inView] = useInView();

  const { data, isLoading, isError, error, hasNextPage, fetchNextPage } = useInfiniteQuery(
    [url.slice(1), params],
    fetchData,
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage.length === 20 ? allPages.length + 1 : undefined;
        return nextPage;
      },
    }
  );

  useEffect(() => {
    if (inView && !isLoading && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return { ref, data, isLoading, isError, hasNextPage, error };
};

export default useInfiniteScroll;
