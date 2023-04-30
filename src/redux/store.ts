import searhTextReducer from './searchTextSlice';
import formCardReducer from './formCardSlice';
import { spaceFlightNewsApi } from './apiSlice';

import * as toolkitRaw from '@reduxjs/toolkit';
import IRTK from '../interfaces/IRTK';
const { configureStore, combineReducers } = ((toolkitRaw as IRTK).default ??
  toolkitRaw) as typeof toolkitRaw;

export const reducer = combineReducers({
  'search-text': searhTextReducer,
  'from-card': formCardReducer,
  [spaceFlightNewsApi.reducerPath]: spaceFlightNewsApi.reducer,
});
export const createStore = (
  preloadedState?: toolkitRaw.PreloadedState<ReturnType<typeof reducer>>
) =>
  configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(spaceFlightNewsApi.middleware),
  });

export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
