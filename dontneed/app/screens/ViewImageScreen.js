import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import colors from '../config/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <Icon name="close" size={30} color="white" />
      </View>
      <View style={styles.deleteIcon}>
        <Icon name="trash-o" size={30} color="white" />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  closeIcon: {position: 'absolute', top: 15, left: 15},
  deleteIcon: {position: 'absolute', top: 15, right: 15},
});
export default ViewImageScreen;
