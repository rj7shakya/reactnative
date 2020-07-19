import React from 'react';
import {StyleSheet, Text} from 'react-native';

const AppText = (props) => {
  return <Text style={styles.container}>{props.children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    textAlign: 'center',
    paddingVertical: 5,
    fontFamily: 'Roboto',
    fontSize: 20,
  },
});
