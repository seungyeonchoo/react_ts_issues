import { Label } from '../../../types/dataTypes';
import LabelItem from './Labels/LabelItem';

interface Props {
  labels: Label[];
}

const Labels = ({ labels }: Props) => {
  return (
    <section className="flex justify-between items-center">
      <div className="flex flex-wrap text-[1px] px-2 leading-5">
        {labels.map((label: Label) => (
          <LabelItem key={label.id} label={label} />
        ))}
      </div>
    </section>
  );
};

export default Labels;
