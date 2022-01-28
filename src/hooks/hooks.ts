import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, IRootState } from '../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
