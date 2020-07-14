import React from 'react';
import {StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';
import AppTextInput from '../AppTextInput';

const AppFormField = ({name, width, ...otherProps}) => {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({});
export default AppFormField;
