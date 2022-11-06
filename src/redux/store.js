import { configureStore } from '@reduxjs/toolkit';
import { calculatorApi } from './calculatorAPI';
import { langsApi } from './langsAPI';
import { createWrapper } from 'next-redux-wrapper';

// eslint-disable-next-line no-unused-vars
const makeStore = (initialState, options) =>
  configureStore({
    reducer: {
      [calculatorApi.reducerPath]: calculatorApi.reducer,
      [langsApi.reducerPath]: langsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(calculatorApi.middleware)
        .concat(langsApi.middleware),
  });

export const wrapper = createWrapper(makeStore);
