import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { onDetailToggle, updateDetailId } from '../../../store/slices/toggleSlice';
import { Issue } from '../../../types/dataTypes';
import IssueDate from './Item/IssueInfo';
import IssueLabel from './Item/IssueLabel';
import IssueTitle from './Item/IssueTitle';

const Item = ({ issue }: { issue: Issue }) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleDetailToggle = () => {
    dispatch(updateDetailId(issue.number));
    dispatch(onDetailToggle());
  };

  return (
    <article
      onClick={handleDetailToggle}
      className="flex flex-col border w-11/12 py-3 px-5 m-1 rounded-lg shadow-sm cursor-pointer hover:shadow-lg hover:bg-blue-50"
    >
      <IssueLabel labels={issue.labels} />
      <IssueTitle title={issue.title} comments={issue.comments} />
      <IssueDate created_date={issue.created_at} author={issue.user.login} />
    </article>
  );
};

export default Item;
