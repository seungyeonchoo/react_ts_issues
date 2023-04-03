import dateFormat from '../../../../utils/dateFormat';

interface Props {
  created_date: string;
  author: string;
}
const IssueInfo = ({ created_date, author }: Props) => {
  return (
    <div className="text-xs flex justify-between">
      <span>{dateFormat(created_date)}</span>
      <span>{author}</span>
    </div>
  );
};

export default IssueInfo;
