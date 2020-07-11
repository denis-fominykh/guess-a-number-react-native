import React, { FC } from 'react';
import { View } from 'react-native';

import styles from './ListItemStyle';

import { ListItemProps } from '../../interfaces/IListItem';
import BodyText from '../BodyText';

const ListItem: FC<ListItemProps> = ({ value, index }) => {
  return (
    <View style={styles.listItem}>
      <BodyText>№{index}</BodyText>
      <BodyText>{value}</BodyText>
    </View>
  );
};

export default ListItem;
