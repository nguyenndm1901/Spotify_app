import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import Settings from "../screens/Settings";
import SearchScreen from "../screens/SearchScreen";

const Stack = createStackNavigator();

const HomeStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SettingsScreen" component={Settings} />
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

export { HomeStackNavigation, SearchStackNavigation };