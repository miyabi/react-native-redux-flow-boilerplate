/**
 * @flow
 */

import { combineReducers } from 'redux'
import { app } from './app'

const reducers = {
  app,
}

export type Reducers = typeof reducers;
export default combineReducers(reducers)
