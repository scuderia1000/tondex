import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPool, IUserPool, IUserState } from '../types';
import { getRandomNumber } from '../../util';

const initialState: IUserState = {
  pools: {},
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPool(state: IUserState, { payload }: PayloadAction<IPool>) {
      state.pools[getRandomNumber()] = payload;
    },
    setPoolsById(state: IUserState, { payload }: PayloadAction<IUserPool>) {
      Object.keys(payload).forEach((key) => {
        state.pools[key] = payload[key];
      });
    },
  },
});

export const { setPool, setPoolsById } = slice.actions;

export default slice.reducer;
