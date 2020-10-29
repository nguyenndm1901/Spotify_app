import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { Playlists, Albums, Artists, Episodes, Downloads, Shows } from '../screens/LibraryScreen'

const Tab = createMaterialTopTabNavigator();

const MusicTab = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#ffffff',
                inactiveTintColor: '#7f7f7f',
                style: { backgroundColor: 'black', height: 60, paddingTop: 15 },
                labelStyle: { fontSize: 20, fontWeight: 'bold' },
                indicatorStyle: {
                    backgroundColor: '#1EB450',
                    borderRadius: 10,
                    width: 75,
                    left: '8%'
                }
            }}>
            <Tab.Screen
                name="Playlists"
                component={Playlists}
                options={{
                    tabBarLabel: 'Playlists',
                }}
            />
            <Tab.Screen
                name="Artists"
                component={Artists}
                options={{
                    tabBarLabel: 'Artists',
                }}
            />
            <Tab.Screen
                name="Albums"
                component={Albums}
                options={{
                    tabBarLabel: 'Albums',
                }}
            />
        </Tab.Navigator>
    );
}

const PodcastsTab = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#ffffff',
                inactiveTintColor: '#7f7f7f',
                style: { backgroundColor: 'black', height: 60, paddingTop: 15 },
                labelStyle: { fontSize: 15, fontWeight: 'bold' },
                indicatorStyle: {
                    backgroundColor: '#1EB450',
                    borderRadius: 10,
                    width: 75,
                    left: '8%'
                }
            }}>
            <Tab.Screen
                name="Episodes"
                component={Episodes}
                options={{
                    tabBarLabel: 'Episodes',
                }}
            />
            <Tab.Screen
                name="Downloads"
                component={Downloads}
                options={{
                    tabBarLabel: 'Downloads',
                }}
            />
            <Tab.Screen
                name="Shows"
                component={Shows}
                options={{
                    tabBarLabel: 'Shows',
                }}
            />
        </Tab.Navigator>
    );
}

const TopTabNavigation = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#ffffff',
                inactiveTintColor: '#7f7f7f',
                style: { backgroundColor: 'black', height: 100, paddingTop: 40 },
                labelStyle: { fontSize: 35, fontWeight: 'bold' },
                indicatorStyle: {
                    backgroundColor: '#1EB450',
                    borderRadius: 10,
                    width: 150,
                    left: '6.5%'
                }
            }}>
            <Tab.Screen
                name="Music"
                component={MusicTab}
                options={{
                    tabBarLabel: 'Music',
                }}
            />
            <Tab.Screen
                name="Podcasts"
                component={PodcastsTab}
                options={{
                    tabBarLabel: 'Podcasts',
                }}
            />
        </Tab.Navigator>
    );
}

export default TopTabNavigation