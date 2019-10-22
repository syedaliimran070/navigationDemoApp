import React, { Component } from 'react';
// import Orientation from "react-native-orientation";
// import Navigator from './app/navigator/Navigator';

import { Provider } from 'react-redux';

import AppNavigator from './App/Navigation/AppNavigator';
import Store from './App/Redux/Store';

const App = () => {
    return (
      <Provider store={Store}>
        <AppNavigator />
      </Provider>
      )
}

export default App;
