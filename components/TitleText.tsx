import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

import { TitleTextProps } from '../interfaces/ITitleText';

const TitleText: FC<TitleTextProps> = ({ children, style }) => {
  return <Text style={{ ...styles.title, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
});

export default TitleText;
