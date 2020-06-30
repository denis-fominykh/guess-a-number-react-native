import React, { FC, useState } from 'react';
import { View, Text, Button } from 'react-native';

import styles from './GameScreenStyle';

import { GameScreenProps } from './GameScreenInterfaces';
import { generateRandomBetween } from '../../services/generateRandomBetween';
import NumberContainer from '../../components/NumberContainer';
import Card from '../../components/Card';

const GameScreen: FC<GameScreenProps> = ({ userChoice }) => {
  const [currentGuess, setCurrentGuess] = useState<number>(
    generateRandomBetween(1, 100, userChoice),
  );

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => {}} />
        <Button title="GREATER" onPress={() => {}} />
      </Card>
    </View>
  );
};

export default GameScreen;
