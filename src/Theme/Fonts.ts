import {StyleSheet} from 'react-native';
import {ThemeVariables, ThemeFonts} from '@/Theme/theme.type';

export default function ({FontSize, Colors}: ThemeVariables): ThemeFonts {
  return StyleSheet.create({
    textWhite: {
      fontSize: FontSize.small,
      fontWeight: 'bold',
      color: Colors.white,
    },
    textSmall: {
      fontSize: FontSize.small,
      color: Colors.text,
    },
    textRegular: {
      fontSize: FontSize.regular,
      fontWeight: 'bold',
    },
    textLarge: {
      fontSize: FontSize.large,
      color: Colors.text,
    },
  });
}
