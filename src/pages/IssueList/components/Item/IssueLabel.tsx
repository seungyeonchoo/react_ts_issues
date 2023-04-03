import { Label } from '../../../../types/dataTypes';

interface Props {
  labels: Label[];
}

const IssueLabel = ({ labels }: Props) => {
  return (
    <ul className="flex text-[1px]">
      {labels.map(label => (
        <li className="mr-1 text-white bg-slate-600 py-[3px] px-2 rounded-md" key={label.id}>
          {label.name}
        </li>
      ))}
    </ul>
  );
};

export default IssueLabel;
