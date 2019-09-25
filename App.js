import React, { Component } from 'react';
import Orientation from "react-native-orientation";
import Navigator from './app/navigator/Navigator';

interface Props{}
export default class App extends Component<Props> {
  componentDidMount = () => {
    Orientation.lockToPortrait();
  }

  render() {
    return (
      <Navigator />
      )
  }
}
