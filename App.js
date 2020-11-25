import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './src/components/BottomTabNavigation'
import LoginScreen from './src/screens/LoginScreen'
import { View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{marginTop: 50}}>
        <LoginScreen />
      </View>

    );
  }
}

export default App;

{/* <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer> */}
