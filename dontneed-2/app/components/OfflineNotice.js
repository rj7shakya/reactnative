import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';
import {useNetInfo} from '@react-native-community/netinfo';

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  }
  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});
