import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

const LoginScreen = () => {
  return (
    <View>
      <Text>image</Text>
      <ImageBackground
        style={styles.background}
        source={require('../assets/background.jpg')}></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: 200,
    height: 200,
  },
});
export default LoginScreen;
