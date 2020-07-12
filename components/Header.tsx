import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { HeaderProps } from '../interfaces/IHeader';
import TitleText from './TitleText';
import Colors from '../constants/colors';

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
