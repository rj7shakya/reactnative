import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Angular from '../tabs/angular';
import ReactDetail from '../tabs/reactDetail';

const Stack = createStackNavigator();

const AngularStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="list"
        component={Angular}
        options={{headerShown: false}}
      />
      <Stack.Screen name="listDetail" component={ReactDetail} />
    </Stack.Navigator>
  );
};

export default AngularStack;

const styles = StyleSheet.create({});
