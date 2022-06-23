import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import {connect} from "react-redux";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "../view/Home/HomeScreen";
import SettingsScreen from "../view/Settings/SettingsScreen";
import DevicesScreen from "../view/Devices/DevicesScreen";
import RoomsScreen from "../view/Rooms/RoomsScreen";
import CountersScreen from "../view/Counters/CountersScreen";
import {COUNTERS_SCREEN, DEVICES_SCREEN, HOME_SCREEN, ROOMS_SCREEN, SETTINGS_SCREEN} from "./routes";

import HomeLogoLight from "../assets/navigation/light/home_active_light.svg";
import DevicesLogoLight from "../assets/navigation/light/devices_active_light.svg";
import RoomsLogoLight from "../assets/navigation/light/rooms_active_light.svg";
import CountersLogoLight from "../assets/navigation/light/counters_active_light.svg";
import SettingsLogoLight from "../assets/navigation/light/settings_active_light.svg";

import HomeLogoDark from "../assets/navigation/dark/home_active_dark.svg";
import DevicesLogoDark from "../assets/navigation/dark/devices_active_dark.svg";
import RoomsLogoDark from "../assets/navigation/dark/rooms_active_dark.svg";
import CountersLogoDark from "../assets/navigation/dark/counters_active_dark.svg";
import SettingsLogoDark from "../assets/navigation/dark/settings_active_dark.svg";

import HomeLogoDefault from "../assets/navigation/Home_inactive.svg";
import DevicesLogoDefault from "../assets/navigation/Controls_inactive.svg";
import RoomsLogoDefault from "../assets/navigation/Room_inactive.svg";
import CountersLogoDefault from "../assets/navigation/Counters_inactive.svg";
import SettingsLogoDefault from "../assets/navigation/Settings_inactive.svg";

import Icon from 'react-native-vector-icons/Feather';
import IconFirst from 'react-native-vector-icons/Entypo';
import IconSecond from 'react-native-vector-icons/FontAwesome';
import IconFourth from 'react-native-vector-icons/SimpleLineIcons';
import IconFifth from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const getRouteLabel = (routeName: String, theme: String, focused: boolean): JSX.Element | null => {
    const getLabelString = (routeName: String): String => {
        switch (routeName) {
            case HOME_SCREEN:
                return "Home";
            case DEVICES_SCREEN:
                return "Devices";
            case ROOMS_SCREEN:
                return "Rooms";
            case COUNTERS_SCREEN:
                return "Counters";
            case SETTINGS_SCREEN:
                return "Settings";
            default:
                return "";
        }
    }

    if (focused) {
        return (
            <Text
                style={
                    focused ?
                        theme === "light" ?
                            styles.tabButtonTextActiveLight :
                            styles.tabButtonTextActiveDark :
                        styles.tabButtonTextInactive
                }
            >
                {getLabelString(routeName)}
            </Text>
        );
    } else {
        return null;
    }

}

const getTabBarIcon = (routeName: String, theme: String, focused: boolean): JSX.Element => {
    switch (routeName) {
        case HOME_SCREEN: {
            return (
                <View style={styles.tabButton}>
                    { theme === "light" ?
                        <IconFirst name="compass" size={25} color="#000"/>
                        : <IconFirst name="compass" size={25} color="#FFFFFF"/> 
                    } 
                </View>
            );
        }
        case DEVICES_SCREEN: {
            return (
                <View style={styles.tabButton}>
                    {theme === "light" ?
                            <IconSecond name="map" size={25} color="#000"/> 
                            : <IconSecond name="map" size={25} color="#FFFFFF"/> 
                    }
                </View>
            );
        }
        case ROOMS_SCREEN: {
            return (
                <View style={styles.tabButton}>
                    {theme === "light" ?
                            <RoomsLogoLight /> : <RoomsLogoDark /> 
                    }
                </View>
            );
        }
        case COUNTERS_SCREEN: {
            return (
                <View style={styles.tabButton}>
                    {theme === "light" ?
                        <IconFourth name="bell" size={25} color="#000"/> 
                        : <IconFourth name="bell" size={25} color="#FFFFFF"/> 
                    }
                </View>
            );
        }
        case SETTINGS_SCREEN: {
            return (
                <View style={styles.tabButton}>
                    {theme === "light" ?
                         <IconFifth name="md-person-outline" size={25} color="#000"/> 
                         : <IconFifth name="md-person-outline" size={25} color="#FFFFFF"/> 
                    }
                </View>
            );
        }
        default: {
            return <></>;
        }
    }
}

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
        style={{
            top: -20,
            justifyContent: 'center',
            alignItems: 'center',
            // ...styles.shadow
        }}
        onPress={onPress}>
            <View style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: '#FF3141'
            }}>
                {children}
            </View>
    </TouchableOpacity>
)


const TabNavigation = (props: TabNavigationProps) => {
    const { theme } = props.navigation;
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {

                    return getTabBarIcon(route.name, theme, focused);
                },
                tabBarActiveTintColor: "#002A53",
                tabBarInactiveTintColor: "#949BB5",
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: theme === "light" ? "#FFFFFF" : "#000",
                    borderTopWidth: 1,
                    borderTopColor: theme === "light" ? "#D4D8E3" : "rgba(84, 84, 88, 0.65)"
                }

            })}
        >
            <Tab.Screen name={HOME_SCREEN} component={HomeScreen} />
            <Tab.Screen name={DEVICES_SCREEN} component={DevicesScreen} />
            <Tab.Screen name={ROOMS_SCREEN} component={RoomsScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Icon name="plus" size={30} color="#FFFFFF"/>

                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props}/>
                    )
                }}
            />
            <Tab.Screen name={COUNTERS_SCREEN} component={CountersScreen} />
            <Tab.Screen name={SETTINGS_SCREEN} component={SettingsScreen} />
        </Tab.Navigator>
    );
}

type TabNavigationProps = {
    navigation: {
        theme: String
    }
}

const mapStateToProps = (state: any) => ({
    navigation: state.navigation
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigation);

const styles = StyleSheet.create({
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabButtonTextInactive: {},
    tabButtonTextActiveLight: {
        color: "#002A53",
        fontWeight: "500",
        fontSize: 10,
        lineHeight: 12,
        textAlign: "center",
    },
    tabButtonTextActiveDark: {
        color: "#FFFFFF",
        fontWeight: "500",
        fontSize: 10,
        lineHeight: 12,
        textAlign: "center",
    },
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});
