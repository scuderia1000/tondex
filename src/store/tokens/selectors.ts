import { createSelector } from '@reduxjs/toolkit';
import { ITokensMap, ITokesState } from '../types';
import { RootState } from '../index';
import { ITokenInfo } from '../../types';

const tokens = (state: RootState): ITokesState => state.tokens;
const tokensByAddress = (state: RootState): ITokensMap => tokens(state).byAddress;

const tokenBySymbol = createSelector(
  [tokensByAddress, (state: RootState, tokenSymbol: string) => tokenSymbol],
  (tokensByAddress: ITokensMap, tokenSymbol) =>
    Object.values(tokensByAddress).find((token: ITokenInfo) => token.symbol === tokenSymbol),
);

export default {
  tokens,
  tokensByAddress,
  tokenBySymbol,
};
