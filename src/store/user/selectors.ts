import { IPool, IUserPool, IUserState } from '../types';
import { RootState } from '../index';

const user = (state: RootState): IUserState => state.user;
const pools = (state: RootState): IUserPool => user(state).pools;
const poolById = (state: RootState, id: string): IPool => pools(state)[id];

export default {
  user,
  pools,
  poolById,
};
