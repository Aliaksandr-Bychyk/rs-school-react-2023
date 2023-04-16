import { configureStore } from '@reduxjs/toolkit';
import searhTextReducer from './searchTextSlice';
import formCardReducer from './formCardSlice';
import { spaceFlightNewsApi } from './apiSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    'search-text': searhTextReducer,
    'from-card': formCardReducer,
    [spaceFlightNewsApi.reducerPath]: spaceFlightNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spaceFlightNewsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
