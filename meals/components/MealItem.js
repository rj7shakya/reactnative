import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const MealItem = props => (
  <View style={styles.mealItem}>
    <TouchableOpacity onPress={props.onSelectMeal}>
      <View>
        <View style={{...styles.mealrow, ...styles.mealHeader}}>
          <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
            <Text style={styles.title} numberOfLines={1}>
              {props.title}
            </Text>
          </ImageBackground>
        </View>
        <View style={{...styles.mealrow, ...styles.mealDetail}}>
          <Text>{props.duration}m</Text>
          <Text>{props.complexity.toUpperCase()}</Text>
          <Text>{props.affordability.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  mealrow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
});

export default MealItem;
