import {useTheme} from '@/Theme';
import React from 'react';
import {TouchableOpacity, Text, GestureResponderEvent} from 'react-native';

interface Props {
  symbol: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const Icon = ({symbol, onPress}: Props) => {
  const {Layout, Gutters, Colors} = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        Layout.rowCenter,
        Gutters.tinyVPadding,
        Gutters.tinyHPadding,
        {
          backgroundColor: Colors.white,
          borderRadius: 100,
          width: 30,
          height: 30,
        },
      ]}>
      <Text style={{fontSize: 15}}>{symbol}</Text>
    </TouchableOpacity>
  );
};

export default Icon;
