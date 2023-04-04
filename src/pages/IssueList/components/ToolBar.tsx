import useToggle from '../../../hooks/useToggle';

import Menu from './ToolBar/Menu';
import SortOptions from './ToolBar/SortOptions';

const ToolBar = () => {
  const { toggle: sortToggle, handleToggle: handleSortToggle } = useToggle();

  return (
    <>
      <Menu handleSortToggle={handleSortToggle} />
      {sortToggle && <SortOptions />}
    </>
  );
};

export default ToolBar;
