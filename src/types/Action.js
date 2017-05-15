/**
 * @flow
 */

export type AppAction = 
  | { type: 'INITIALIZED', isInitialized: boolean }
;

export type Action =
  | AppAction
;
