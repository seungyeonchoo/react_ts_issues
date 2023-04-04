import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as Sort } from '../../../../assets/sort-solid.svg';
import useInput from '../../../../hooks/useInput';
import { AppDispatch } from '../../../../store';
import { updateIssueParam } from '../../../../store/slices/paramSlice';

interface Props {
  handleSortToggle: () => void;
}

const Menu = ({ handleSortToggle }: Props) => {
  const { input, handleInputChange } = useInput({ creator: '' });
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const debounceHandler =
      input.creator === ''
        ? setTimeout(() => dispatch(updateIssueParam({ creator: null })))
        : setTimeout(() => dispatch(updateIssueParam(input)), 500);
    return () => clearTimeout(debounceHandler);
  }, [input]);

  return (
    <section className="realative border-b w-full h-[60px] flex items-center justify-between">
      <input
        type="text"
        className="border w-1/2 text-xs p-2 focus:outline-gray-400"
        placeholder="Search Creator"
        name="creator"
        value={input.creator || ''}
        onChange={handleInputChange}
      />
      <Sort className="w-3" onClick={handleSortToggle} />
    </section>
  );
};

export default Menu;