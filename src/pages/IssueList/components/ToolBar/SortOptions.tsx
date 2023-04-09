import Option from './Option';

const SortOptions = () => {
  return (
    <section className="box_options">
      <Option option="created" />
      <Option option="updated" />
      <Option option="comments" />
    </section>
  );
};

export default SortOptions;
