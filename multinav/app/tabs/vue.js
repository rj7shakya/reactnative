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
import vueContext from '../data/vueContext';
import Line from '../components/line';
import useAngular from '../data/useAngular';

const Vue = ({navigation}) => {
  const {angularData} = useAngular();
  const {reactD} = useContext(reactContext);
  const {vueD, setVueD} = useContext(vueContext);

  useEffect(() => {
    setVueD([
      ...vueD,
      {
        id: vueD[vueD.length - 1].id + 1,
        data: vueD[Math.floor(Math.random() * vueD.length)].data,
      },
    ]);
  }, []);

  return (
    <View>
      <ScrollView>
        <AppText>Vue data</AppText>
        <Line />
        {vueD.map((data) => (
          <TouchableWithoutFeedback
            key={data.id}
            onPress={() =>
              navigation.navigate('listDetail', {
                id: data.id,
                data: data.data,
                type: 'vue',
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
        <AppText>Angular data</AppText>
        <Line />
        {angularData.map((data) => (
          <AppText key={data.id}>{data.data}</AppText>
        ))}
      </ScrollView>
    </View>
  );
};

export default Vue;

const styles = StyleSheet.create({});
