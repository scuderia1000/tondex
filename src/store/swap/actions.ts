import { EFieldType, ITokenPricePairs } from '../../types';
import swapSelector from './selectors';
import { IGetState } from '../types';
import tokensSelector from '../tokens/selectors';
import { fetchTokensPriceAsync, setValue } from './index';

const loadPairPrice = () => (dispatch: Function, getState: IGetState) => {
  const state = getState();
  const inTokenAddress = swapSelector.inputToken(state);
  const outTokenAddress = swapSelector.outputToken(state);
  const amount = swapSelector.swapValue(state);
  if (!inTokenAddress || !outTokenAddress || !amount) return;

  const fieldType = swapSelector.fieldType(state);
  let inToken = tokensSelector.tokenByAddress(state, inTokenAddress);
  let outToken = tokensSelector.tokenByAddress(state, outTokenAddress);

  if (fieldType === EFieldType.OUT) {
    [inToken, outToken] = [outToken, inToken];
  }

  const pair: ITokenPricePairs = {
    inAddress: inToken.address ?? '',
    inSymbol: inToken.symbol,
    outAddress: outToken.address,
    outSymbol: outToken.symbol,
    amount,
  };

  dispatch(fetchTokensPriceAsync(pair));
};

export default {
  setValue,
  loadPairPrice,
};
