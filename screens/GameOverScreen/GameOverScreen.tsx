import React, { FC } from 'react';
import { View, Button, Image, Text } from 'react-native';

import styles from './GameOverScreenStyle';

import { GameOverScreenProps } from './GameOverScreenInterfaces';
import TitleText from '../../components/TitleText';
import BodyText from '../../components/BodyText';
import MainButton from '../../components/MainButton';

const GameOverScreen: FC<GameOverScreenProps> = ({
  rounds,
  userNumber,
  onRestart,
}) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/success.png')}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{rounds}</Text>{' '}
          rounds to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton onPress={onRestart}>NEW GAME</MainButton>
    </View>
  );
};

export default GameOverScreen;
