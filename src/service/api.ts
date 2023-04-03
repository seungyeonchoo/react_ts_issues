import instance from './http';

interface Api {
  url: string;
  get: (params?: object) => Promise<any>;
}

class ApiService implements Api {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  get: (params?: object) => Promise<any> = async (params?) => {
    const { data } = await instance.get(this.url, { params: params });
    return data;
  };
}

export default ApiService;
