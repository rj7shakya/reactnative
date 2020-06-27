/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar,
} from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';

const App = () => {
  return (
    <View>
      <WelcomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
