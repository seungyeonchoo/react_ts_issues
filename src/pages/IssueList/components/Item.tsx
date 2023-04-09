import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, ReducerType } from '../../../store';
import { onDetailToggle, updateDetailId } from '../../../store/slices/toggleSlice';

import { Issue } from '../../../types/dataTypes';

import IssueDate from './Item/IssueInfo';
import IssueTitle from './Item/IssueTitle';

const Item = ({ issue }: { issue: Issue }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { detailToggle, detailId } = useSelector((state: ReducerType) => state.toggle);
  const isClicked = detailToggle && detailId === issue.number;

  const handleDetailToggle = () => {
    dispatch(updateDetailId(issue.number));
    dispatch(onDetailToggle());
  };

  return (
    <article onClick={handleDetailToggle} className={isClicked ? 'issue_selected' : 'issue'}>
      <IssueTitle title={issue.title} comments={issue.comments} />
      <IssueDate created_date={issue.created_at} author={issue.user.login} />
    </article>
  );
};

export default Item;
