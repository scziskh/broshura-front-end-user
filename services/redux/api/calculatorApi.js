import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const calculatorApi = createApi({
  reducerPath: 'calculatorApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (build) => ({
    getCalcData: build.query({ query: () => 'calc-data' }),
  }),
});

export const { useGetCalcDataQuery } = calculatorApi;
