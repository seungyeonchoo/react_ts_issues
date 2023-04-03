interface Props {
  title: string;
  comments: number;
}

const IssueTitle = ({ title, comments }: Props) => {
  return (
    <h3 className="flex items-center text-xs my-2 font-bold">
      {title} {comments > 0 && `[${comments}]`}
    </h3>
  );
};

export default IssueTitle;
