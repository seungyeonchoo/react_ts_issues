import { Label } from '../../../types/dataTypes';
import LabelItem from './Labels/LabelItem';

interface Props {
  labels: Label[];
}

const Labels = ({ labels }: Props) => {
  return (
    <div className="flex flex-wrap text-[1px] px-2 py-1 border-t border-b leading-6">
      {labels.map((label: Label) => (
        <LabelItem key={label.id} label={label} />
      ))}
    </div>
  );
};

export default Labels;
