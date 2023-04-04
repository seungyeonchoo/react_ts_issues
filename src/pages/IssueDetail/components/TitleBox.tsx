import { Issue } from '../../../types/dataTypes';
import dateFormat from '../../../utils/dateFormat';
import IssueInfo from './TitleBox/IssueInfo';
import UserInfo from './TitleBox/UserInfo';

interface Props {
  issue: Issue;
}

const TitleBox = ({ issue }: Props) => {
  return (
    <section className="flex justify-between px-3 mb-3">
      <IssueInfo
        title={issue?.title}
        created_date={issue?.created_at}
        updated_date={issue?.updated_at}
      />
      <UserInfo img={issue?.user.avatar_url} author={issue?.user.login} />
    </section>
  );
};

export default TitleBox;
