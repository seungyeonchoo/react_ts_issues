import { useSelector } from 'react-redux';
import { ReducerType } from '../../store';

import useInfiniteScroll from '../../hooks/useInfiniteScroll';

import { Issue } from '../../types/dataTypes';

import Item from './components/Item';
import ToolBar from './components/ToolBar';
import Loading from '../../components/Loading/Loading';
import { ReactComponent as Spin } from '../../assets/spinner-solid.svg';
import Error from '../../components/Error/Error';
import { AxiosError } from 'axios';

const IssueList = () => {
  const { issueParams } = useSelector((state: ReducerType) => state.params);
  const { data, isLoading, isError, error, ref, hasNextPage } = useInfiniteScroll(
    '/issues',
    issueParams
  );

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error as AxiosError} />;
  return (
    <section className="relative container_main">
      <ToolBar />
      <section className="h-[450px] w-full flex flex-col items-center py-2 overflow-auto border-b">
        {data?.pages.map((page: Issue[]) =>
          page.map((issue: Issue) => <Item key={issue.id} issue={issue} />)
        )}
        {!hasNextPage && !isLoading && (
          <div className="text-xs font-bold text-gray-400 m-1 bg-gray-50 w-full text-center p-7 rounded-md">
            no more result
          </div>
        )}
        {!isLoading && hasNextPage && (
          <div ref={ref} className="flex">
            <Spin className="w-5 animate-spin m-5" />
          </div>
        )}
      </section>
    </section>
  );
};

export default IssueList;
