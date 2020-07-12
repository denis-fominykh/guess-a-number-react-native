import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import { MainButtonProps } from '../interfaces/IMainButton';
import Colors from '../constants/colors';

const MainButton: FC<MainButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 7,
  },
  buttonText: {
    color: Colors.accent,
    fontFamily: 'open-sans',
    fontSize: 18,
  },
});

export default MainButton;
