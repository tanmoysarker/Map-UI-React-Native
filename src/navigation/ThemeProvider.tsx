import React, {useEffect} from 'react';
import {connect} from "react-redux";
import { Appearance } from 'react-native';
import {setAppTheme} from "../actions/navigation";

const ThemeProvider = (props: ThemeProviderProps) => {
    const colorScheme = Appearance.getColorScheme();
    const { deviceThemeEnabled } = props.navigation;

    useEffect(() => {
        if (deviceThemeEnabled) {
            const newColor = colorScheme === "light" ? "light" : "dark";
            props.setAppTheme(newColor);
        }
    }, [colorScheme, deviceThemeEnabled]);

    return (
        <>{props.children}</>
    )
}

type ThemeProviderProps = {
    navigation: {
        deviceThemeEnabled: boolean
    },
    setAppTheme(theme: String): any
    children: JSX.Element
}

const mapStateToProps = (state: any) => ({
    navigation: state.navigation,
});

const mapDispatchToProps = {
    setAppTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeProvider);
