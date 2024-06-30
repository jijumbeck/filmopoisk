
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authSlice from '../features/auth/auth.slice';
import { filmAPI } from '../features/films/film.slice';
import { ratingAPI } from '../features/films/rating.slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [filmAPI.reducerPath]: filmAPI.reducer,
    [ratingAPI.reducerPath]: ratingAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(filmAPI.middleware)
      .concat(ratingAPI.middleware)
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;