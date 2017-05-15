/**
 * @flow
 */

import type { Action } from '../types/Action'

type State = {
  isInitialized: boolean,
};

const initialState: State = {
  isInitialized: false,
}

export const app = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'INITIALIZED':
      return { ...state, isInitialized: action.isInitialized }

    default:
      return state
  }
}
