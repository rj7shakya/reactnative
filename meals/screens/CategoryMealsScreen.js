import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const CategoryMealsScreen = props => (
  <View style={styles.screen}>
    <Text>CategoryMealsScreen</Text>
    <Button
      title="Go to meals detail"
      onPress={() => {
        props.navigation.navigate('MealDetail');
      }}
    />
    <Button
      title="Go back"
      onPress={() => {
        props.navigation.pop();
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
