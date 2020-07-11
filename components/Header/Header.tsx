import React, { FC } from 'react';
import { View } from 'react-native';

import styles from './HeaderStyle';

import { HeaderProps } from '../../interfaces/IHeader';
import TitleText from '../TitleText';

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText>{title}</TitleText>
    </View>
  );
};

export default Header;
