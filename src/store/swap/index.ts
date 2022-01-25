import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IExchangeTokenInfo, ISwapState } from '../types';

const initialState: ISwapState = {
  in: {
    symbol: 'TONCOIN',
    address: '0x582d872a1b094fc48f5de31d3b73f2d9be47def1',
  },
  out: {
    symbol: '',
    address: '',
  },
  value: '0',
};

export const slice = createSlice({
  name: 'swap',
  initialState,
  reducers: {
    setInputToken(state: ISwapState, { payload }: PayloadAction<IExchangeTokenInfo>) {
      state.in = payload;
    },
    setOutputToken(state: ISwapState, { payload }: PayloadAction<IExchangeTokenInfo>) {
      state.out = payload;
    },
    setValue(state: ISwapState, { payload }: PayloadAction<string>) {
      state.value = payload;
    },
  },
});

export const { setInputToken, setOutputToken, setValue } = slice.actions;

export default slice.reducer;
