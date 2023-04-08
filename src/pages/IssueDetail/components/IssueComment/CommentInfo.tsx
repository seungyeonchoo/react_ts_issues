import dateFormat from '../../../../utils/dateFormat';

interface Props {
  user: string;
  created_date: string;
}

const CommentInfo = ({ user, created_date }: Props) => {
  return (
    <div className="flex justify-between w-3/4 text-xs mb-2">
      <span className="font-bold">{user}</span>
      <span className="text-gray-500 text-[10px]">{dateFormat(created_date)}</span>
    </div>
  );
};

export default CommentInfo;
