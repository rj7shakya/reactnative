import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import AppText from '../components/Text';
import reactContext from '../data/reactContext';
import Line from '../components/line';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import useAngular from '../data/useAngular';
import vueContext from '../data/vueContext';

const Reactt = ({navigation}) => {
  const {reactD, setReactD} = useContext(reactContext);
  const {angularData} = useAngular();
  const {vueD} = useContext(vueContext);
  useEffect(() => {
    setReactD([
      ...reactD,
      {
        id: reactD[reactD.length - 1].id + 1,
        data: reactD[Math.floor(Math.random() * reactD.length)].data,
      },
    ]);
  }, []);

  return (
    <View>
      <ScrollView>
        <AppText>React data</AppText>
        <Line />
        {reactD.map((data) => (
          <TouchableWithoutFeedback
            key={data.id}
            onPress={() =>
              navigation.navigate('listDetail', {
                id: data.id,
                data: data.data,
                type: 'react',
              })
            }>
            <Text style={{textAlign: 'center'}}>{data.data}</Text>
          </TouchableWithoutFeedback>
        ))}
        <Line />
        <Line />
        <Line />
        <AppText>Angular data</AppText>
        <Line />
        {angularData.map((data) => (
          <AppText key={data.id}>{data.data}</AppText>
        ))}
        <Line />
        <AppText>Vue data</AppText>
        <Line />
        {vueD.map((data) => (
          <AppText key={data.id}>{data.data}</AppText>
        ))}
      </ScrollView>
    </View>
  );
};

export default Reactt;

const styles = StyleSheet.create({});
