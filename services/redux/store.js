import { configureStore } from '@reduxjs/toolkit';
import { calculatorApi } from './api/calculatorApi';
import { createWrapper } from 'next-redux-wrapper';

// eslint-disable-next-line no-unused-vars
const makeStore = (initialState, options) =>
  configureStore({
    reducer: {
      [calculatorApi.reducerPath]: calculatorApi.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(calculatorApi.middleware),
  });

export const wrapper = createWrapper(makeStore);
