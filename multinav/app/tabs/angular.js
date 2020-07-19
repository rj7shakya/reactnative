import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import AppText from '../components/Text';
import reactContext from '../data/reactContext';
import Line from '../components/line';
import useAngular from '../data/useAngular';
import vueContext from '../data/vueContext';

const Angular = ({navigation}) => {
  const {angularData, setAngularData} = useAngular();
  const {reactD} = useContext(reactContext);
  const {vueD} = useContext(vueContext);
  useEffect(() => {
    setAngularData([
      ...angularData,
      {
        id: angularData[angularData.length - 1].id + 1,
        data: angularData[Math.floor(Math.random() * angularData.length)].data,
      },
    ]);
  }, []);

  return (
    <View>
      <ScrollView>
        <AppText>Angular data</AppText>
        <Line />
        {angularData.map((data) => (
          <TouchableWithoutFeedback
            key={data.id}
            onPress={() =>
              navigation.navigate('listDetail', {
                id: data.id,
                data: data.data,
                type: 'angular',
              })
            }>
            <Text style={{textAlign: 'center'}}>{data.data}</Text>
          </TouchableWithoutFeedback>
        ))}
        <Line />
        <Line />
        <Line />
        <AppText>React data</AppText>
        <Line />
        {reactD.map((data) => (
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

export default Angular;

const styles = StyleSheet.create({});
