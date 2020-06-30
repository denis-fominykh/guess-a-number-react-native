import React, { FC } from 'react';
import { View, Text } from 'react-native';

import styles from './NumberContainerStyle';

import { NumberContainerProps } from './NumberContainerInterfaces';

const NumberContainer: FC<NumberContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

export default NumberContainer;
