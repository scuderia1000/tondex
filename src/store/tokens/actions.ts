import { setTokens } from './index';
import { fetchTokens } from '../../api';
import { ITokensMap } from '../types';

export const loadTokens =
  (): Function =>
  async (dispatch: Function): Promise<void> => {
    const tokens = await fetchTokens();
    const tokensMap: ITokensMap = tokens?.data.reduce(
      (acc, token) => ({ ...acc, [token.address]: token }),
      {},
    );
    dispatch(setTokens(tokensMap));
  };
