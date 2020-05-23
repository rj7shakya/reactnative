import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Card = props => (
  <View style={{...styles.card, ...props.style}}>{props.children}</View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
