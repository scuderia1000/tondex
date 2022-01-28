import { IFetchResponse, ITokenInfo, ITokenPricePairs } from '../types';
import { price } from '../mock/price';
import { IPrice } from '../store/types';
import { getPairPrices } from '../util';

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
