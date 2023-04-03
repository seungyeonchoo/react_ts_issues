import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import { ReducerType } from '../../store';
import { Issue } from '../../types/dataTypes';
import Item from './components/Item';

const IssueList = () => {
  const { issueParams } = useSelector((state: ReducerType) => state.params);
  const { data } = useFetch('/issues', issueParams);
  return (
    <section className="h-[520px] flex flex-col items-center py-3 overflow-auto">
      {data?.map((issue: Issue) => (
        <Item key={issue.id} issue={issue} />
      ))}
    </section>
  );
};

export default IssueList;
