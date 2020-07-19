import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppText from '../components/Text';
import reactContext from '../data/reactContext';
import Line from '../components/line';

const Angular = () => {
  const {reactD, setReactD} = useContext(reactContext);
  return (
    <View>
      <AppText>Angular data</AppText>
      <Line />
      <Line />
      <Line />
      <AppText>React data</AppText>
      <Line />
      {reactD.map((data) => (
        <AppText key={data.id}>{data.data}</AppText>
      ))}
    </View>
  );
};

export default Angular;

const styles = StyleSheet.create({});
