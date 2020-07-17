import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import ListingEditScreen from './app/screens/ListingEditScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';

const App = () => {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
