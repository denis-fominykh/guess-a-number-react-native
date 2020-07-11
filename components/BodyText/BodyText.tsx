import React, { FC } from 'react';
import { Text } from 'react-native';

import styles from './BodyTextStyle';

import { BodyTextProps } from '../../interfaces/IBodyText';

const BodyText: FC<BodyTextProps> = ({ children, style }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

export default BodyText;
