import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IExchangeState, IPrice } from '../types';
import { EFieldType, ITokenPricePairs } from '../../types';
import { TONCOIN_ADDRESS } from '../../const';
import { fetchTokensPrice } from '../../api';

const initialState: IExchangeState = {
  in: TONCOIN_ADDRESS,
  out: '',
  changedField: EFieldType.IN,
  value: '',
  price: {
    pair: '',
    amount: '1',
    quote: '',
    inCostUSD: '',
    outCostUSD: '',
  },
};

export const fetchTokensPriceAsync = createAsyncThunk(
  'tokens/fetchPrice',
  async (pair: ITokenPricePairs) => {
    const response = await fetchTokensPrice(pair);
    return response.data;
  },
);

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
    setPrice(state: IExchangeState, { payload }: PayloadAction<IPrice>) {
      state.price = payload;
    },
    clearPrice(state: IExchangeState) {
      state.price = initialState.price;
    },
    clear() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchTokensPriceAsync.fulfilled,
      (state, { payload }: PayloadAction<IPrice>) => {
        state.price = payload;
      },
    );
    // .addCase(fetchTokensPriceAsync.pending, (state) => {
    //   state.price = initialState.price;
    // });
  },
});

export const {
  setInputToken,
  setOutputToken,
  setFieldType,
  setValue,
  clear,
  setPrice,
  clearPrice,
} = slice.actions;

export default slice.reducer;
