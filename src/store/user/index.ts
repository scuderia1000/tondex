import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPool, IUserPool, IUserState } from '../types';
import { getRandomNumber } from '../../util';

const initialState: IUserState = {
  pools: {
    '1416028093': {
      firstToken: {
        address: '0x582d872a1b094fc48f5de31d3b73f2d9be47def1',
        price: '2.20180000',
        tokensAmount: '1',
        timestamp: new Date().getTime(),
      },
      secondToken: {
        address: '0x7ff4169a6b5122b664c51c95727d87750ec07c84',
        price: '2.18000000',
        tokensAmount: '1.31325301',
        timestamp: new Date().getTime(),
      },
    },
  },
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
    removePoolById(state: IUserState, { payload }: PayloadAction<string>) {
      delete state.pools[payload];
    },
  },
});

export const { setPool, setPoolsById, removePoolById } = slice.actions;

export default slice.reducer;
