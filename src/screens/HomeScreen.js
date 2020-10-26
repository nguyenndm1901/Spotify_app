import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ScrollView,
  StatusBar, Button
} from 'react-native';
import Album1 from '../components/Album1';
import Album2 from '../components/Album2';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Settings from './Settings'
FontAwesome.loadFont();

const styles = StyleSheet.create({
  scrollViewSetting: {
    backgroundColor: 'black',
  },
  screenCover: {
    flex: 1,
  },
  settingIcon: {
    flex: 1,
    marginTop: 55,
    marginLeft: 370,
  },
});

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView vertical={true} style={styles.scrollViewSetting}>
      <View style={styles.screenCover}>
        <StatusBar barStyle={"light-content"} translucent={true} />
        <View>
          <FontAwesome
            name="cog"
            size={24}
            color="#969696"
            style={styles.settingIcon}
            onPress={() => {
              navigation.navigate("Settings");
            }}
          />
        </View>
        <View>
          <Album1 />
          <Album2 />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;