/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { NavigationContainer } from '@react-navigation/native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import ThemeProvider from "./src/navigation/ThemeProvider";

import { persistor, store } from "./src/store/store";
import TabNavigation from "./src/navigation/TabNavigation";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <NavigationContainer>
              <TabNavigation />
            </NavigationContainer>
          </ThemeProvider>
        </PersistGate>
      </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
