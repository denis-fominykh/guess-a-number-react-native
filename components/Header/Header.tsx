import React, { FC } from 'react';
import { View, Text } from 'react-native';

import styles from './HeaderStyle';

import { HeaderProps } from './HeaderInterfaces';

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;
