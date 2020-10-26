import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigation, SearchStackNavigation } from "./StackNavigation";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
MaterialIcons.loadFont();

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTinColor: '#ffffff',
                inactiveTinColor: '#969696',
                style: { backgroundColor: '#232323' },
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
        </Tab.Navigator>
    );
};

export default TabNavigation;