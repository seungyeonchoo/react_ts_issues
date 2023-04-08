import { Comment } from '../../../types/dataTypes';
import '../../../../node_modules/github-markdown-css/github-markdown-light.css';
import CommentItem from './IssueComment/CommentItem';

const IssueComment = ({ comments }: { comments: Comment[] }) => {
  return (
    <section className="markdown-body border-t py-3">
      <h5 className="text-gray-600">comments [{comments?.length || 0}]</h5>
      {comments?.map((comment: Comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </section>
  );
};

export default IssueComment;
