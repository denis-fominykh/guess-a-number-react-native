import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { HeaderProps } from './HeaderInterfaces';
import Colors from '../../constants/colors';

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
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
  headerTitle: {
    color: 'black',
    fontSize: 18,
  },
});

export default Header;
