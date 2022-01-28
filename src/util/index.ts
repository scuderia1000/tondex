import { ITokenPricePairs } from '../types';
import { IPrice } from '../store/types';
import { price } from '../mock/price';
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

export const getPairPrices = (pair: ITokenPricePairs): IPrice => {
  let inPriceUSD = '';
  let outPriceUSD = '';
  price.some((item) => {
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
    price: toFixed(calculatedPrice),
    inCostUSD: toFixed(inCostUSD),
    outCostUSD: toFixed(outCostUSD),
  };
};
