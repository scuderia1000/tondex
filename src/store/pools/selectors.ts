import { IRootState } from '../index';
import { IPoolsState } from '../types';
import { IMap, IPoolInfo } from '../../types';

const pools = (state: IRootState): IPoolsState => state.pools;
const poolsMap = (state: IRootState): IMap<IPoolInfo> => pools(state).byAddress;
const byAddress = (state: IRootState, address: string): IPoolInfo => poolsMap(state)[address];

export default {
  pools,
  poolsMap,
  byAddress,
};
