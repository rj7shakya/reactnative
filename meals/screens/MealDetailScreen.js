import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import {MEALS} from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');

  const selectedMeals = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      {/* <Text>{props}</Text> */}
      <Button
        title="Go to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeals = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeals.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="rocket"
          onPress={() => {
            console.log('mark as favourite');
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
