import React, {useState} from 'react';
import {connect} from "react-redux";
import {StyleSheet, Text, View, Switch, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native';
import {setAppTheme} from "../../actions/navigation";
import globalStyles from "../Common/globalStyles";


const SettingsScreen = (props: SettingsScreenProps) =>  {
    const { theme } = props.navigation

    return (
        <SafeAreaView style={theme === "light" ? globalStyles.containerLight : globalStyles.containerDark}>
            <StatusBar barStyle={theme === "light" ? "dark-content" : "light-content"} />
            <Text
                style={theme === "light" ? globalStyles.textLight : globalStyles.textDark}
            >
                Settings
            </Text>
            <View style={theme === "light" ? styles.settingsListContainer : styles.settingsListContainerDark}>
                
               
                    <View style={styles.settingsListItem}>
                        <Text style={theme === "light" ? styles.settingsListItemText : styles.settingsListItemTextDark}>
                            Dark theme
                        </Text>
                        <Switch
                            value={theme === "dark"}
                            trackColor={{true: "#7CE7D3", false: "#EEEFF4"}}
                            onValueChange={(value) => {
                                const newTheme = value ? "dark" : "light"
                                props.setAppTheme(newTheme);
                            }}
                        />
                    </View>

            </View>
        </SafeAreaView>
    );
};

type SettingsScreenProps = {
    navigation: {
        theme: String
    },
    setAppTheme(theme: String): any,
}

const mapStateToProps = (state: any) => ({
    navigation: state.navigation
});

const mapDispatchToProps = {
    setAppTheme,
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);

const styles = StyleSheet.create({
    settingsListContainer: {
        alignItems: "center",
        width: "93%",
        padding: 16,
        borderRadius: 8,
        backgroundColor: "#FFFFFF",
        minHeight: 120
    },
    settingsListContainerDark: {
        alignItems: "center",
        width: "93%",
        padding: 16,
        borderRadius: 8,
        backgroundColor: "#24333D",
        minHeight: 120
    },
    settingsListItem: {
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    settingsListItemText: {
        fontWeight: "400",
        fontSize: 17,
        lineHeight: 22,
        color: "#002A53"
    },
    settingsListItemTextDark: {
        fontWeight: "400",
        fontSize: 17,
        lineHeight: 22,
        color: "#FFFFFF"
    }
});
