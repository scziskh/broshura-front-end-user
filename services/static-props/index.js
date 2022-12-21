export const getData = (...request) => {
  const result = request.reduce(async (accum, current) => {
    const response = await fetch(
      `http://localhost:3000/api/text-data/${current}.json`,
    );
    const data = await response.json();
    accum[current] = data;

    return accum;
  }, {});

  return result;
};
