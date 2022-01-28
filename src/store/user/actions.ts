import swapSelector from '../swap/selectors';
import { IGetState, IPool, IUserPool } from '../types';
import userSelector from './selectors';
import { setPool, setPoolsById } from './index';

const createPool = () => (dispatch: Function, getState: IGetState) => {
  const state = getState();
  const inTokenAddress = swapSelector.inputToken(state);
  const outTokenAddress = swapSelector.outputToken(state);
  const swapPrice = swapSelector.price(state);
  const pools = userSelector.pools(state);
  const { amount } = swapPrice;
  if (!inTokenAddress || !outTokenAddress || !amount) return;

  const pool: IPool = {
    firstToken: {
      address: inTokenAddress,
      price: swapPrice.inCostUSD,
      tokensAmount: swapPrice.amount,
      timestamp: new Date().getTime(),
    },
    secondToken: {
      address: outTokenAddress,
      price: swapPrice.outCostUSD,
      tokensAmount: swapPrice.price,
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
    const updatedPool: IUserPool = {
      [poolAddress]: {
        ...pool,
        firstToken: {
          ...pool.firstToken,
          tokensAmount: String(
            Number(pool.firstToken.tokensAmount) +
              Number(pools[poolAddress].firstToken.tokensAmount),
          ),
          timestamp: new Date().getTime(),
        },
        secondToken: {
          ...pool.secondToken,
          tokensAmount: String(
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

export default {
  createPool,
};
