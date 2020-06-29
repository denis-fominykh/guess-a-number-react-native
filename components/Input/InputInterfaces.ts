import { ViewStyle } from 'react-native';

export interface InputProps {
  inputStyle: ViewStyle;
  blurOnSubmit: boolean;
  autoCapitalize: any;
  autoCorrect: boolean;
  keyboardType: any;
  maxLength: number;
  onChangeText: (inputText: string) => void;
  value: string;
}
