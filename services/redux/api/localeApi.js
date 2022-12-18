import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getObjValue } from '../../../helpers/objectValue/get.object-value';
import { config } from '../config';

export const localeApi = createApi({
  reducerPath: 'localeApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.publicUrl }),
  endpoints: (build) => ({
    getLocale: build.query({
      query: ({ locale, part }) => {
        const currentConfig = config.locales[locale];
        const result = getObjValue(currentConfig, part);

        return result;
      },
    }),
  }),
});

export const { useGetLocaleQuery } = localeApi;
