import { RootReducer } from '../types/common';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector;
