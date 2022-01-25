import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tokensReducer from './tokens/index';
import swapReducer from './swap/index';

export const store = configureStore({
  reducer: {
    swap: swapReducer,
    tokens: tokensReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
