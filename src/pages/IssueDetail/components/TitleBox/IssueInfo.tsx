import dateFormat from '../../../../utils/dateFormat';

interface Props {
  title: string;
  created_date: string;
  updated_date: string;
}

const IssueInfo = ({ title, created_date, updated_date }: Props) => {
  return (
    <div className="flex flex-col justify-between">
      <h1 className="font-bold">{title}</h1>
      <div className="text-xs flex flex-col items-start text-gray-500">
        <span>created : {dateFormat(created_date)}</span>
        <span>updated : {dateFormat(updated_date)}</span>
      </div>
    </div>
  );
};

export default IssueInfo;
