/**
 * @flow
 */
'use strict'

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'
import type { Action } from './Action'
import type { State } from './State'

export type Store = ReduxStore<State, Action>;
export type GetState = () => State;
export type ThunkAction = (Dispatch, GetState) => any;
export type PromiseAction = Promise<Action>;
export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
