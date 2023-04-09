import { ReactComponent as Spin } from '../../assets/spinner-solid.svg';

const Loading = () => {
  return (
    <section className="container_detail text-center justify-center">
      <Spin className="w-6 m-auto animate-spin" />
    </section>
  );
};

export default Loading;
