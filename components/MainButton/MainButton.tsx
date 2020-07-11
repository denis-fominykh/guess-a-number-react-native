import React, { FC } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import styles from './MainButtonStyle';
import { MainButtonProps } from '../../interfaces/IMainButton';

const MainButton: FC<MainButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;
