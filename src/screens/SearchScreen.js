import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    Dimensions,
    ScrollView,
    StatusBar,
    Platform
} from 'react-native';
import { TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();
import LinearGradient from 'react-native-linear-gradient';

const screenWidth = Math.round(Dimensions.get('window').width);
const SearchScreen = () => {
    return (
        <ScrollView vertical={true} style={styles.scrollViewSetting}>
            <LinearGradient
                colors={['white', 'black']}
                style={styles.linearGradient}
                start={{ x: 0.5, y: -1 }}
                end={{ x: 0.8, y: 0.5 }}>
                <View style={styles.screenCover}>
                    <StatusBar barStyle={"light-content"} translucent={true} />
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>
                            Search
                        </Text>
                    </View>
                    <Search />
                </View>
            </LinearGradient>
        </ScrollView>
    );
}
class Search extends Component {
    state = {
        search: ''
    }
    handleSearch = (text) => {
        this.setState({ search: text })
    }
    icon = (search) => {
        alert("Search: " + search)
    }
    render() {
        return (
            <View style={styles.boxStyle}>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Artists, songs, or podcasts"
                    placeholderTextColor="#808080"
                    autoCapitalize='characters'
                    textAlignVertical='center'
                    textAlignHorizontal='center'
                    onChangeText={this.handleSearch}
                />
                <FontAwesome
                    name="search"
                    size={24}
                    color="#969696"
                    style={styles.searchIcon}
                    onPress={() => this.icon(this.state.search)}
                />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 10,
    },
    boxStyle: {
        width: screenWidth * 0.95,
        //flex: 1,
    },
    headerText: {
        //flex: 1,
        paddingTop: 40,
        paddingBottom: 4,
        paddingHorizontal: 90,
        fontSize: 40,
        color: 'white',
        fontWeight: "500",
        fontFamily: 'Arial',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    scrollViewSetting: {
        backgroundColor: 'black',
    },
    screenCover: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginVertical: 30,
    },
    searchIcon: {
        position: 'absolute',
        ...Platform.select({
            ios: {
                marginLeft: 355,
                paddingTop: 7,
            },
            android: {
                marginLeft: 355,
                paddingTop: 7,
            }

        })
    },
    input: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: 40,
    },
});

export default SearchScreen;