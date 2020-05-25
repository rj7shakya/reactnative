import React from 'react';
import {Text, Image, View, StyleSheet, Button} from 'react-native';
import Colors from '../constants/colors';

import MainButton from '../components/MainButton';

const GameOverScreen = props => (
  <View style={styles.screen}>
    <Text>The game is over!</Text>
    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/success.png')}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>
        You nedded <Text style={styles.highlight}>{props.roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{props.userNumber}</Text>{' '}
      </Text>
    </View>
    <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  highlight: {
    color: Colors.primary,
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default GameOverScreen;
