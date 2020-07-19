import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto';

import Vue from './app/tabs/vue';
import reactContext from './app/data/reactContext';
import ReactStack from './app/stacks/ReactStack';
import AngularStack from './app/stacks/AngularStack';
import vueContext from './app/data/vueContext';

const Tab = createBottomTabNavigator();
const reactData = [
  {id: 1, data: 'useState'},
  {id: 2, data: 'useEffect'},
  {id: 3, data: 'useContext'},
  {id: 4, data: 'useReducer'},
];
const vueData = [
  {id: 1, data: 'v-html'},
  {id: 2, data: 'v-bind'},
  {id: 3, data: 'vuex'},
  {id: 4, data: 'nuxt'},
];

const App = () => {
  const [reactD, setReactD] = useState(reactData);
  const [vueD, setVueD] = useState(vueData);
  return (
    <reactContext.Provider value={{reactD, setReactD}}>
      <vueContext.Provider value={{vueD, setVueD}}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Angular"
              component={AngularStack}
              options={{
                tabBarIcon: () => (
                  <Icon name="angularjs" color="#b52e31" size={20} />
                ),
              }}
            />
            <Tab.Screen
              name="React"
              component={ReactStack}
              options={{
                tabBarIcon: () => (
                  <Icon name="react" color="#00d8ff" size={20} />
                ),
              }}
            />
            <Tab.Screen
              name="Vue"
              component={Vue}
              options={{
                tabBarIcon: () => (
                  <Icon name="vuejs" color="#42b883" size={20} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </vueContext.Provider>
    </reactContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
