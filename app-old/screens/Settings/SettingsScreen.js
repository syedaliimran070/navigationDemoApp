import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationScreenProps } from 'react-navigation';

import styles from './styles';

class SettingsScreen extends Component {

  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: "Settings",
    headerLeft: Platform.select({
      ios: (
        <Icon
          name= "ios-menu"
          type= "ionicon"
          containerStyle= {styles.icon}
          onPress= {() => {}}
        />
      ),
      android: (
        <Icon
          name= "md-menu"
          type= "Ionicon"
          containerStyle= {styles.icon}
          onPress= {() => navigation.toggleDrawer()}
        />
      )
    })
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>This is SettingsScreen</Text>
      </View>
    )
  }
}

export default SettingsScreen;
