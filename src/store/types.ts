import { ITokenInfo } from '../types';

export interface ITokensMap {
  [key: string]: ITokenInfo;
}

export interface ITokesState {
  byAddress: ITokensMap;
}

export type IExchangeTokenInfo = Pick<ITokenInfo, 'symbol' | 'address'>;

export interface ISwapState {
  in: IExchangeTokenInfo;
  out: IExchangeTokenInfo;
  value: string;
}
