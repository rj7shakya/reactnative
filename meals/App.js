import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {enableScreens} from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigation';

enableScreens();

const App = () => <MealsNavigator />;

const styles = StyleSheet.create({});

export default App;
