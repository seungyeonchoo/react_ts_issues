import { useSelector } from 'react-redux';
import { ReducerType } from '../../store';

import { useInView } from 'react-intersection-observer';

import { Issue } from '../../types/dataTypes';

import Item from './components/Item';
import ToolBar from './components/ToolBar';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const IssueList = () => {
  const { params, toggle } = useSelector((state: ReducerType) => state);
  const { data, isLoading, ref, hasNextPage } = useInfiniteScroll('/issues', params.issueParams);

  const containerStyle = toggle.detailToggle
    ? 'relative h-[520px] w-full flex flex-col items-center overflow-auto m-auto'
    : 'relative h-[520px] w-full flex flex-col items-center overflow-auto m-auto';

  return (
    <section className={containerStyle}>
      <ToolBar />
      <section className="h-[450px] w-full flex flex-col items-center py-2 overflow-auto border-b">
        {data?.pages.map((page: Issue[]) =>
          page.map((issue: Issue) => <Item key={issue.id} issue={issue} />)
        )}
        {!hasNextPage && !isLoading && <div>last issue</div>}
        {!isLoading && hasNextPage && <div ref={ref}>target..</div>}
      </section>
    </section>
  );
};

export default IssueList;
