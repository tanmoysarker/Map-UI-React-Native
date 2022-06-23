
import {SET_APP_THEME, SET_DEVICE_THEME_ENABLED} from "../actions/types";
import {Action} from "../actions/common";

const initialState = {
    theme: "dark",
    deviceThemeEnabled: false
}

export default function reducer(state = initialState, action: Action) {
    switch (action.type) {
        case SET_APP_THEME: {
            return {
                ...state,
                theme: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}

