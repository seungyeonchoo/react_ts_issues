import { useQuery } from 'react-query';
import ApiService from '../service/api';

const useFetch = (url: string, params?: object) => {
  const fetchData = () => new ApiService(url).get(params);
  return useQuery([url.slice(1), params], fetchData, { keepPreviousData: true });
};

export default useFetch;
