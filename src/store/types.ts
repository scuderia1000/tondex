import { EFieldType, ITokenInfo } from '../types';
import { IRootState } from './index';

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
  inCostUSD: string;
  outCostUSD: string;
}

export interface IExchangeState extends ITokenPairs {
  changedField: EFieldType;
  value: string;
  price: IPrice;
}

export interface IPoolToken {
  address: string;
  price: string;
  tokensAmount: string;
  timestamp: number;
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

export type IGetStateFunction<T> = () => T;
export type IGetState = IGetStateFunction<IRootState>;
