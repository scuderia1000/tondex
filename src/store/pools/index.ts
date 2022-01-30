import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPool, IPoolsState } from '../types';
import { getRandomNumber } from '../../util';
import { IPoolInfo, IPoolsResponse } from '../../types';
import { fetchPools } from '../../api';

const initialState: IPoolsState = {
  byAddress: {},
};

export const fetchPoolsAsync = createAsyncThunk('pools/fetch', async () => {
  const response = await fetchPools();
  return response.data;
});

export const slice = createSlice({
  name: 'pools',
  initialState,
  reducers: {
    setPool(state: IPoolsState, { payload }: PayloadAction<IPoolInfo>) {
      state.byAddress[getRandomNumber()] = payload;
    },
    setPoolsById(state: IPoolsState, { payload }: PayloadAction<IPool<IPoolInfo>>) {
      Object.keys(payload).forEach((key) => {
        state.byAddress[key] = payload[key];
      });
    },
    clear() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchPoolsAsync.fulfilled,
      (state, { payload }: PayloadAction<IPoolsResponse[]>) => {
        payload.forEach((item) => {
          state.byAddress[getRandomNumber()] = {
            ...item,
            address: item.id,
          };
        });
      },
    );
  },
});

export default {
  reducers: slice.reducer,
  actions: slice.actions,
};
