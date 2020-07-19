import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Reactt from '../tabs/react';
import Angular from '../tabs/angular';
import ReactDetail from '../tabs/reactDetail';

const Stack = createStackNavigator();

const ReactStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="list"
        component={Reactt}
        options={{headerShown: false}}
      />
      <Stack.Screen name="listDetail" component={ReactDetail} />
    </Stack.Navigator>
  );
};

export default ReactStack;

const styles = StyleSheet.create({});
