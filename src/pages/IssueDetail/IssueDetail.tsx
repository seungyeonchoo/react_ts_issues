import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, ReducerType } from '../../store';
import { offDetailToggle } from '../../store/slices/toggleSlice';

import useFetch from '../../hooks/useFetch';

import { ReactComponent as Back } from '../../assets/left-long-solid.svg';
import ReactMarkdown from 'react-markdown';
import '../../../node_modules/github-markdown-css/github-markdown-light.css';

import TitleBox from './components/TitleBox';
import Labels from './components/Labels';
import Reaction from './components/Reaction';
import IssueComment from './components/IssueComment';
import Loading from '../../components/Loading/Loading';

const IssueDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { detailId } = useSelector((state: ReducerType) => state.toggle);
  const { data, isLoading, error, isError } = useFetch(`/issues/${detailId}`);
  const { data: comments } = useFetch(`/issues/${detailId}/comments`);

  const handleDetailOff = () => {
    dispatch(offDetailToggle());
  };

  if (isLoading) return <Loading />;

  return (
    <section className="container_detail">
      <Back className="icon w-6 mb-3" onClick={handleDetailOff} />
      <TitleBox issue={data} />
      <section className="markdown-body px-5 mx-auto h-[480px] overflow-auto">
        <ReactMarkdown className="text-xs py-5">{data?.body}</ReactMarkdown>
        <Labels labels={data?.labels} />
        <Reaction reactions={data?.reactions} />
        <IssueComment comments={comments} />
      </section>
    </section>
  );
};

export default IssueDetail;
