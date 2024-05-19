import {useState} from 'react';
import {IMutationOptions} from '../../utils/data';
import {
  TPathVariables,
  TSearchParams,
  getFullUrl,
} from '../../utils/helpers/getFullUrl';
import axios from '../../services/axios';
import {AxiosResponse} from 'axios';

const useMutation = <T, K>(
  url: string,
  pathVariables?: TPathVariables,
  searchParams?: TSearchParams,
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const mutate = async (payload: K, mutationOptions?: IMutationOptions) => {
    try {
      setIsLoading(true);
      const response: AxiosResponse<T> = await axios.post(
        getFullUrl(url, pathVariables, searchParams),
      );
      setData(response?.data);
      setIsLoading(false);

      mutationOptions?.onSuccess?.(data);
    } catch (error: unknown) {
      setError(error);
      setIsLoading(false);

      mutationOptions?.onError?.(data);
    }
  };

  return {mutate, isLoading, data, error};
};

export default useMutation;
