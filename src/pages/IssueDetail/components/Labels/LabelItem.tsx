import { Label } from '../../../../types/dataTypes';

interface Props {
  label: Label;
}

const LabelItem = ({ label }: Props) => {
  return (
    <span className="bg-slate-600 m-1 px-2 rounded-lg text-white" key={label.id}>
      {label.name}
    </span>
  );
};

export default LabelItem;
