import { batch } from 'react-redux';
import { EFieldType, ITokenPricePairs } from '../../types';
import swapSelector from './selectors';
import { IGetState, IPrice } from '../types';
import tokensSelector from '../tokens/selectors';
import {
  clearPrice,
  fetchTokensPriceAsync,
  setFieldType,
  setInputToken,
  setOutputToken,
  setPrice,
  setValue,
} from './index';
import userSelector from '../user/selectors';
import { pairTemplate } from '../../const';
import { toFixed } from '../../util';

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
    outAddress: outToken.address ?? '',
    outSymbol: outToken.symbol,
    amount,
  };

  dispatch(fetchTokensPriceAsync(pair));
};

const updatePairPriceByPool =
  (poolAddress: string) => (dispatch: Function, getState: IGetState) => {
    if (!poolAddress) return;

    const state = getState();
    const userPools = userSelector.poolById(state, poolAddress);

    const inTokenAddress = userPools.firstToken.address;
    const outTokenAddress = userPools.secondToken.address;
    const inAmount = userPools.firstToken.tokensAmount;
    const outAmount = userPools.secondToken.tokensAmount;

    const inToken = tokensSelector.tokenByAddress(state, inTokenAddress);
    const outToken = tokensSelector.tokenByAddress(state, outTokenAddress);
    if (!inTokenAddress || !outTokenAddress || !inAmount || !outAmount || !inToken || !outToken)
      return;

    const price: IPrice = {
      pair: pairTemplate(inToken.symbol, outToken.symbol),
      amount: inAmount,
      quote: outAmount,
      inCostUSD: toFixed(Number(inToken.price) * Number(inAmount)),
      outCostUSD: toFixed(Number(outToken.price) * Number(outAmount)),
    };
    batch(() => {
      dispatch(setInputToken(inTokenAddress));
      dispatch(setOutputToken(outTokenAddress));
      dispatch(setValue(inAmount));
      dispatch(setPrice(price));
    });
  };

const swapPairPlace = (dispatch: Function, getState: IGetState) => {
  const state = getState();
  let inTokenAddress = swapSelector.inputToken(state);
  let outTokenAddress = swapSelector.outputToken(state);
  let fieldType = swapSelector.fieldType(state);
  if (!inTokenAddress && !outTokenAddress) return;

  [inTokenAddress, outTokenAddress] = [outTokenAddress, inTokenAddress];
  if (fieldType === EFieldType.IN) {
    fieldType = EFieldType.OUT;
  } else {
    fieldType = EFieldType.IN;
  }

  const inToken = tokensSelector.tokenByAddress(state, inTokenAddress);
  const outToken = tokensSelector.tokenByAddress(state, outTokenAddress);

  batch(() => {
    dispatch(setInputToken(inTokenAddress));
    dispatch(setOutputToken(outTokenAddress));
    dispatch(setFieldType(fieldType));
    if (inToken && outToken) {
      dispatch(loadPairPrice());
    }
  });
};

const setInOutTokens =
  (poolAddress = '') =>
  (dispatch: Function, getState: IGetState) => {
    if (!poolAddress) return;

    const state = getState();
    const userPools = userSelector.poolById(state, poolAddress);

    batch(() => {
      dispatch(setInputToken(userPools.firstToken.address));
      dispatch(setOutputToken(userPools.secondToken.address));
    });
  };

export default {
  setValue,
  clearPrice,
  loadPairPrice,
  updatePairPriceByPool,
  swapPairPlace,
  setInOutTokens,
};
