import { createSelector } from '@reduxjs/toolkit';
import { ITokesState } from '../types';
import { IRootState } from '../index';
import { IMap, ITokenInfo } from '../../types';

const tokens = (state: IRootState): ITokesState => state.tokens;
const tokensByAddress = (state: IRootState): IMap<ITokenInfo> => tokens(state).byAddress;
const tokenByAddress = (state: IRootState, address: string): ITokenInfo =>
  tokensByAddress(state)[address];

const tokenBySymbol = createSelector(
  [tokensByAddress, (state: IRootState, tokenSymbol: string) => tokenSymbol],
  (tokensByAddress: IMap<ITokenInfo>, tokenSymbol) =>
    Object.values(tokensByAddress).find((token: ITokenInfo) => token.symbol === tokenSymbol),
);

export default {
  tokens,
  tokensByAddress,
  tokenBySymbol,
  tokenByAddress,
};
