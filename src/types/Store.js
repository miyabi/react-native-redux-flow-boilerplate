/**
 * @flow
 */

import type {
  Store as ReduxStore,
  Dispatch as ReduxDispatch,
} from 'redux'
import type { Action } from './Action'
import type { State } from './State'

export type Store = ReduxStore<State, Action>;
export type GetState = () => State;
export type ThunkAction<A> = ((Dispatch, GetState) => Promise<void> | void) => A;

export type Dispatch =
  & ReduxDispatch<Action>
  & ThunkAction<Action>
;
