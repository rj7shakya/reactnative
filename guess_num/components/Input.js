import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const Input = props => (
  <TextInput {...props} style={{...styles.input, ...props.style}} />
);

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
