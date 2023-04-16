import { configureStore } from '@reduxjs/toolkit';
import searhTextReducer from './searchTextSlice';

export const store = configureStore({
  reducer: {
    'search-text': searhTextReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
