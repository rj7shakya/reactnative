import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen name="Index" component={IndexScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
