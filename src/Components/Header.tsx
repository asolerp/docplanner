import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@/Theme';

const Header = () => {
  const {Layout, Colors, Fonts, Gutters} = useTheme();
  const navigation = useNavigation();
  return (
    <View
      style={[
        Layout.boxShadow,
        Layout.fullWidth,
        Layout.row,
        {backgroundColor: Colors.white},
        Gutters.regularVPadding,
        Gutters.regularLPadding,
      ]}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Text style={[Fonts.textRegular]}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
