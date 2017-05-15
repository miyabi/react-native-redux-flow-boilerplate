/**
 * @flow
 */

import type { Dispatch, GetState, Action } from '../types'

export const initialized = (isInitialized: boolean) => {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch(({ type: 'INITIALIZED', isInitialized }: Action))
  }
}
