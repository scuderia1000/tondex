import { EFieldType, IMap, IPoolInfo, ITokenInfo, IUserPool } from '../types';
import { IRootState } from './index';

export interface IByAddressState<T> {
  byAddress: IMap<T>;
}

export type ITokesState = IByAddressState<ITokenInfo>;
export type IPoolsState = IByAddressState<IPoolInfo>;

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

export interface IUserState {
  pools: IMap<IUserPool>;
}

export type IGetStateFunction<T> = () => T;
export type IGetState = IGetStateFunction<IRootState>;
