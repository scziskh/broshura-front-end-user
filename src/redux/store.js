import { configureStore } from '@reduxjs/toolkit';
import { calculatorApi } from './calculatorAPI';

export const store = configureStore({
  reducer: {
    [calculatorApi.reducerPath]: calculatorApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(calculatorApi.middleware),
});
