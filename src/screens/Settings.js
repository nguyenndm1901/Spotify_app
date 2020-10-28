import React from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    Dimensions,
    ScrollView,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();

const screenWidth = Math.round(Dimensions.get('window').width);
const Stack = createStackNavigator();
const image = require('../components/assets/image.png');

const ProfileName = ({ name, detail }) => (
    <View style={styles.itemContainer}>
        <Text style={styles.itemName} numberOfLines={1}>{name}</Text>
        <Text style={styles.itemDetail} numberOfLines={1}>{detail}</Text>
    </View>
);

const Settings = ({ navigation }) => {
    return (
        <ScrollView vertical={true} style={styles.scrollViewSetting}>
            <View style={styles.screenCover}>
                <StatusBar barStyle={"light-content"} translucent={true} />
                <View style={styles.profileBar}>
                    <Image source={image} style={styles.imageStyle} />
                    <ProfileName
                        name="Mr. User"
                        detail="View detail"
                    />
                    <FontAwesome
                        name="chevron-right"
                        size={20}
                        color="#969696"
                        style={styles.arrowIcon}
                    />
                    <TouchableOpacity
                        backgroundColor="white"
                        onPress={() => {
                        navigation.navigate("haha");
                    }}>
                    </TouchableOpacity>
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
        marginLeft: 15,
        height: 50,
        margin: 15,
        marginLeft: 0,
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
});

export default Settings;