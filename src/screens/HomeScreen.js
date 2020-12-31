import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import Album1 from '../components/Album1';
import Album2 from '../components/Album2';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView vertical={true} style={styles.scrollViewSetting}>
      <LinearGradient
        colors={['#783C50', 'black']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 1, y: 0.5 }}
      >
        <View style={styles.screenCover}>
          <StatusBar barStyle={"light-content"} translucent={true} backgroundColor='transparent' />
          <View>
            <FontAwesome
              name="cog"
              size={24}
              color="#969696"
              style={styles.settingIcon}
              onPress={() => {
                navigation.navigate("SettingsScreen");
              }}
            />
          </View>
          <View>
            <Album1 navigation={navigation}/>
            <Album2 />
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default HomeScreen;
