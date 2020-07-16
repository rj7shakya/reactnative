import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';

import colors from '../config/colors';

const ImageInput = ({imageUri, onChangeImage}) => {
  const selectImage = async () => {
    const options = {
      quality: 0.5,
      mediaType: 'photo',
    };
    try {
      ImagePicker.launchImageLibrary(options, (response) => {
        if (response.uri) {
          onChangeImage(response.uri);
        }
      });
    } catch (error) {
      console.log('error reading image', error);
    }
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('Delete', 'Are you sure u want to delete?', [
        {text: 'Yes', onPress: () => onChangeImage(null)},
        {text: 'No'},
      ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <Icon color={colors.medium} name="camera" size={40} />}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
