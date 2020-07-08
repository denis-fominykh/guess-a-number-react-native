import React, { FC } from 'react';
import { Text } from 'react-native';

import styles from './TitleTextStyle';

import { TitleTextProps } from './TitleTextInterfaces';

const TitleText: FC<TitleTextProps> = ({ children, style }) => {
  return <Text style={{ ...styles.title, ...style }}>{children}</Text>;
};

export default TitleText;
