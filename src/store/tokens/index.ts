import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITokensMap, ITokesState } from '../types';
import { fetchTokens } from '../../api';
import { ITokenInfo } from '../../types';

const initialState: ITokesState = {
  byAddress: {
    '0x582d872a1b094fc48f5de31d3b73f2d9be47def1': {
      name: 'Toncoin',
      address: '0x582d872a1b094fc48f5de31d3b73f2d9be47def1',
      symbol: 'TONCOIN',
      decimals: 9,
      chainId: 1,
      logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11419.png',
    },
  },
};

export const fetchTokensAsync = createAsyncThunk('tokens/fetchTokens', async () => {
  const response = await fetchTokens();
  return response.data;
});

export const slice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setTokens(state: ITokesState, { payload }: PayloadAction<ITokensMap>) {
      state.byAddress = payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      fetchTokensAsync.fulfilled,
      (state, { payload }: PayloadAction<ITokenInfo[]>) => {
        state.byAddress = payload.reduce((acc, token) => ({ ...acc, [token.address]: token }), {});
      },
    );
  },
});

export const { setTokens } = slice.actions;

export default slice.reducer;
