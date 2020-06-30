import React, { FC } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './AppStyle';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

const App: FC = () => {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGameScreen />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
