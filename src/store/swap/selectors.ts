import { IRootState } from '../index';
import { IExchangeState, IPrice } from '../types';

const swap = (state: IRootState): IExchangeState => state.swap;
const inputToken = (state: IRootState): string => swap(state).in;
const outputToken = (state: IRootState): string => swap(state).out;
const swapValue = (state: IRootState): string => swap(state).value;
const fieldType = (state: IRootState): string => swap(state).changedField;
const price = (state: IRootState): IPrice => swap(state).price;

export default { inputToken, outputToken, swapValue, fieldType, price };
