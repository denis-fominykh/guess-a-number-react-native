import React, { FC, useState, useRef, useEffect } from 'react';
import { View, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './GameScreenStyle';

import { GameScreenProps } from '../../interfaces/IGameScreen';
import { generateRandomBetween } from '../../services/generateRandomBetween';
import BodyText from '../../components/BodyText';
import NumberContainer from '../../components/NumberContainer';
import Card from '../../components/Card';
import MainButton from '../../components/MainButton';
import ListItem from '../../components/ListItem';

const GameScreen: FC<GameScreenProps> = ({ userChoice, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [pastGuesses, setPastGuesses] = useState<number[]>([initialGuess]);
  const currentLow = useRef<number>(1);
  const currentHigh = useRef<number>(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!!!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setPastGuesses((currentPastGuesses: number[]): number[] => [
      nextNumber,
      ...currentPastGuesses,
    ]);
  };

  return (
    <View style={styles.screen}>
      <BodyText>Opponent's Guess</BodyText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={() => nextGuessHandler('lower')}>
          <Ionicons name="md-remove" size={24} color="black" />
        </MainButton>
        <MainButton onPress={() => nextGuessHandler('greater')}>
          <Ionicons name="md-add" size={24} color="black" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map(
            (guess: number, index: number): React.ReactNode => {
              return (
                <ListItem
                  key={index}
                  value={guess}
                  index={pastGuesses.length - index}
                />
              );
            },
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default GameScreen;
