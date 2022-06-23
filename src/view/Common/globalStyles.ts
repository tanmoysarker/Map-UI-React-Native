import {StyleSheet} from "react-native";

const globalStyles = StyleSheet.create({
    containerLight: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: "#FFFFFF",
    },
    containerDark: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: "#000"
    },
    textLight: {
        color: "#002A53",
        fontSize: 20,
        fontWeight: "400",
        padding: 16
    },
    textDark: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "400",
        padding: 16
    }
});

export default globalStyles;
