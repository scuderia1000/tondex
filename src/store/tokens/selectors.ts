import { createSelector } from '@reduxjs/toolkit';
import { ITokensMap, ITokesState } from '../types';
import { IRootState } from '../index';
import { ITokenInfo } from '../../types';

const tokens = (state: IRootState): ITokesState => state.tokens;
const tokensByAddress = (state: IRootState): ITokensMap => tokens(state).byAddress;
const tokenByAddress = (state: IRootState, address: string): ITokenInfo =>
  tokensByAddress(state)[address];

const tokenBySymbol = createSelector(
  [tokensByAddress, (state: IRootState, tokenSymbol: string) => tokenSymbol],
  (tokensByAddress: ITokensMap, tokenSymbol) =>
    Object.values(tokensByAddress).find((token: ITokenInfo) => token.symbol === tokenSymbol),
);

export default {
  tokens,
  tokensByAddress,
  tokenBySymbol,
  tokenByAddress,
};
