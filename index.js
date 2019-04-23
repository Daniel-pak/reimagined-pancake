//import a library to help us build a component
import React from 'react'; //If installing package through npm, you can use the short hand. ex: react, react-native
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header'; //If creating custom components, need to reference the relative path.
import AlbumList from './src/components/AlbumList';

//create a component - The "App" Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//render it to a device
AppRegistry.registerComponent('albums', () => App);
