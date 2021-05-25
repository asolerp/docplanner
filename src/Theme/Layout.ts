import {Dimensions, StyleSheet} from 'react-native';
import {ThemeLayout, ThemeVariables} from './theme.type';

export default function ({}: ThemeVariables): ThemeLayout {
  return StyleSheet.create({
    fullWidth: {
      width: Dimensions.get('window').width,
    },
    fill: {
      flex: 1,
    },
    column: {
      flexDirection: 'column',
    },
    colCenter: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
    },
    rowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    justifyContentEvenly: {
      justifyContent: 'space-evenly',
    },
    justifyContentSpaceAround: {
      justifyContent: 'space-around',
    },
    boxShadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
  });
}
