import ReactMarkdown from 'react-markdown';

const CommentBody = ({ body }: { body: string }) => {
  return <ReactMarkdown className="text-xs">{body}</ReactMarkdown>;
};

export default CommentBody;
