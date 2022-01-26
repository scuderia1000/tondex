import React from 'react';

export interface ITokenInfo {
  name: string;
  address: string;
  symbol: string;
  decimals: number;
  chainId: number;
  logoURI: string;
}

export interface IUserPool {
  symbol?: string;
}

export interface IFetchResponse<T> {
  data: T;
}

export interface IInputEventHandler<T> {
  (event: React.ChangeEvent<HTMLInputElement>, args?: T): void;
}

export interface IInputChangeArgs {
  value: string;
}
