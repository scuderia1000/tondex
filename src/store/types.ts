import { EFieldType, ITokenInfo } from '../types';

export interface ITokensMap {
  [key: string]: ITokenInfo;
}

export interface ITokesState {
  byAddress: ITokensMap;
}

export interface ITokenPairs {
  in: string;
  out: string;
}

export interface IPrice {
  pair: string;
  amount: string;
  price: string;
}

export interface IExchangeState extends ITokenPairs {
  changedField: EFieldType;
  value: string;
  price: IPrice;
}

export interface IPoolToken {
  address?: string;
  price?: number;
  tokensAmount?: number;
  timestamp?: number;
}

export interface IPool {
  firstToken: IPoolToken;
  secondToken: IPoolToken;
}

export interface IUserPool {
  [key: string]: IPool;
}

export interface IUserState {
  pools: IUserPool;
}
