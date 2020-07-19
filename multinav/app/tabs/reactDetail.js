import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import AppText from '../components/Text';
import {Input} from 'react-native-elements';
import reactContext from '../data/reactContext';
import vueContext from '../data/vueContext';

const ReactDetail = ({route, navigation}) => {
  let data = null;
  let setData = null;
  const [toEdit, setToEdit] = useState(false);
  const [text, setText] = useState(route.params.data);
  if (route.params.type === 'angular') {
    const {angularData, setAngularData} = useAngular();
    data = angularData;
    setData = setAngularData;
  } else if (route.params.type === 'react') {
    const {reactD, setReactD} = useContext(reactContext);
    data = reactD;
    setData = setReactD;
  } else if (route.params.type === 'vue') {
    const {vueD, setVueD} = useContext(vueContext);
    data = vueD;
    setData = setVueD;
  }

  const update = (uid, text) => {
    let newList = data.filter((data) => data.id !== uid);
    newList = [...newList, {id: uid, data: text}];
    newList.sort((a, b) => (a.id > b.id ? 1 : -1));
    console.log('newList', newList);
    setData(newList);

    navigation.navigate('list');
  };

  return (
    <View>
      {!toEdit ? (
        <>
          <AppText>{route.params.data}</AppText>
          <Button title="Edit" onPress={() => setToEdit(true)} />
        </>
      ) : (
        <>
          <Input
            onChangeText={(text) => setText(text)}
            placeholder="data name"
            defaultValue={route.params.data}
          />
          <View style={{marginBottom: 5}}>
            <Button
              title="Update"
              onPress={() => update(route.params.id, text)}
            />
          </View>
          <Button title="Cancel" onPress={() => setToEdit(false)} />
        </>
      )}
    </View>
  );
};

export default ReactDetail;

const styles = StyleSheet.create({});
