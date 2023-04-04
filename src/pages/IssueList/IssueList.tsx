import { useSelector } from 'react-redux';
import { ReducerType } from '../../store';

import useFetch from '../../hooks/useFetch';

import { Issue } from '../../types/dataTypes';

import Item from './components/Item';
import ToolBar from './components/ToolBar';

const IssueList = () => {
  const { params, toggle } = useSelector((state: ReducerType) => state);
  const { data } = useFetch('/issues', params.issueParams);

  const containerStyle = toggle.detailToggle
    ? 'relative h-[520px] w-full flex flex-col items-center overflow-auto m-auto'
    : 'relative h-[520px] w-full flex flex-col items-center overflow-auto m-auto';

  return (
    <section className={containerStyle}>
      <ToolBar />
      <section className="h-[450px] w-full flex flex-col items-center py-2 overflow-auto border-b">
        {data?.map((issue: Issue) => (
          <Item key={issue.id} issue={issue} />
        ))}
      </section>
    </section>
  );
};

export default IssueList;
