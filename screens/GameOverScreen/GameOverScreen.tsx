import React, { FC } from 'react';
import { View, Button, Image } from 'react-native';

import styles from './GameOverScreenStyle';

import { GameOverScreenProps } from './GameOverScreenInterfaces';
import TitleText from '../../components/TitleText';
import BodyText from '../../components/BodyText';

const GameOverScreen: FC<GameOverScreenProps> = ({
  rounds,
  userNumber,
  onRestart,
}) => {
  return (
    <View style={styles.screen}>
      <TitleText >The Game is over!</TitleText>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../../assets/success.png')} />
      </View>
      <BodyText>Rounds: {rounds}</BodyText>
      <BodyText>The number was: {userNumber}</BodyText>
      <Button title="NEW GAME" onPress={onRestart} />
    </View>
  );
};

export default GameOverScreen;
