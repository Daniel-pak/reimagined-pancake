import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//functional component -> must return back some JSX
//class based component -> more knowledge about their overall status (life cycle methods)
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <Text key={album.title}>{album.title}</Text>
    );
  }

  render() {
    console.log(this.state.albums);

    console.log(this.renderAlbums);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
