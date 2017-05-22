/**
 * @flow
 */
'use strict'

import type { Dispatch, GetState, Action, ThunkAction } from '../types'

export function initialized(isInitialized: boolean): ThunkAction {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch(({ type: 'INITIALIZED', payload: isInitialized }: Action))
  }
}
