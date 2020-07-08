import React, { FC } from 'react';
import { View, Text, Button } from 'react-native';

import styles from './GameOverScreenStyle';

import { GameOverScreenProps } from './GameOverScreenInterfaces';

const GameOverScreen: FC<GameOverScreenProps> = ({
  rounds,
  userNumber,
  onRestart,
}) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is over!</Text>
      <Text>Rounds: {rounds}</Text>
      <Text>The number was: {userNumber}</Text>
      <Button title="NEW GAME" onPress={onRestart} />
    </View>
  );
};

export default GameOverScreen;
