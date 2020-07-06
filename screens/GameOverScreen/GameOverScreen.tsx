import React, { FC } from 'react';
import { View, Text } from 'react-native';

import styles from './GameOverScreenStyle';

import { GameOverScreenProps } from './GameOverScreenInterfaces';

const GameOverScreen: FC<GameOverScreenProps> = ({ rounds }) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over Screen</Text>
      <Text>Rounds: {rounds}</Text>
    </View>
  );
};

export default GameOverScreen;
