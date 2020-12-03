import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './src/components/BottomTabNavigation'

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <BottomTabNavigation />
      </NavigationContainer>

    );
  }
}

export default App;

{/* <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer> */}
