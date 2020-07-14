/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/components/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AppIcon from './app/components/AppIcon';
import Screen from './app/components/Screen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Cameras', value: 3},
];

const App = () => {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        icon="apps"
        items={categories}
        placeholder="Categories"
      />
      <AppTextInput placeholder="first name" icon="email" />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default App;
