import { IFetchResponse, ITokenInfo, ITokenPricePairs } from '../types';
import { price } from '../mock/price';
import { IPrice } from '../store/types';

const getPairPrices = (pair: ITokenPricePairs): IPrice => {
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

  const amount = pair.amount ? Number(pair.amount) : 1;
  const calculatedPrice = (Number(inPriceUSD) / Number(outPriceUSD)) * amount;
  return {
    pair: `${pair.inSymbol} --> ${pair.outSymbol}`,
    amount: String(amount),
    price: String(calculatedPrice),
  };
};

const fetch = <T>(responseData: T): Promise<T> =>
  new Promise<T>((resolve) => setTimeout(() => resolve(responseData), 500));

export const fetchTokens = async () => {
  const result = await fetch<IFetchResponse<ITokenInfo[]>>({ data: price });
  return result;
};

export const fetchTokensPrice = async (pair: ITokenPricePairs) => {
  const result = await fetch<IFetchResponse<IPrice>>({
    data: getPairPrices(pair),
  });
  return result;
};
