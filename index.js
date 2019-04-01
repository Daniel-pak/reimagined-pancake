//import a library to help us build a component
import React from 'react'; //If installing package through npm, you can use the short hand. ex: react, react-native
import { AppRegistry } from 'react-native';
import Header from './src/components/header'; //If creating custom components, need to reference the relative path.

//create a component - The "App" Component
const App = () => (
  <Header />
);

//render it to a device
AppRegistry.registerComponent('albums', () => App);
