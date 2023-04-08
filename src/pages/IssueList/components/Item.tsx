import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, ReducerType } from '../../../store';
import { onDetailToggle, updateDetailId } from '../../../store/slices/toggleSlice';

import { Issue } from '../../../types/dataTypes';

import IssueDate from './Item/IssueInfo';
import IssueTitle from './Item/IssueTitle';

const Item = ({ issue }: { issue: Issue }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { detailToggle, detailId } = useSelector((state: ReducerType) => state.toggle);

  const handleDetailToggle = () => {
    dispatch(updateDetailId(issue.number));
    dispatch(onDetailToggle());
  };

  const itemStyle =
    detailToggle && detailId === issue.number
      ? 'flex flex-col border w-full py-3 px-5 m-1 rounded-lg cursor-pointer shadow-lg bg-blue-50'
      : detailToggle
      ? 'flex flex-col border w-full py-3 px-5 m-1 rounded-lg shadow-sm cursor-pointer hover:shadow-lg hover:bg-blue-50'
      : 'flex flex-col border w-full py-3 px-5 m-1 rounded-lg shadow-sm cursor-pointer hover:shadow-lg hover:bg-blue-50';

  return (
    <article onClick={handleDetailToggle} className={itemStyle}>
      <IssueTitle title={issue.title} comments={issue.comments} />
      <IssueDate created_date={issue.created_at} author={issue.user.login} />
    </article>
  );
};

export default Item;
