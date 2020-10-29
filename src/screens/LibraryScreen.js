import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    StatusBar,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

FontAwesome.loadFont();

const Playlists = () => {
    return (
        <View style={styles.screenCover}>
            <View style={styles.playlists}>
                <Image source={require('../components/assets/create.png')} style={styles.imagePlaylist} />
                <Text style={{ color: 'white', alignSelf: 'center', marginHorizontal: 10, fontWeight: 'bold', fontSize: 20 }}>
                    Create playlist
                </Text>
            </View>
            <View style={styles.playlists}>
                <Image source={require('../components/assets/mega.png')} style={styles.imagePlaylist} />
                <View style={styles.playlistName}>
                    <Text style={{ color: 'white', alignSelf: 'center', marginHorizontal: 10, fontWeight: 'bold', fontSize: 20 }}>
                        Mega Hit Mix
                    </Text>
                    <Text style={{ color: 'grey', alignSelf: 'flex-start', marginHorizontal: 10, fontSize: 15 }}>
                        by Spotify
                    </Text>
                </View>
            </View>
            <View style={styles.playlists}>
                <Image source={require('../components/assets/playlist.png')} style={styles.imagePlaylist} />
                <View style={styles.playlistName}>
                    <Text style={{ color: 'white', alignSelf: 'center', marginHorizontal: 10, fontWeight: 'bold', fontSize: 20 }}>
                        User Mix
                    </Text>
                    <Text style={{ color: 'grey', alignSelf: 'flex-start', marginHorizontal: 10, fontSize: 15 }}>
                        by User
                    </Text>
                </View>
            </View>
        </View>
    );
}

const Artists = () => {
    return (
        <View style={styles.screenCover}>
            <View style={styles.playlists}>
                <Image source={require('../components/assets/againstthecurrent.png')} style={styles.imageArtists} />
                <Text style={{ color: 'white', alignSelf: 'center', marginHorizontal: 10, fontWeight: 'bold', fontSize: 17 }}>
                    Against The Current
                </Text>
            </View>
            <View style={styles.playlists}>
                <Image source={require('../components/assets/marshmello.png')} style={styles.imageArtists} />
                <Text style={{ color: 'white', alignSelf: 'center', marginHorizontal: 10, fontWeight: 'bold', fontSize: 17 }}>
                    Marshmello
                </Text>
            </View>
            <View style={styles.playlists}>
                <Image source={require('../components/assets/create.png')} style={styles.imageArtists} />
                <Text style={{ color: 'white', alignSelf: 'center', marginHorizontal: 10, fontWeight: 'bold', fontSize: 17 }}>
                    Add Artist
                </Text>
            </View>
        </View>
    );
}

const Albums = () => {
    return (
        <View style={styles.screenCover}>
            <View style={styles.album}>
                <Text style={styles.albumsText}>
                    Your albums will appear here.
                </Text>
            </View>
        </View>
    );
}

const Episodes = () => {
    return (
        <View style={styles.screenCover}>
            <View style={styles.album}>
                <Text style={styles.podcastText}>
                Looking for something to listen to?
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        BROWSE PODCASTS
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const Downloads = () => {
    return (
        <View style={styles.screenCover}>
            <View style={styles.album}>
                <Text style={styles.podcastText}>
                No downloads yet
                </Text>
                <Text style={styles.downloadText}>
                Tap {<IconArrowDown />} on an episode to listen without a connection.
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        BROWSE PODCASTS
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const Shows = () => {
    return (
        <View style={styles.screenCover}>
            <View style={styles.album}>
                <Text style={styles.podcastText}>
                You haven't followed any podcasts yet.
                </Text>
                <Text style={styles.downloadText}>
                When you follow a podcast, you'll get new episodes automatically.
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        BROWSE PODCASTS
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

class IconArrowDown extends Component {
    render() {
        return(
            <FontAwesome 
            name="arrow-circle-down"
            size={18}
            color="#969696"
            />
        )
    }
}

const styles = StyleSheet.create({
    screenCover: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        paddingTop: 10,
    },
    playlistName: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        paddingTop: 30,
    },
    playlists: {
        flexDirection: 'row',
    },
    imagePlaylist: {
        width: 84,
        height: 84,
        margin: 10,
    },
    imageArtists: {
        width: 84,
        height: 84,
        margin: 10,
        borderRadius: 84,
    },
    album: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
    },
    albumsText: {
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        top: (screenHeight - 400) / 2,
    },
    podcastText: {
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        top: (screenHeight - 400) / 2,
        width: screenWidth * 0.75,
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 30,
        top: (screenHeight - 300) / 2,
        width: 250,
        padding: 10,
        alignSelf: 'center',
    },
    buttonText: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 15,
    },
    downloadText: {
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 15,
        top: (screenHeight - 380) / 2,
        width: screenWidth * 0.75,
    },
});

export { Playlists, Artists, Albums, Episodes, Downloads, Shows };