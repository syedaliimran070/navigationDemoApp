import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class loginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is LoginScreen</Text>
      </View>
    )
  }
}

export default LoginScreen;
