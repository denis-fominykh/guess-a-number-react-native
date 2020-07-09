import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 7,
  },
  buttonText: {
    color: Colors.accent,
    fontFamily: 'open-sans',
    fontSize: 18,
  },
});

export default styles;
