import { RootState } from '../index';
import { IExchangeState } from '../types';

const swap = (state: RootState): IExchangeState => state.swap;
const inputToken = (state: RootState): string => swap(state).in;
const outputToken = (state: RootState): string => swap(state).out;
const swapValue = (state: RootState): string => swap(state).value;
const fieldType = (state: RootState): string => swap(state).changedField;

export default { inputToken, outputToken, swapValue, fieldType };
