import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ReactDetail from '../tabs/reactDetail';
import Vue from '../tabs/vue';

const Stack = createStackNavigator();

const ReactStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="list"
        component={Vue}
        options={{headerShown: false}}
      />
      <Stack.Screen name="listDetail" component={ReactDetail} />
    </Stack.Navigator>
  );
};

export default ReactStack;

const styles = StyleSheet.create({});
