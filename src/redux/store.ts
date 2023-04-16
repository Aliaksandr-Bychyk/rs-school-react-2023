import { configureStore } from '@reduxjs/toolkit';
import searhTextReducer from './searchTextSlice';
import formCardReducer from './formCardSlice';

export const store = configureStore({
  reducer: {
    'search-text': searhTextReducer,
    'from-card': formCardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
