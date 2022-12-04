import { useEffect, useState } from 'react';
import { config } from './config';

export const useGetRequest = (subUrl) => {
  const { baseUrl } = config;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const url = `${baseUrl}${config[subUrl]}`;

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
