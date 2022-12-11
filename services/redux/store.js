import { configureStore } from '@reduxjs/toolkit';
import { calculatorApi } from './api/calculatorApi';
import { createWrapper } from 'next-redux-wrapper';
import { localeApi } from './api/localeApi';

// eslint-disable-next-line no-unused-vars
const makeStore = (initialState, options) =>
  configureStore({
    reducer: {
      [calculatorApi.reducerPath]: calculatorApi.reducer,
      [localeApi.reducerPath]: localeApi.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(calculatorApi.middleware)
        .concat(localeApi.middleware),
  });

export const wrapper = createWrapper(makeStore);
