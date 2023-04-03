import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import { ReducerType } from '../../store';

const IssueList = () => {
  const { issueParams } = useSelector((state: ReducerType) => state.params);
  const { data } = useFetch('/issues', issueParams);
  return (
    <ul>
      {data?.map((el: any) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
};

export default IssueList;
