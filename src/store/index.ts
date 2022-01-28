import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tokensReducer from './tokens/index';
import swapReducer from './swap/index';
import userReducer from './user/index';

export const store = configureStore({
  reducer: {
    swap: swapReducer,
    tokens: tokensReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IRootState,
  unknown,
  Action<string>
>;
