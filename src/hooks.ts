import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { GlobalState, Dispatch } from 'src/store';

export const useAppDispatch = () => useDispatch<Dispatch>();
export const useAppSelector: TypedUseSelectorHook<GlobalState> = useSelector;
