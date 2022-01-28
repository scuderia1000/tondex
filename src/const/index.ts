export const TON = 'TON';
export const SWAP = 'Swap';
export const POOL = 'Pool';
export const Add = 'Add';
export const Remove = 'Remove';
export const AddLiquidity = 'Add liquidity';
export const RemoveLiquidity = 'Remove liquidity';
export const SelectToken = 'Select Token';
export const EnterTokenName = 'Token name';
export const Max = 'Max';

export const TONCOIN_ADDRESS = '0x582d872a1b094fc48f5de31d3b73f2d9be47def1';

export const getBinanceTickerPriceUrl = (firstTokenSymbol: string, secondTokenSymbol: string) =>
  `https://api.coinstats.app/public/v1/tickers?exchange=binance&pair=${firstTokenSymbol}-${secondTokenSymbol}`;

export const DIGITS_COUNT = 9;
export const TAX = 0.01;

export const pairTemplate = (firstSymbol: string, secondSymbol: string): string =>
  `${firstSymbol} --> ${secondSymbol}`;
