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
