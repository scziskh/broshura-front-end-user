import { config } from './config';

export const getStaticData = (path, request) => {
  const result = request.reduce(async (accumPromise, current) => {
    const accum = await accumPromise;
    const response = await fetch(
      `${config.baseurl}${config[path]}${current}.json`,
    );
    accum[current] = await response.json();

    return accum;
  }, Promise.resolve({}));

  return result;
};
