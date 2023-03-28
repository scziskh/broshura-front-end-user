export const getTextData = async (request, lang) => {
  const result = request.reduce(async (accumPromise, current) => {
    const accum = await accumPromise;
    const response = await fetch(
      `http://localhost:3000/api/text-data/${lang}/${current}`,
    );
    accum[current] = await response.json();
    return accum;
  }, Promise.resolve({}));

  return result;
};
