import { Comment } from '../../../../types/dataTypes';

import CommentBody from './CommentBody';
import CommentInfo from './CommentInfo';

const CommentItem = ({ comment }: { comment: Comment }) => {
  return (
    <article className="flex items-start mb-3 bg-white border p-5 rounded-md">
      <img src={comment.user.avatar_url} alt="avatar" className="w-10 rounded-full mr-5" />
      <section className="flex flex-col items-start w-full">
        <CommentInfo created_date={comment.created_at} user={comment.user.login} />
        <CommentBody body={comment.body} />
      </section>
    </article>
  );
};

export default CommentItem;
