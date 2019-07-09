import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <Image
                        style={{width: 50, height: 50}}
                        source={{uri: props.album.thumbnail_image}}
                        />
                <Text>{props.album.title}</Text>
                <Text>{props.album.artist}</Text>
            </CardSection>
            <CardSection>
                <Image
                        style={{width: 300, height: 300}}
                        source={{uri: props.album.image}}
                        />
            </CardSection>
        </Card>
    );
}

export default AlbumDetail;