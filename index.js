//import a library to help us build a component
import React from 'react';
import ReactNative from 'react-native';

//create a component - The "App" Component
const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

//render it to a device
ReactNative.AppRegistry.registerComponent('albums', () => App);
