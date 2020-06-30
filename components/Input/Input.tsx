import React, { FC } from 'react';
import { TextInput } from 'react-native';

import styles from './InputStyle';

import { InputProps } from './InputInterfaces';

const Input: FC<InputProps> = ({
  inputStyle,
  blurOnSubmit,
  autoCapitalize,
  autoCorrect,
  keyboardType,
  maxLength,
  onChangeText,
  value,
}) => {
  return (
    <TextInput
      style={{ ...styles.input, ...inputStyle }}
      blurOnSubmit={blurOnSubmit}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      keyboardType={keyboardType}
      maxLength={maxLength}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default Input;
