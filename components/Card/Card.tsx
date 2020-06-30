import React, { FC } from 'react';
import { View } from 'react-native';

import styles from './CardStyle';

import { CardProps } from './CardInterfaces';

const Card: FC<CardProps> = ({ children, containerStyle }) => {
  return <View style={{ ...styles.card, ...containerStyle }}>{children}</View>;
};

export default Card;
