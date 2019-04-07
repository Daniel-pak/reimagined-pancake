import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//functional component -> must return back some JSX
//class based component -> more knowledge about their overall status (life cycle methods)
class AlbumList extends Component {
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response));
  }

  render() {
    return (
      <View>
        <Text>Album List!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
