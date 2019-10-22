import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is DetailScreen</Text>
      </View>
    )
  }
}

export default DetailScreen;
