import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { ListItemProps } from '../interfaces/IListItem';
import BodyText from './BodyText';
import Colors from '../constants/colors';

const ListItem: FC<ListItemProps> = ({ value, index }) => {
  return (
    <View style={styles.listItem}>
      <BodyText>№{index}</BodyText>
      <BodyText>{value}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.accent,
    borderWidth: 1,
    borderRadius: 7,
    padding: 15,
    marginVertical: 10,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default ListItem;
