import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    Dimensions,
    ScrollView,
    StatusBar
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();
import Swiper from "react-native-web-swiper";

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class Screen extends React.Component {
    render() {
        return (
            <ScrollView vertical={true} style={styles.scrollView}>
                <View style={styles.screenCover}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>
                            Get more out of your music with Premium
                        </Text>
                        <View>
                            <View style={{ flex: 1 }}>
                                <Swiper
                                    direction='row'
                                    controlsProps={{
                                        dotsPos: 'bottom',
                                        dotsTouchable: false,
                                        prevPos: false,
                                        nextPos: false,
                                    }}>
                                    <View style={styles.slideContainer} >
                                        <Image source={require('../components/assets/premium1.png')} style={styles.premiumImage} />
                                    </View>
                                    <View style={[styles.slideContainer]} >
                                        <Image source={require('../components/assets/premium2.png')} style={styles.premiumImage} />
                                    </View>
                                    <View style={[styles.slideContainer]} >
                                        <Image source={require('../components/assets/premium3.png')} style={styles.premiumImage} />
                                    </View>
                                    <View style={[styles.slideContainer]} >
                                        <Image source={require('../components/assets/premium4.png')} style={styles.premiumImage} />
                                    </View>
                                    <View style={[styles.slideContainer]} >
                                        <Image source={require('../components/assets/premium5.png')} style={styles.premiumImage} />
                                    </View>
                                </Swiper>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'black',
    },
    slideContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    premiumImage: {
        width: 294,
        height: 147,
        borderRadius: 5,
    },
    headerText: {
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: "Arial",
        fontSize: 30,
        top: (screenHeight - 600) / 2,
        width: screenWidth * 0.75,
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
        paddingVertical: 30,
        paddingHorizontal: 10,
    },
    screenCover: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        paddingTop: 16,
    },
})

