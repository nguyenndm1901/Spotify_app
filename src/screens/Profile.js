import React, { useState } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    Dimensions,
    ScrollView,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const screenHeight = Math.round(Dimensions.get('window').height);

const Profile = () => {
    return (
        <View style={styles.background}>
            <StatusBar barStyle={"light-content"} translucent={true} />
            <View style={styles.firstView}>
                <LinearGradient
                    colors={['#783C50', 'black']}
                    style={styles.linearGradient}
                    start={{ x: 0.5, y: -0.3 }}
                //end={{ x: 1, y: 1 }}
                >
                    <Image source={require('../components/assets/image.png')} style={styles.imageStyle} />
                    <Text style={styles.nameStyle}>
                        Mr. User
                    </Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPress}
                    >
                        <Text style={{ color: 'white', borderColor: 'white' }}> Edit profile </Text>
                    </TouchableOpacity>
                </LinearGradient>

            </View>
            <View style={styles.secView}>
                <View style={styles.first2ndView}>
                    <View style={styles.miniView}>
                        <Text style={styles.textAlign}>
                            1
                        </Text>
                        <Text style={styles.textAlign}>
                            Playlist(s)
                        </Text>
                    </View>
                    <View style={styles.miniView}>
                        <Text style={styles.textAlign}>
                            0
                        </Text>
                        <Text style={styles.textAlign}>
                            Follower(s)
                        </Text>
                    </View>
                    <View style={styles.miniView}>
                        <Text style={styles.textAlign}>
                            2
                        </Text>
                        <Text style={styles.textAlign}>
                            Following(s)
                        </Text>
                    </View>
                </View>
                <View style={styles.sec2ndView}>
                    <Text style={styles.textAlign2}>
                        Public Playlist
                    </Text>
                    <View style={styles.playlists}>
                        <View style={{flex: 1, alignSelf: 'flex-start'}}>
                            <Image source={require('../components/assets/playlist.png')} style={styles.image}/>
                        </View>
                        <View style={{flex: 4, alignSelf: 'flex-start'}}>
                            <Text style={{
                                color: 'white', 
                                fontSize: 16,
                                fontFamily: 'Arial',
                                fontWeight: 'bold',
                                marginTop: 20,
                                marginLeft: 5,
                                }}>
                                Playlist 1
                            </Text>
                            <Text style={{
                                color: 'white', 
                                fontSize: 12,
                                fontFamily: 'Arial',
                                marginTop: 5,
                                marginLeft: 5,
                                }}>
                                0 Follower(s)
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    firstView: {
        flex: 1,
        backgroundColor: '#783C50',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secView: {
        flex: 1,
        backgroundColor: 'black'
    },
    imageStyle: {
        //top: '5%',
        width: 100,
        height: 100,
        borderRadius: 60,
        borderColor: '#F573A0',
        margin: 10,
    },
    nameStyle: {
        color: 'white',
        fontSize: 30,
        marginVertical: 10,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        margin: 10,
    },
    button: {
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderRadius: 10,
        padding: 5,
        borderWidth: 1,
        margin: 10,
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    first2ndView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
    },
    miniView: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        //alignItems:'center',
        //alignContent:'center',
    },
    sec2ndView: {
        flex: 4,
        flexDirection: 'column',
        backgroundColor: 'black',
        marginTop: 20,
    },
    textAlign: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        padding: 3,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        fontSize: 15,
    },
    textAlign2: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        padding: 3,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        fontSize: 25,
    },
    playlists: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 58,
        height: 58,
        margin: 10,
    },
})

export default Profile