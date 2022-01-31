import { IUserState } from '../types';
import { IRootState } from '../index';
import { IMap, IUserPool } from '../../types';

const user = (state: IRootState): IUserState => state.user;
const pools = (state: IRootState): IMap<IUserPool> => user(state).pools;
const poolById = (state: IRootState, id: string): IUserPool => pools(state)[id];

export default {
  user,
  pools,
  poolById,
};
