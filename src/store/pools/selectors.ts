import { IRootState } from '../index';
import { IPool, IPoolsState } from '../types';
import { IPoolInfo } from '../../types';

const pools = (state: IRootState): IPoolsState => state.pools;
const poolsMap = (state: IRootState): IPool<IPoolInfo> => pools(state).byAddress;
const byAddress = (state: IRootState, address: string): IPoolInfo => poolsMap(state)[address];

export default {
  pools,
  poolsMap,
  byAddress,
};
