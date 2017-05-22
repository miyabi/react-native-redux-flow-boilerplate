/**
 * @flow
 */
'use strict'

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import type { Store } from '../types/Store'
import reducers from '../reducers'

export function configureStore(onComplete: () => void): Store {
  const middlewares = [thunkMiddleware]

  if (__DEV__) {
    const loggerMiddleware = createLogger({
      collapsed: true,
      duration: true,
    })

    middlewares.push(loggerMiddleware)
  }

  const store = createStore(
    reducers,
    compose(
      applyMiddleware(...middlewares),
      autoRehydrate()
    )
  )

  persistStore(store, {
    storage: AsyncStorage,
  }, onComplete)

  return store
}
