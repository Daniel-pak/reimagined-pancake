import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

//can be a functional method because we don't need a life cycle method nor state

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>  
    </Card>
  )
};

export default AlbumDetail;
