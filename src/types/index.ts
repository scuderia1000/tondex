import React from 'react';

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
