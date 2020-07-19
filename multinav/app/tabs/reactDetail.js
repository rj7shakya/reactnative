import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import AppText from '../components/Text';
import {Input} from 'react-native-elements';
import reactContext from '../data/reactContext';

const ReactDetail = ({route, navigation}) => {
  const [toEdit, setToEdit] = useState(false);
  const [text, setText] = useState(route.params.data);
  const {reactD, setReactD} = useContext(reactContext);

  const update = (id, data) => {
    console.log(id, data);
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
