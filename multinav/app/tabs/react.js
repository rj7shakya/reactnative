import React, {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import AppText from '../components/Text';
import reactContext from '../data/reactContext';
import Line from '../components/line';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Reactt = ({navigation}) => {
  const {reactD, setReactD} = useContext(reactContext);
  useEffect(() => {
    setReactD([
      ...reactD,
      {
        id: reactD[reactD.length - 1].id + 2,
        data: reactD[Math.floor(Math.random() * reactD.length)].data,
      },
    ]);
    console.log(reactD);
  }, []);

  return (
    <View>
      <AppText>React data</AppText>
      <Line />
      {reactD.map((data) => (
        <TouchableWithoutFeedback
          key={data.id}
          onPress={() => navigation.navigate('listDetail', data)}>
          <AppText>{data.data}</AppText>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

export default Reactt;

const styles = StyleSheet.create({});
