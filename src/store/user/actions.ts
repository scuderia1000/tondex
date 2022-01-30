import swapSelector from '../swap/selectors';
import { IGetState, IUserPool, IPool } from '../types';
import userSelector from './selectors';
import { removePoolById, setPool, setPoolsById } from './index';
import { toFixed } from '../../util';

const createPool = () => (dispatch: Function, getState: IGetState) => {
  const state = getState();
  const inTokenAddress = swapSelector.inputToken(state);
  const outTokenAddress = swapSelector.outputToken(state);
  const swapPrice = swapSelector.price(state);
  const pools = userSelector.pools(state);
  const { amount } = swapPrice;
  if (!inTokenAddress || !outTokenAddress || !amount) return;

  const pool: IUserPool = {
    firstToken: {
      address: inTokenAddress,
      price: swapPrice.inCostUSD,
      tokensAmount: swapPrice.amount,
      timestamp: new Date().getTime(),
    },
    secondToken: {
      address: outTokenAddress,
      price: swapPrice.outCostUSD,
      tokensAmount: swapPrice.quote,
      timestamp: new Date().getTime(),
    },
  };

  let isInExist = false;
  let isOutExist = false;
  let poolAddress = '';
  const isPoolExist = Object.keys(pools).some((key) => {
    isInExist = pools[key].firstToken.address === pool.firstToken.address;
    isOutExist = pools[key].secondToken.address === pool.secondToken.address;
    if (isInExist && isOutExist) {
      poolAddress = key;
    }
    return !!poolAddress;
  });
  if (isPoolExist) {
    const updatedPool: IPool<IUserPool> = {
      [poolAddress]: {
        ...pool,
        firstToken: {
          ...pool.firstToken,
          tokensAmount: toFixed(
            Number(pool.firstToken.tokensAmount) +
              Number(pools[poolAddress].firstToken.tokensAmount),
          ),
          timestamp: new Date().getTime(),
        },
        secondToken: {
          ...pool.secondToken,
          tokensAmount: toFixed(
            Number(pool.secondToken.tokensAmount) +
              Number(pools[poolAddress].secondToken.tokensAmount),
          ),
          timestamp: new Date().getTime(),
        },
      },
    };
    dispatch(setPoolsById(updatedPool));
  } else {
    dispatch(setPool(pool));
  }
};

const removePoolLiquidity = (poolAddress: string) => (dispatch: Function, getState: IGetState) => {
  const state = getState();
  const inTokenAddress = swapSelector.inputToken(state);
  const outTokenAddress = swapSelector.outputToken(state);
  const swapPrice = swapSelector.price(state);
  const pool = userSelector.poolById(state, poolAddress);
  const { amount } = swapPrice;
  if (!inTokenAddress || !outTokenAddress || !amount) return;

  const firstAmount = toFixed(Number(pool.firstToken.tokensAmount) - Number(swapPrice.amount));
  const secondAmount = toFixed(Number(pool.secondToken.tokensAmount) - Number(swapPrice.quote));
  if (Number(firstAmount) === 0 || Number(secondAmount) === 0) {
    dispatch(removePoolById(poolAddress));
    return;
  }

  const updatedPool: IPool<IUserPool> = {
    [poolAddress]: {
      ...pool,
      firstToken: {
        ...pool.firstToken,
        tokensAmount: toFixed(Number(pool.firstToken.tokensAmount) - Number(swapPrice.amount)),
        timestamp: new Date().getTime(),
      },
      secondToken: {
        ...pool.secondToken,
        tokensAmount: toFixed(Number(pool.secondToken.tokensAmount) - Number(swapPrice.quote)),
        timestamp: new Date().getTime(),
      },
    },
  };
  dispatch(setPoolsById(updatedPool));
};

export default {
  createPool,
  removePoolLiquidity,
};
