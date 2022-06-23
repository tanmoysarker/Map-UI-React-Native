import {actionCreator} from "./common";
import {SET_APP_THEME, SET_DEVICE_THEME_ENABLED} from "./types";

export const setAppTheme = (theme: String): any => {
    return async (dispatch: any) => {
        dispatch(actionCreator(SET_APP_THEME, theme));
    };
}

export const setDeviceThemeEnabled = (bool: boolean): any => {
    return async (dispatch: any) => {
        dispatch(actionCreator(SET_DEVICE_THEME_ENABLED, bool));
    };
}
