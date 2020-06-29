import React, { FC } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { InputProps } from './InputInterfaces';

const Input: FC<InputProps> = ({
  inputStyle,
  blurOnSubmit,
  autoCapitalize,
  autoCorrect,
  keyboardType,
  maxLength,
}) => {
  return (
    <TextInput
      style={{ ...styles.input, ...inputStyle }}
      blurOnSubmit={blurOnSubmit}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      keyboardType={keyboardType}
      maxLength={maxLength}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
