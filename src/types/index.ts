import React from 'react';
import { IPoolToken } from '../store/types';

export interface ITokenInfo {
  name: string;
  symbol: string;
  logoURI: string;
  address?: string;
  id?: string;
  price?: number;
  priceBtc?: number;
  decimals?: number;
  rank?: number;
  chainId?: number;
}

export interface IPoolTokenInfo {
  __typename: string;
  decimals: string;
  derivedETH: string;
  id: string;
  name: string;
  symbol: string;
}

export interface IFetchResponse<T> {
  data: T;
}

export type MouseEvent = React.MouseEvent<
  HTMLButtonElement | HTMLDivElement | HTMLImageElement | HTMLLabelElement
>;

export interface IInputEventHandler<T> {
  (event: React.ChangeEvent<HTMLInputElement>, args?: T): void;
}

export interface IMouseEventHandler<T> {
  (event: MouseEvent, args?: T): void;
}

export interface IInputChangeArgs {
  value: string;
}

export enum EFieldType {
  IN = 'in',
  OUT = 'out',
}

export interface ITokenPricePairs {
  inAddress: string;
  inSymbol: string;
  outAddress: string;
  outSymbol: string;
  amount: string;
}

export type IValidationControl = {
  onValidationChange?: (isValid: boolean) => void;
  validate?: (value: string) => boolean;
};

export interface IPoolInfo {
  address: string;
  feeTier: string;
  liquidity: string;
  sqrtPrice: string;
  token0: IPoolTokenInfo;
  token1: IPoolTokenInfo;
  token0Price: string;
  token1Price: string;
  // Volume 24h
  volumeUSD: string;
  // Volume 7D
  volumeUSDWeek: string;
  // TVL
  totalValueLockedUSD: string;
  totalValueLockedToken0: string;
  totalValueLockedToken1: string;
}

export type IPoolsResponse = Omit<IPoolInfo, 'address'> & {
  id: string;
};

export interface IUserPool {
  firstToken: IPoolToken;
  secondToken: IPoolToken;
}

export interface IMap<T> {
  [key: string]: T;
}
