import React, { FC } from 'react';
import { View } from 'react-native';

import styles from './CardStyle';

import { CardProps } from './CardInterfaces';

const Card: FC<CardProps> = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

export default Card;
