import React, { useState } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    Dimensions,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    Switch,
} from 'react-native';
import Slider from '@react-native-community/slider';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();

const screenWidth = Math.round(Dimensions.get('window').width);
const image = require('../components/assets/image.png');

const ProfileName = ({ name, detail }) => (
    <View style={styles.itemContainer}>
        <Text style={styles.itemName} numberOfLines={1}>{name}</Text>
        <Text style={styles.itemDetail} numberOfLines={1}>{detail}</Text>
    </View>
);



const Settings = ({ navigation }) => {
    const [isEnabledData, setIsEnabledData] = useState(false);
    const toggleSwitchData = () => setIsEnabledData(previousState => !previousState);

    const [isEnabledGapless, setIsEnabledGapless] = useState(true);
    const toggleSwitchGapless = () => setIsEnabledGapless(previousState => !previousState);

    const [isEnabledCanvas, setIsEnabledCanvas] = useState(true);
    const toggleSwitchCanvas = () => setIsEnabledCanvas(previousState => !previousState);

    const [sliderValue, setSliderValue] = useState(2);

    return (
        <ScrollView vertical={true} style={styles.scrollViewSetting}>
            <View style={styles.screenCover}>
                <StatusBar barStyle={"light-content"} translucent={true} />
                <View style={styles.profileBarView}>
                    <TouchableOpacity onPress={() => { navigation.navigate("Profile") }}>
                        <View style={styles.profileBar}>
                            <Image source={image} style={styles.imageStyle} />
                            <ProfileName
                                name="Mr. User"
                                detail="View detail"
                            />
                            <FontAwesome
                                name="chevron-right"
                                size={10}
                                color="#969696"
                                style={styles.arrowIcon}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Text style={{
                        fontSize: 19,
                        color: 'white',
                        fontFamily: 'Arial',
                        fontWeight: 'bold',
                        paddingBottom: 10,
                    }}>
                        Data Saver
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        color: 'grey',
                        fontFamily: 'Arial',
                        width: screenWidth - 120
                    }}
                        numberOfLines={3}
                    >
                        Sets your music quality to low (equivalent to 24 kbit/s) and disables artist canvases.
                    </Text>
                    <Switch
                        style={styles.contentSwitch}
                        trackColor={{ false: "#767577", true: "#164D2A" }}
                        thumbColor={isEnabledData ? "#1DD35E" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchData}
                        value={isEnabledData}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={{
                        fontSize: 19,
                        color: 'white',
                        fontFamily: 'Arial',
                        fontWeight: 'bold',
                        paddingBottom: 10,
                    }}>
                        Crossfade
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        color: 'grey',
                        fontFamily: 'Arial',
                    }}
                    >
                        Allows you to crossfade between songs.
                    </Text>
                    <Slider
                        style={{ width: screenWidth * 0.95, alignSelf: 'center', marginTop: 5 }}
                        maximumValue={12}
                        minimumValue={0}
                        minimumTrackTintColor="#1BB852"
                        maximumTrackTintColor="#3C3C3C"
                        thumbTintColor="#1EFF60"
                        step={1}
                        value={sliderValue}
                        onValueChange={
                            (sliderValue) => setSliderValue(sliderValue)
                        }
                    />
                    <Text style={{
                        fontSize: 16,
                        color: 'grey',
                        fontFamily: 'Arial',
                        paddingBottom: 20,
                    }}
                    >
                        Crossfade time: {sliderValue}s.
                    </Text>
                </View>
                <View style={styles.content}>
                    <Text style={{
                        fontSize: 19,
                        color: 'white',
                        fontFamily: 'Arial',
                        fontWeight: 'bold',
                        paddingBottom: 5,
                    }}>
                        Gapless
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        color: 'grey',
                        fontFamily: 'Arial',
                    }}
                    >
                        Allows gapless playback.
                    </Text>
                    {<Switch
                        style={styles.contentSwitch}
                        trackColor={{ false: "#767577", true: "#164D2A" }}
                        thumbColor={isEnabledGapless ? "#1DD35E" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchGapless}
                        value={isEnabledGapless}
                    />}
                </View>
                <View style={styles.content} accessibilityElementsHidden={isEnabledData}>
                    <Text style={{
                        fontSize: 19,
                        color: 'white',
                        fontFamily: 'Arial',
                        fontWeight: 'bold',
                        paddingBottom: 5,
                    }}>
                        Canvas
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        color: 'grey',
                        fontFamily: 'Arial',
                    }}
                    >
                        Display short, looping visuals on tracks.
                    </Text>
                    {<Switch
                        style={styles.contentSwitch}
                        trackColor={{ false: "#767577", true: "#164D2A" }}
                        thumbColor={isEnabledCanvas ? "#1DD35E" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchCanvas}
                        value={isEnabledCanvas}
                    />}
                </View>
            </View>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    scrollViewSetting: {
        backgroundColor: 'black',
    },
    screenCover: {
        flex: 1,
    },
    profileBar: {
        flex: 1,
        flexDirection: 'row',
        borderColor: '#191919'
    },
    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 20,
        margin: 15,
    },
    itemName: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    itemDetail: {
        fontSize: 15,
        color: '#919191',
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    itemContainer: {
        width: screenWidth * 0.77,
        marginLeft: 0,
        height: 50,
        margin: 15,
        backgroundColor: 'black',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        textAlign: 'center',
    },
    arrowIcon: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        position: 'absolute',
        top: 35,
        right: screenWidth - (screenWidth - 25),
    },
    profileBarView: {
        flex: 1,
    },
    content: {
        flex: 0.75,
        width: screenWidth * 0.95,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
        /* margin: 5,
        padding: 5, */
    },
    contentSwitch: {
        transform: [{ scaleX: .8 }, { scaleY: .7 }],
        alignSelf: 'flex-end',
        top: -30
    },
});

export default Settings;