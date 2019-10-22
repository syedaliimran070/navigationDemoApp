import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { DrawerItems, SafeAreaView } from 'react-navigation';

import styles from './styles';

class BurgerMenu extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container} forceInset={{ top: "always", horizontal: "never" }}>
        <ScrollView style={styles.container}>
          <DrawerItems {...this.props} />
        </ScrollView>
        <Button
          icon={{ name: "md-log-out", type: "ionicon" }}
          title="LogOut"
          iconContainerStyle= {styles.icon}
          buttonStyle= {styles.button}
          titleStyle= {styles.title}
          onPress={() => {}}
         />
      </SafeAreaView>
    )
  }
}

export default BurgerMenu;
