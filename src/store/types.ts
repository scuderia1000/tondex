import { EFieldType, ITokenInfo } from '../types';

export interface ITokensMap {
  [key: string]: ITokenInfo;
}

export interface ITokesState {
  byAddress: ITokensMap;
}

export interface IExchangeState {
  in: string;
  out: string;
  changedField: EFieldType;
  value: string;
}
