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
        backgroundColor: '#121212'
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
})

export default DailyMix1;