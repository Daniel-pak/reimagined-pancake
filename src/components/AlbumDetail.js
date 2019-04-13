import React from 'react';
import { View, Text } from 'react-native';

//can be a functional method because we don't need a life cycle method nor state

const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  )
};

export default AlbumDetail;