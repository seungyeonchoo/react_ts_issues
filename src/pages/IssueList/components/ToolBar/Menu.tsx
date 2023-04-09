import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store';
import { updateIssueParam } from '../../../../store/slices/paramSlice';

import useInput from '../../../../hooks/useInput';

import { ReactComponent as Sort } from '../../../../assets/sort-solid.svg';

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
    <section className="box_menu">
      <input
        type="text"
        className="search-input"
        placeholder="Search Creator"
        name="creator"
        value={input.creator}
        onChange={handleInputChange}
      />
      <Sort className="icon w-3" onClick={handleSortToggle} />
    </section>
  );
};

export default Menu;
