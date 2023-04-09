import { AxiosError } from 'axios';
import { ReactComponent as Exaclamation } from '../../assets/circle-exclamation-solid.svg';

const Error = ({ error }: { error: AxiosError }) => {
  return (
    <section className="container_detail text-center justify-center">
      <Exaclamation className="w-12 mx-auto my-5 fill-gray-500" />
      <span className="text-3xl font-bold text-gray-400">{error.response?.status} ERROR</span>
      <span>{error.response?.statusText}</span>
    </section>
  );
};

export default Error;
