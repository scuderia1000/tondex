import { RootState } from '../index';
import { IExchangeTokenInfo, ISwapState } from '../types';

const swap = (state: RootState): ISwapState => state.swap;
const inputToken = (state: RootState): IExchangeTokenInfo => swap(state).in;
const outputToken = (state: RootState): IExchangeTokenInfo => swap(state).out;
const swapValue = (state: RootState): string => swap(state).value;

export default { inputToken, outputToken, swapValue };
