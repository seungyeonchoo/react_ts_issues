import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as SortDown } from '../../../../assets/down-long-solid.svg';
import { ReactComponent as SortUp } from '../../../../assets/up-long-solid.svg';
import { AppDispatch, ReducerType } from '../../../../store';
import { updateIssueParam } from '../../../../store/slices/paramSlice';

const SortOptions = () => {
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
    <div className="p-3 w-full border-b top-[60px] h-14 flex justify-end text-xs absolute bg-gray-100">
      <span className="flex items-center">
        <button
          name="created"
          className="border-gray-400 border p-1 text-[1px] rounded-md flex items-center"
          onClick={handleSort}
        >
          created
          {issueParams.sort === 'created' &&
            (issueParams.direction === 'desc' ? (
              <SortDown className="w-1.5 fill-blue-700 mx-1" />
            ) : (
              <SortUp className="w-1.5 fill-blue-700 mx-1" />
            ))}
        </button>
      </span>

      <span className="flex items-center mx-3">
        <button
          name="updated"
          className="border-gray-400 border p-1 text-[1px] rounded-md flex items-center"
          onClick={handleSort}
        >
          updated
          {issueParams.sort === 'updated' &&
            (issueParams.direction === 'desc' ? (
              <SortDown className="w-1.5 fill-blue-700 mx-1" />
            ) : (
              <SortUp className="w-1.5 fill-blue-700 mx-1" />
            ))}
        </button>
      </span>

      <span className="flex items-center">
        <button
          name="comments"
          className="border-gray-400 border p-1 text-[1px] rounded-md flex items-center"
          onClick={handleSort}
        >
          comments
          {issueParams.sort === 'comments' &&
            (issueParams.direction === 'desc' ? (
              <SortDown className="w-1.5 fill-blue-700 mx-1" />
            ) : (
              <SortUp className="w-1.5 fill-blue-700 mx-1" />
            ))}
        </button>
      </span>
    </div>
  );
};

export default SortOptions;
