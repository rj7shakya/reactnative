import React from 'react';
import {Text, Image, View, StyleSheet, Button} from 'react-native';

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
    <Text>Number of rounds:{props.roundsNumber} </Text>
    <Text>Number was :{props.userNumber} </Text>
    <Button title="NEW GAME" onPress={props.onRestart} />
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
});

export default GameOverScreen;
