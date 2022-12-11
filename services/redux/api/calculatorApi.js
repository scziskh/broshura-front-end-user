import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../config';

export const calculatorApi = createApi({
  reducerPath: 'calculatorApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.serverUrl }),
  endpoints: (build) => ({
    getCalcData: build.query({ query: () => config.calcData }),
  }),
});

export const { useGetCalcDataQuery } = calculatorApi;
