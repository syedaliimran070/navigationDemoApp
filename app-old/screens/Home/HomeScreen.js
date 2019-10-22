import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { NavigationScreenProps } from 'react-navigation';

import styles from './styles';

interface Props {
  navigation: NavigationScreenProps<any, any>;
}

class HomeScreen extends Component<Props, object> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: "Home",
    headerLeft: Platform.select({
      ios: null,
      android: (
        <Icon
          name= "md-menu"
          type= "ionicon"
          containerStyle= {styles.icon}
          onPress= {() => navigation.toggleDrawer()}
        />
      )
    })
  });

  render() {
    const navigate= this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>This is HomeScreen</Text>
        <Button title= "Details" onPress= {() => navigate("DetailScreen")} />
        <Button title= "Options" onPress= {() => navigate("OptionsScreen")} />
      </View>
    )
  }
}


export default HomeScreen;
