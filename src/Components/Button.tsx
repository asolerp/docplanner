import {useTheme} from '@/Theme';

import React from 'react';
import {TouchableOpacity, Text, GestureResponderEvent} from 'react-native';

interface Props {
  title: string;
  disabled: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const Button = ({title, disabled, onPress}: Props) => {
  const {Layout, Fonts, Colors, Gutters, MetricsSizes} = useTheme();
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        Layout.rowCenter,
        Gutters.tinyVPadding,
        Gutters.regularHPadding,
        Gutters.tinyHMargin,
        {
          backgroundColor: Colors.primary,
          borderRadius: MetricsSizes.small,
          opacity: disabled ? 0.3 : 1,
        },
      ]}>
      <Text style={[Fonts.textRegular, {color: Colors.white}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
