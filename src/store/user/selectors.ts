import { IUserPool, IPool, IUserState } from '../types';
import { IRootState } from '../index';

const user = (state: IRootState): IUserState => state.user;
const pools = (state: IRootState): IPool<IUserPool> => user(state).pools;
const poolById = (state: IRootState, id: string): IUserPool => pools(state)[id];

export default {
  user,
  pools,
  poolById,
};
