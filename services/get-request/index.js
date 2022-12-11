import { useEffect, useState } from 'react';
import { config } from './config';
import { getObjValue } from '../../helpers/objectValue/get.object-value';

export const useGetRequest = (prop) => {
  const { baseUrl } = config;
  const subUrl = getObjValue(config, prop);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();
  const url = `${baseUrl}${subUrl}`;

  const request = async (url) => {
    const response = await fetch(url);
    try {
      const result = await response.json();
      if (response.ok) {
        setData(result);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError(`Error ${response.status}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    request(url);
  }, [url]);

  return { data, error, isLoading };
};
