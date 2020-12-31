import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Settings from "../screens/Settings";
import SearchScreen from "../screens/SearchScreen";
import Profile from "../screens/Profile"
import Premium from '../screens/Premium'
import DailyMix1 from "../components/DailyMix1"
import PlayingScreen from '../screens/PlayingScreen'
import TopTabNavigation from './TopTabNavigation'

import birds from '../screens/Players/DailyMix1/birds'
import happier from '../screens/Players/DailyMix1/happier'
import safeandsound from '../screens/Players/DailyMix1/safe&sound'
import perfect from '../screens/Players/DailyMix1/perfect'
import stiches from '../screens/Players/DailyMix1/stiches'

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
                name="Profile" component={Profile} />
                <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                    headerBackTitle: ' ',
                    headerTintColor: 'white',
                    gestureEnabled: false,
                }}
                name="DailyMix1" component={DailyMix1} />
            <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                    headerBackTitle: ' ',
                    headerTintColor: 'white',
                    gestureEnabled: false,
                }}
                name="NowPlaying" component={PlayingScreen} />
                <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                    headerBackTitle: ' ',
                    headerTintColor: 'white',
                    gestureEnabled: false,
                }}
                name="birds" component={birds} />
                <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                    headerBackTitle: ' ',
                    headerTintColor: 'white',
                    gestureEnabled: false,
                }}
                name="happier" component={happier} />
                <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                    headerBackTitle: ' ',
                    headerTintColor: 'white',
                    gestureEnabled: false,
                }}
                name="safeandsound" component={safeandsound} />
                <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                    headerBackTitle: ' ',
                    headerTintColor: 'white',
                    gestureEnabled: false,
                }}
                name="perfect" component={perfect} />
                <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                    headerBackTitle: ' ',
                    headerTintColor: 'white',
                    gestureEnabled: false,
                }}
                name="stiches" component={stiches} />
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