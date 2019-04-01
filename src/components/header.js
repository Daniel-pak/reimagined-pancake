//Import our libraries for making a component
import React from 'react';
import { Text } from 'react-native';

//Make a component
const Header = () => {
  const { textStyle } = styles;

  return <Text style={textStyle}>Albums!</Text>;
};

const styles = {
  textStyle: {
    fontSize: 100
  }
};

//Make the component available to other parts of the application
export default Header;
