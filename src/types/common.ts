import { rootReducer } from '../store/rootReducer';
import { FC, PropsWithChildren } from 'react';

// export type MyFCStrict<TProps = {}> = FC<PropsWithChildren<TProps>>;

export type MyFC<TProps = {}> = FC<PropsWithChildren<TProps>>;

export type RootReducer = ReturnType<typeof rootReducer>;

export interface IAction<TPayload = any> {
  type: string;
  payload: TPayload;
}
