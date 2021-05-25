import React from 'react';
import {View} from 'react-native';
import {SlotsViewer, WeekNavigator} from '@/Components';
import {useTheme} from '@/Theme';

const Calendar = () => {
  const {Layout} = useTheme();
  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <WeekNavigator />
      <SlotsViewer />
    </View>
  );
};

export default Calendar;
