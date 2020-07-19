import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto';

import Angular from './app/tabs/angular';
import Vue from './app/tabs/vue';
import reactContext from './app/data/reactContext';
import ReactStack from './app/stacks/ReactStack';

const Tab = createBottomTabNavigator();
const reactData = [
  {id: 1, data: 'useState'},
  {id: 2, data: 'useEffect'},
  {id: 3, data: 'useContext'},
  {id: 4, data: 'useReducer'},
  {id: 5, data: 'useCustom'},
];

const App = () => {
  const [reactD, setReactD] = useState(reactData);
  return (
    <reactContext.Provider value={{reactD, setReactD}}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Angular"
            component={Angular}
            options={{
              tabBarIcon: () => (
                <Icon name="angularjs" color="#b52e31" size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="React"
            children={ReactStack}
            options={{
              tabBarIcon: () => <Icon name="react" color="#00d8ff" size={20} />,
            }}
          />
          <Tab.Screen
            name="Vue"
            component={Vue}
            options={{
              tabBarIcon: () => <Icon name="vuejs" color="#42b883" size={20} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </reactContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
