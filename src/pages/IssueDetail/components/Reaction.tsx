import { Reactions } from '../../../types/dataTypes';
import ReactionItem from './Reaction/ReactionItem';

interface Props {
  reactions: Reactions;
}

const Reaction = ({ reactions }: Props) => {
  return (
    <section className="flex justify-between items-center px-5 my-5 text-xs">
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
