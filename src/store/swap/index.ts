import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IExchangeState } from '../types';
import { EFieldType } from '../../types';
import { TONCOIN_ADDRESS } from '../../const';

const initialState: IExchangeState = {
  in: TONCOIN_ADDRESS,
  out: '',
  changedField: EFieldType.IN,
  value: '0',
};

export const slice = createSlice({
  name: 'swap',
  initialState,
  reducers: {
    setInputToken(state: IExchangeState, { payload }: PayloadAction<string>) {
      state.in = payload;
    },
    setOutputToken(state: IExchangeState, { payload }: PayloadAction<string>) {
      state.out = payload;
    },
    setFieldType(state: IExchangeState, { payload }: PayloadAction<EFieldType>) {
      state.changedField = payload;
    },
    setValue(state: IExchangeState, { payload }: PayloadAction<string>) {
      state.value = payload;
    },
    clear() {
      return initialState;
    },
  },
});

export const { setInputToken, setOutputToken, setFieldType, setValue, clear } = slice.actions;

export default slice.reducer;
