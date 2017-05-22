/**
 * @flow
 */
'use strict'

export type AppAction = 
  | { type: 'INITIALIZED', payload: boolean }
;

export type Action =
  | AppAction
;
