import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Image, StyleSheet } from 'react-native';


export default ({ item: { imageUri, title, artists, track, } }) => (
    <TouchableOpacity>
        <View style={styles.container}>
            <Image
                source={{ uri: imageUri }}
                style={styles.image}
            />
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{artists}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    text: {},
});