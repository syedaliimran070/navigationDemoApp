import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { createSwitchNavigator, createAppContainer, NavigationScreenProps } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator, StackViewTransitionConfigs } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import DetailScreen from '../screens/Detail';
import HomeScreen from '../screens/Home';
import LoadingScreen from '../screens/Loading';
import OptionsScreen from '../screens/Options';
import SettingsScreen from '../screens/Settings';
import BurgerMenu from '../components/BurgerMenu';

const IOS_MODAL_ROUTES = ["OptionsScreen"];

let dynamicModalTransition = (
  transitionProps: NavigationTransitionProps,
  prevTransitionProps: NavigationTransitionProps
) : TransitionConfig => {
  return StackViewTransitionConfigs.defaultTransitionConfig(
    transitionProps,
    prevTransitionProps,
    IOS_MODAL_ROUTES.some(
      screenName =>
        screenName === transitionProps.scene.route.routeName ||
        (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
    )
  );
};

const HomeStack = createStackNavigator(
  {
  DetailScreen,
  HomeScreen,
  OptionsScreen
  },
  { initialRouteName : "HomeScreen" },
  { transitionConfig: dynamicModalTransition }
);

HomeStack.navigationOptions = ({ navigation }: NavigationScreenProps) => {
  let drawerLockMode = "unlocked";
  if(navigation.state.index > 0){
    drawerLockMode = "locked-closed";
  }

  return {
  tabBarLable: "Home",
  tabBarIcon: ({ tintColor }: TabScene) => (
    <Icon name= "ios-home" type="ionicon" color={tintColor} />
  ),
  drawerLockMode,
  drawerLable: "Home",
  drawerIcon: ({ tintColor }: TabScene) => (
    <Icon name= "md-home" type="ionicon" color={tintColor} />
  )
};
};

const SettingsStack = createStackNavigator({ SettingsScreen });

SettingsStack.navigationOptions = {
  tabBarLable: "Settings",
  tabBarIcon: ({ tintColor }: TabScene) => (
    <Icon name= "ios-cog" type= "ionicon" color= {tintColor} />
  ),
  drawerLable: "Settings",
  drawerIcon: ({ tintColor }: TabScene) => (
    <Icon name= "md-cog" type= "ionicon" color= {tintColor} />
  )
}

const MainNavigator = Platform.select({
  ios: createBottomTabNavigator({ HomeStack, SettingsScreen }),
  android: createDrawerNavigator({ HomeStack, SettingsScreen })
});

const RootSwitch = createSwitchNavigator(
  { LoadingScreen, MainNavigator },
  { initialRouteName: "MainNavigator" }
);

const Navigator = createAppContainer(RootSwitch);

export default Navigator;
