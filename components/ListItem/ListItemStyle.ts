import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

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

export default styles;
