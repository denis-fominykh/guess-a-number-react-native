import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './AppStyle';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

const App: FC = () => {
  const [userNumber, setUserNumber] = useState<number>();

  const startGameHandler = (selectedNumber: number): void => {
    setUserNumber(selectedNumber);
  };

  const content = userNumber ? (
    <GameScreen userChoice={userNumber} />
  ) : (
    <StartGameScreen onStartGame={startGameHandler} />
  );

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
