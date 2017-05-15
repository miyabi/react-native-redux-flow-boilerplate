/**
 * @flow
 */

import React, { Component, Element } from 'react'
import { connect } from 'react-redux'
import type { Dispatch, State as StoreState } from '../types'
import App from '../components/App'

type Props = {
  dispatch?: Dispatch,
};

type State = {
};

class AppContainer extends Component {
  static defaultProps: Props = {};
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render(): ?Element<any> {
    return (
      <App />
    )
  }
}

const select = (store: StoreState, props: Props): Props => {
  // Map store state to props
  return {}
}

export default connect(select)(AppContainer)
