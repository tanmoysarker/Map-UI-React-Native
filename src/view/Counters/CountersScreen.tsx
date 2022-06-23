import React from 'react';
import {connect} from "react-redux";
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import globalStyles from "../Common/globalStyles";

const CountersScreen = (props: CountersScreenProps) => {
    const { theme } = props.navigation

    return (
        <SafeAreaView style={theme === "light" ? globalStyles.containerLight : globalStyles.containerDark}>
            <StatusBar barStyle={theme === "light" ? "dark-content" : "light-content"} />
            <Text
                style={theme === "light" ? globalStyles.textLight : globalStyles.textDark}
            >
                Counters
            </Text>
        </SafeAreaView>
    );
};

type CountersScreenProps = {
    navigation: {
        theme: String
    }
}

const mapStateToProps = (state: any) => ({
    navigation: state.navigation
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CountersScreen);

const styles = StyleSheet.create({

});
