import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';

const WelcomeScreen = () => {
  return (
    <View>
      <ImageBackground
        style={styles.background}
        source={require('../assets/background.jpg')}>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
      </ImageBackground>
      {/* <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
});
export default WelcomeScreen;
