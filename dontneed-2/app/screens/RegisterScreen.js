import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from '../components/forms';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';
import ActivityIndicator from '../components/ActivityIndicator';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const RegisterScreen = () => {
  const {logIn} = useAuth();
  const registerApi = useApi(authApi.register);
  const loginApi = useApi(authApi.login);
  const [registerFailed, setregisterFailed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async ({name, email, password}) => {
    const result = await registerApi.request(name, email, password);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError('Unexpected error');
      }
      return setregisterFailed(true);
    }
    setregisterFailed(false);
    const {data: authToken} = await loginApi.request(email, password);
    logIn(authToken);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{name: '', email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          <ErrorMessage error={error} visible={registerFailed} />
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
