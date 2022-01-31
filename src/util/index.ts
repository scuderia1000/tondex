import { ITokenPricePairs } from '../types';
import { IPrice } from '../store/types';
import price from '../mock/price.json';
import { DIGITS_COUNT, pairTemplate, TAX } from '../const';

export const unique = <T>(array: T[], key: keyof T): T[] => {
  const seen = new Set();
  return array.filter((item: T) => {
    const value = item[key];
    return seen.has(value) ? false : seen.add(value);
  });
};

export const getRandomNumber = (): number => {
  const array = new Uint32Array(1);
  return crypto.getRandomValues(array)[0];
};

export const toFixed = (value: number): string => {
  const leftDigitsCount = String(value).split('.')?.[0].length;
  const fixedNumber = DIGITS_COUNT - leftDigitsCount;

  return value.toFixed(fixedNumber);
};

export const numberFormat = (num: number, digits = 0) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find((item) => num >= item.value);
  return item ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol : '0';
};

export const getPairPrices = (pair: ITokenPricePairs): IPrice => {
  let inPriceUSD = '';
  let outPriceUSD = '';
  price.data.some((item) => {
    if (item.address === pair.inAddress) {
      inPriceUSD = String(item.price);
    } else if (item.address === pair.outAddress) {
      outPriceUSD = String(item.price);
    }
    return !!inPriceUSD && !!outPriceUSD;
  });
  const amount = Number(pair.amount) ?? 1;
  const calculatedPrice = (Number(inPriceUSD) / Number(outPriceUSD)) * amount;
  const inTaxUSD = Number(inPriceUSD) * amount * TAX;
  const inCostUSD = Number(inPriceUSD) * amount + inTaxUSD;
  const outCostUSD = Number(calculatedPrice) * Number(outPriceUSD);

  return {
    pair: pairTemplate(pair.inSymbol, pair.outSymbol),
    amount: String(amount),
    quote: toFixed(calculatedPrice),
    inCostUSD: toFixed(inCostUSD),
    outCostUSD: toFixed(outCostUSD),
  };
};
