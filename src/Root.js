/**
 * @flow
 */
'use strict'

import React, { Component, Element } from 'react'
import { Provider } from 'react-redux'
import type { Store } from './types/Store'
import { configureStore } from './store/configureStore'
import AppContainer from './containers/AppContainer'

type Props = {};
type DefaultProps = {};
type State = {
  isLoaded: boolean,
  store: Store,
};

export default class Root extends Component<DefaultProps, Props, State> {
  static defaultProps = {}
  state = {}

  constructor(props: Props) {
    super(props)
    this.state = {
      isLoaded: false,
      store: configureStore(() => this.setState({ isLoaded: true })),
    }
  }

  render(): ?Element<any> {
    if (!this.state.isLoaded) {
      // Wait until the store is available.
      return null
    }

    return (
      <Provider store={this.state.store}>
        {<AppContainer />}
      </Provider>
    )
  }
}
