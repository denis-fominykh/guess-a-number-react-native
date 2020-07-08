import React, { FC, useState, useRef, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';

import styles from './GameScreenStyle';

import { GameScreenProps } from './GameScreenInterfaces';
import { generateRandomBetween } from '../../services/generateRandomBetween';
import BodyText from '../../components/BodyText';
import NumberContainer from '../../components/NumberContainer';
import Card from '../../components/Card';

const GameScreen: FC<GameScreenProps> = ({ userChoice, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState<number>(
    generateRandomBetween(1, 100, userChoice),
  );

  const [rounds, setRounds] = useState<number>(0);
  const currentLow = useRef<number>(1);
  const currentHigh = useRef<number>(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === 'lover' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!!!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lover') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setRounds((currentRounds: number): number => currentRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <BodyText>Opponent's Guess</BodyText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => nextGuessHandler('lover')} />
        <Button title="GREATER" onPress={() => nextGuessHandler('greater')} />
      </Card>
    </View>
  );
};

export default GameScreen;
