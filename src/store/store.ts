import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from 'redux-persist';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from "../reducers"

const persistConfig = {
    key: "root",
    timeout: 10000,
    storage: AsyncStorage,
    whitelist: [
        "navigation"
    ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
    thunk
];

if (__DEV__) {
    const createDebugger = require("redux-flipper").default;
    middlewares.push(createDebugger());
}

export const store = createStore(
    persistedReducer,
    applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);



