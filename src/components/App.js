/**
 * @flow
 */
'use strict'

import React, { Component, Element } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

type Props = {};
type DefaultProps = {};
type State = {};

export default class App extends Component<DefaultProps, Props, State> {
  static defaultProps = {}
  state = {}

  render(): ?Element<any> {
    return (
      <View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
})
