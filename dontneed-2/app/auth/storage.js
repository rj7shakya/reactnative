import {AsyncStorage} from 'react-native';
import JwtDecode from 'jwt-decode';

const key = 'authToken';

const storeToken = async (authToken) => {
  try {
    AsyncStorage.setItem(key, authToken);
  } catch (error) {
    console.log('Error storing the token', error);
  }
};

const getToken = async () => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log('Error getting the token', error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? JwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('Error removing the auth token', error);
  }
};

export default {getToken, getUser, removeToken, storeToken};
