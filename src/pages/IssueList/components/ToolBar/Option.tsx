import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, ReducerType } from '../../../../store';
import { updateIssueParam } from '../../../../store/slices/paramSlice';

import { ReactComponent as SortDown } from '../../../../assets/down-long-solid.svg';
import { ReactComponent as SortUp } from '../../../../assets/up-long-solid.svg';

const Option = ({ option }: { option: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { issueParams } = useSelector((state: ReducerType) => state.params);

  const handleSort = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    dispatch(
      updateIssueParam({
        sort: name,
        direction: issueParams.direction === 'asc' ? 'desc' : 'asc',
      })
    );
  };

  return (
    <span className="flex items-center">
      <button name={option} className="button_sort" onClick={handleSort}>
        {option}
        {issueParams.sort === option &&
          (issueParams.direction === 'desc' ? (
            <SortDown className="icon_sort" />
          ) : (
            <SortUp className="icon_sort" />
          ))}
      </button>
    </span>
  );
};

export default Option;
