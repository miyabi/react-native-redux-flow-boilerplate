/**
 * @flow
 */

import React, { Component, Element } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

type Props = {
};

type State = {
};

export default class App extends Component {
  static defaultProps: Props = {};
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render(): ?Element<any> {
    return (
      <View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
})
