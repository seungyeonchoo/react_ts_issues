import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import { AppDispatch, ReducerType } from '../../store';
import { offDetailToggle } from '../../store/slices/toggleSlice';
import { ReactComponent as Back } from '../../assets/left-long-solid.svg';
import TitleBox from './components/TitleBox';
import Labels from './components/Labels';
import MarkdownRenderer from '../../components/Markdown/MarkdownRenderer';

const IssueDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { detailId } = useSelector((state: ReducerType) => state.toggle);
  const { data, isLoading } = useFetch(`/issues/${detailId}`);

  const handleDetailOff = () => {
    dispatch(offDetailToggle());
  };

  if (isLoading)
    return (
      <section className="h-[520px] w-full flex flex-col py-3 max-lg:absolute bg-white">
        로딩중
      </section>
    );

  return (
    <section className="h-[520px] flex flex-col p-3 max-lg:absolute bg-white">
      <Back className="w-6 mb-3" onClick={handleDetailOff} />
      <TitleBox issue={data} />
      {/* <Labels labels={data?.labels} /> */}
      <MarkdownRenderer content={data?.body} />
    </section>
  );
};

export default IssueDetail;
