import {useEffect, useState} from 'react';
import {
  TPathVariables,
  TSearchParams,
  getFullUrl,
} from '../../utils/helpers/getFullUrl';
import axios from '../../services/axios';
import {AxiosResponse} from 'axios';
import {IMutationOptions} from '../../utils/data';

const useQuery = <T>(
  url: string,
  pathVariables?: TPathVariables,
  searchParams?: TSearchParams,
  mutationOptions?: IMutationOptions,
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response: AxiosResponse<T> = await axios.get(
        getFullUrl(url, pathVariables, searchParams),
      );
      setData(response?.data);
      setIsLoading(false);

      mutationOptions?.onSuccess?.(data);
    } catch (error: unknown) {
      setError(error);
      setIsLoading(false);

      mutationOptions?.onError?.(error);
    }
  };

  useEffect(() => {
    fetchData;
  }, []);

  return {data, isLoading, error};
};

export default useQuery;
