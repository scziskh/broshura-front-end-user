export const getData = (...request) => {
  const result = request.reduce(async (accumPromise, current, index) => {
    const accum = await accumPromise;
    const response = await fetch(
      `http://localhost:3000/api/text-data/${current}.json`,
    );
    accum[current] = await response.json();

    console.log({ [`accum${index}`]: accum });

    return accum;
  }, Promise.resolve({}));

  return result;
};
