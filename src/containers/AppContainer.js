/**
 * @flow
 */
'use strict'

import React, { Component, Element } from 'react'
import { connect } from 'react-redux'
import type { Dispatch, State as StoreState } from '../types'
import App from '../components/App'

type Props = {
  // Mapped
  dispatch?: Dispatch,
};
type DefaultProps = {};
type State = {};

class AppContainer extends Component<DefaultProps, Props, State> {
  static defaultProps = {};
  state = {};

  render(): ?Element<any> {
    return (
      <App />
    )
  }
}

function select(store: StoreState, props: Props) {
  // Map store state to props
  return {}
}

export default connect(select)(AppContainer)
