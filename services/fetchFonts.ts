import * as Font from 'expo-font';

export const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'san-francisco-display': require('../assets/fonts/SFUIDisplay-Regular.ttf'),
    'san-francisco-display-bold': require('../assets/fonts/SFUIDisplay-Bold.ttf'),
  });
};
