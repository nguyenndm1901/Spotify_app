import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import Settings from "../screens/Settings";
import SearchScreen from "../screens/SearchScreen";
import LibraryScreen from "../screens/LibraryScreen"

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
                }}
                name="SettingsScreen" 
                component={Settings} />
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
            <Stack.Screen name="Library" component={LibraryScreen} />
        </Stack.Navigator>
    );
};

export { HomeStackNavigation, SearchStackNavigation, LibraryStacknavigation };