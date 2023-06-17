import { reducers } from '../store/rootReducer';
import { FC, PropsWithChildren } from 'react';

// export type MyFCStrict<TProps = {}> = FC<PropsWithChildren<TProps>>;

export type MyFC<TProps = {}> = FC<PropsWithChildren<TProps>>;

export type RootReducer = typeof reducers;
