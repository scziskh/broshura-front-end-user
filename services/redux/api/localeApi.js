import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../config';

export const localeApi = createApi({
  reducerPath: 'localeApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.publicUrl }),
  endpoints: (build) => ({
    getLocale: build.query({
      query: ({ locale, part }) => {
        return config.locales[locale][part];
      },
    }),
  }),
});

export const { useGetLocaleQuery } = localeApi;
