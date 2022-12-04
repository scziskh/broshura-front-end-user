import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const calculatorApi = createApi({
  reducerPath: 'calculatorApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
    endpoints: build => ({
    getCalcData: build.query({ query: () => '/calc-data.json' }),
  }),
});

export const { useGetCalcDataQuery } = calculatorApi;
