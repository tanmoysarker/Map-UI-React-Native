import React from 'react';
import {connect} from "react-redux";
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import globalStyles from "../Common/globalStyles";

const DevicesScreen = (props: DevicesScreenProps) => {
    const { theme } = props.navigation

    return (
        <SafeAreaView style={theme === "light" ? globalStyles.containerLight : globalStyles.containerDark}>
            <StatusBar barStyle={theme === "light" ? "dark-content" : "light-content"} />
            <Text
                style={theme === "light" ? globalStyles.textLight : globalStyles.textDark}
            >
                Devices
            </Text>
        </SafeAreaView>
    );
};

type DevicesScreenProps = {
    navigation: {
        theme: String
    }
}

const mapStateToProps = (state: any) => ({
    navigation: state.navigation
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(DevicesScreen);

const styles = StyleSheet.create({

});
