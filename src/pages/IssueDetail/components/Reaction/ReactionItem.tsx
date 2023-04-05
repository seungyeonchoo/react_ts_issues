const ReactionItem = ({ reaction, emoji }: { reaction: number; emoji: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-sm">{emoji}</span>
      <span>{reaction || '-'}</span>
    </div>
  );
};

export default ReactionItem;
