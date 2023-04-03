import { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import ApiService from '../service/api';

export type FetchData = (url: string, params?: object) => UseQueryResult<any, AxiosError>;

const useFetch: FetchData = (url, params?) => {
  const fetchData = () => new ApiService(url).get(params);
  return useQuery([url.slice(1), params], fetchData, { keepPreviousData: true });
};

export default useFetch;
