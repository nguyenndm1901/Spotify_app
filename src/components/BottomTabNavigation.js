import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigation, LibraryStacknavigation, SearchStackNavigation, SpotifyStacknavigation } from "./StackNavigation";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
MaterialIcons.loadFont();
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#ffffff',
                inactiveTintColor: '#707070',
                style: { backgroundColor: '#232323', height: 80 },
                labelStyle: {fontSize: 15},
                
            }}>
            <Tab.Screen
                name="Home"
                component={HomeStackNavigation}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="home" size={26} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchStackNavigation}
                options={{
                    tabBarLabel: 'Tìm kiếm',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="search" size={26} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Library"
                component={LibraryStacknavigation}
                options={{
                    tabBarLabel: 'Thư viện',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="book" size={26} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Spotify"
                component={SpotifyStacknavigation}
                options={{
                    tabBarLabel: 'Premium',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="spotify" size={26} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigation;