/**
 * @flow
 */
'use strict'

import type { Action } from '../types/Action'

type State = {
  isInitialized: boolean,
};

const initialState: State = {
  isInitialized: false,
}

export function app(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'INITIALIZED':
      return { ...state, isInitialized: action.payload }

    default:
      return state
  }
}
