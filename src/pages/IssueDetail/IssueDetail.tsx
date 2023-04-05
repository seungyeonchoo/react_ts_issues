import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import { AppDispatch, ReducerType } from '../../store';
import ReactMarkdown from 'react-markdown';
import { offDetailToggle } from '../../store/slices/toggleSlice';
import { ReactComponent as Back } from '../../assets/left-long-solid.svg';
import TitleBox from './components/TitleBox';
import Labels from './components/Labels';
import '../../../node_modules/github-markdown-css/github-markdown-light.css';
import Reaction from './components/Reaction';
import IssueComment from './components/IssueComment';
const IssueDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { detailId } = useSelector((state: ReducerType) => state.toggle);
  const { data, isLoading } = useFetch(`/issues/${detailId}`);
  const { data: comments } = useFetch(`/issues/${detailId}/comments`);

  const handleDetailOff = () => {
    dispatch(offDetailToggle());
  };

  if (isLoading)
    return (
      <section className="h-[520px] w-11/12 m-auto flex flex-col py-3 max-lg:absolute bg-white">
        로딩중
      </section>
    );

  return (
    <section className="h-[520px] w-full flex flex-col p-3 max-lg:absolute max-lg:w-11/12 bg-white">
      <Back className="w-6 mb-3" onClick={handleDetailOff} />
      <TitleBox issue={data} />
      <section className="markdown-body mx-auto h-[480px] overflow-auto">
        <ReactMarkdown className="text-xs py-5">{data?.body}</ReactMarkdown>
        <Labels labels={data?.labels} />
        <Reaction reactions={data?.reactions} />
        <IssueComment comments={comments} />
      </section>
    </section>
  );
};

export default IssueDetail;

// "laugh": 0,
// "hooray": 0,
// "confused": 0,
// "heart": 0,
// "rocket": 0,
// "eyes": 0
