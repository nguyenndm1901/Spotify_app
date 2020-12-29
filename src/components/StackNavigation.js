import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Settings from "../screens/Settings";
import SearchScreen from "../screens/SearchScreen";
import Profile from "../screens/Profile"
import Premium from '../screens/Premium'
import DailyMix1 from "../components/DailyMix1"
import Album1 from '../components/Album1'
import TopTabNavigation from './TopTabNavigation'

const Stack = createStackNavigator();

const HomeStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="Home"
                component={HomeScreen} />
            <Stack.Screen
                options={{
                    title: 'Cài đặt',
                    headerStyle: { backgroundColor: '#282828' },
                    headerTintColor: 'white',
                    headerTitleStyle: { fontSize: 25, fontFamily: 'Arial' },
                    headerBackTitle: 'Trở về',
                    gestureEnabled: false,
                }}
                name="SettingsScreen"
                component={Settings} />
            <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                    headerBackTitle: ' ',
                    headerTintColor: 'white',
                    gestureEnabled: false,
                }}
                name="Profile" component={DailyMix1} />
            <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                    headerBackTitle: ' ',
                    headerTintColor: 'white',
                    gestureEnabled: false,
                }}
                name="DailyMix1" component={DailyMix1} />
        </Stack.Navigator>
    );
};

const SearchStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
    );
};

const LibraryStacknavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Library" component={TopTabNavigation} />
        </Stack.Navigator>
    );
};

const SpotifyStacknavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Spotify" component={Premium} />
        </Stack.Navigator>
    );
};

export { HomeStackNavigation, SearchStackNavigation, SpotifyStacknavigation, LibraryStacknavigation };