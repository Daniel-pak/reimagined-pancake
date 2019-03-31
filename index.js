//import a library to help us build a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//create a component - The "App" Component
const App = () => <Text>Some Text</Text>;

//render it to a device
AppRegistry.registerComponent('albums', () => App);
