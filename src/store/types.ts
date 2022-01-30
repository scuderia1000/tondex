import { EFieldType, IPoolInfo, ITokenInfo } from '../types';
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
  quote: string;
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

export interface IUserPool {
  firstToken: IPoolToken;
  secondToken: IPoolToken;
}

export interface IPool<T> {
  [key: string]: T;
}

export interface IUserState {
  pools: IPool<IUserPool>;
}

export type IGetStateFunction<T> = () => T;
export type IGetState = IGetStateFunction<IRootState>;

export interface IPoolsState {
  byAddress: IPool<IPoolInfo>;
}
