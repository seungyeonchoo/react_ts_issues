import { Comment } from '../../../types/dataTypes';
import ReactMarkdown from 'react-markdown';
import '../../../../node_modules/github-markdown-css/github-markdown-light.css';
import dateFormat from '../../../utils/dateFormat';

const IssueComment = ({ comments }: { comments: Comment[] }) => {
  return (
    <section className="markdown-body border-t py-3">
      <h5 className="text-gray-600">comments [{comments?.length || 0}]</h5>
      {comments?.map((comment: Comment) => (
        <article key={comment.id} className="flex items-start mb-3 bg-white border p-5 rounded-md">
          <img src={comment.user.avatar_url} alt="avatar" className="w-10 rounded-full mr-5" />
          <div className="flex flex-col items-start w-full">
            <div className="flex justify-between w-3/4 text-xs mb-2">
              <span className="font-bold">{comment.user.login}</span>
              <span className="text-gray-500 text-[10px]">{dateFormat(comment.created_at)}</span>
            </div>
            <ReactMarkdown className="text-xs">{comment.body}</ReactMarkdown>
          </div>
        </article>
      ))}
    </section>
  );
};

export default IssueComment;
