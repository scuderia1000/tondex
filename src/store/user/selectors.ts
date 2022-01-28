import { IPool, IUserPool, IUserState } from '../types';
import { IRootState } from '../index';

const user = (state: IRootState): IUserState => state.user;
const pools = (state: IRootState): IUserPool => user(state).pools;
const poolById = (state: IRootState, id: string): IPool => pools(state)[id];

export default {
  user,
  pools,
  poolById,
};
