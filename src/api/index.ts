import { IFetchResponse, ITokenInfo } from '../types';
import { price } from '../mock/price';

const fetch = <T>(responseData: T): Promise<T> =>
  new Promise<T>((resolve) => setTimeout(() => resolve(responseData), 500));

export const fetchTokens = async () => {
  const result = await fetch<IFetchResponse<ITokenInfo[]>>({ data: price });
  return result;
};

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500),
  );
}
