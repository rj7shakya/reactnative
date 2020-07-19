import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Line = () => {
  return <View style={styles.container}></View>;
};

export default Line;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'black',
  },
});
