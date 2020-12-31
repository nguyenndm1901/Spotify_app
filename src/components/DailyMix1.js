import React from 'react';
import {
    Image,
    Text,
    StyleSheet,
    View,
    ScrollView,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();

const DailyMix1 = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <StatusBar barStyle={"light-content"} translucent={true} />
            <View style={styles.firstView}>
                <LinearGradient
                    colors={['#52524B', '#121212']}
                    style={styles.linearGradient}
                    start={{ x: 0.95, y: 0.3 }}
                    end={{ x: 0.95, y: 0.95 }}
                >
                    <Image source={require('../components/assets/album1/album_image_1.png')} style={styles.imageStyle} />
                    <Text style={styles.nameStyle}>
                        Daily Mix 1
                    </Text>
                    <Text style={styles.subNameStyle}>
                        MADE FOR YOU
                    </Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("NowPlaying")}
                    >
                        <Text style={{ color: 'white', borderColor: 'transparent', fontWeight: 'bold', }}> PLAY </Text>
                    </TouchableOpacity>
                </LinearGradient>

            </View>
            <ScrollView style={styles.secView}>
                <View style={styles.playlists}>
                    <Image source={{ uri: "https://img.discogs.com/y_z1s2a-PWbHyuYziwBmH_h07vg=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13787318-1561122886-5258.png.jpg" }} style={styles.imagePlaylist} />
                    <TouchableOpacity onPress={() => {navigation.navigate("birds")}}>
                        <View style={styles.playlistName}>
                            <Text style={{ color: 'white', marginHorizontal: 10, fontWeight: 'bold', fontSize: 20 }}>
                                Birds
                    </Text>
                            <Text style={{ color: 'grey', alignSelf: 'flex-start', marginHorizontal: 10, fontSize: 15 }}>
                                Imagine Dragons
                    </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.playlists}>
                    <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/en/6/63/Ed_Sheeran_Happier.png" }} style={styles.imagePlaylist} />
                    <TouchableOpacity onPress={() => {navigation.navigate("happier")}}>
                        <View style={styles.playlistName}>
                            <Text style={{ color: 'white', marginHorizontal: 10, fontWeight: 'bold', fontSize: 20 }}>
                                Happier
                    </Text>
                            <Text style={{ color: 'grey', alignSelf: 'flex-start', marginHorizontal: 10, fontSize: 15 }}>
                                Ed Sheeran
                    </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.playlists}>
                    <Image source={{ uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/92da7b98-a917-480a-965d-ba19e33f0ff3/d6ur36r-970489a6-ab30-4879-9fe6-6101453b8797.jpg" }} style={styles.imagePlaylist} />
                    <TouchableOpacity onPress={() => {navigation.navigate("safeandsound")}}>
                        <View style={styles.playlistName}>
                            <Text style={{ color: 'white', marginHorizontal: 10, fontWeight: 'bold', fontSize: 20 }}>
                                Safe and Sound
                    </Text>
                            <Text style={{ color: 'grey', alignSelf: 'flex-start', marginHorizontal: 10, fontSize: 15 }}>
                                Taylor Swift
                    </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.playlists}>
                    <Image source={{ uri: "https://i1.sndcdn.com/artworks-000240088107-9s5wcs-t500x500.jpg" }} style={styles.imagePlaylist} />
                    <TouchableOpacity onPress={() => {navigation.navigate("perfect")}}>
                        <View style={styles.playlistName}>
                            <Text style={{ color: 'white', marginHorizontal: 10, fontWeight: 'bold', fontSize: 20 }}>
                                Perfect
                    </Text>
                            <Text style={{ color: 'grey', alignSelf: 'flex-start', marginHorizontal: 10, fontSize: 15 }}>
                                Ed Sheeran
                    </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.playlists}>
                    <Image source={{ uri: "https://i1.sndcdn.com/artworks-000108222772-sklhj2-t500x500.jpg" }} style={styles.imagePlaylist} />
                    <TouchableOpacity onPress={() => {navigation.navigate("stiches")}}>
                        <View style={styles.playlistName}>
                            <Text style={{ color: 'white', marginHorizontal: 10, fontWeight: 'bold', fontSize: 20 }}>
                                Stiches
                    </Text>
                            <Text style={{ color: 'grey', alignSelf: 'flex-start', marginHorizontal: 10, fontSize: 15 }}>
                                Shawn Mendes
                    </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    firstView: {
        flex: 1.2,
        backgroundColor: '#783C50',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secView: {
        flex: 1,
        backgroundColor: '#121212',
        flexDirection: 'column',
    },
    imageStyle: {
        top: '8%',
        width: 190,
        height: 190,
        borderColor: '#F573A0',
        margin: 10,
    },
    nameStyle: {
        top: '9%',
        color: 'white',
        fontSize: 25,
        marginVertical: 10,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        margin: 10,
    },
    subNameStyle: {
        top: '9.5%',
        color: 'white',
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'Arial',
    },
    button: {
        top: '10%',
        backgroundColor: '#1DB954',
        borderColor: 'transparent',
        height: 50,
        width: 150,
        borderRadius: 30,
        padding: 5,
        borderWidth: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    playlistName: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        paddingTop: 16,
    },
    playlists: {
        flexDirection: 'row',
    },
    imagePlaylist: {
        width: 56,
        height: 56,
        margin: 10,
    },
})

export default DailyMix1;