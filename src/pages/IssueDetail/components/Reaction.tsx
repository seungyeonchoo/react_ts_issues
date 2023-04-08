import { Reactions } from '../../../types/dataTypes';
import ReactionItem from './Reaction/ReactionItem';

interface Props {
  reactions: Reactions;
}

const Reaction = ({ reactions }: Props) => {
  return (
    <section className="w-4/5 m-auto flex justify-between items-center px-10 my-5 text-xs bg-gray-50 py-3 rounded-xl">
      <ReactionItem reaction={reactions['+1']} emoji="👍" />
      <ReactionItem reaction={reactions['-1']} emoji="👎" />
      <ReactionItem reaction={reactions.laugh} emoji="😄" />
      <ReactionItem reaction={reactions.hooray} emoji="🥳" />
      <ReactionItem reaction={reactions.confused} emoji="🤔" />
      <ReactionItem reaction={reactions.heart} emoji="💕" />
      <ReactionItem reaction={reactions.rocket} emoji="🚀" />
      <ReactionItem reaction={reactions.eyes} emoji="👀" />
    </section>
  );
};

export default Reaction;
