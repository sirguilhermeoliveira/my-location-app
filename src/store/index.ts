import { configureStore } from '@reduxjs/toolkit';
import prevReducer from './previous';

export const store = configureStore({
  reducer: {
    prev: prevReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
