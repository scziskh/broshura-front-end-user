import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const langsApi = createApi({
  reducerPath: 'langsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (build) => ({
    getLangs: build.query({ query: () => '/langs.json' }),
  }),
});

export const { useGetLangsQuery } = langsApi;
