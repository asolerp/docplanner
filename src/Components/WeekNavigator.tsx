import React from 'react';
import {View, Text} from 'react-native';
import {selectWeek} from '@/Store/Calendar/calendarSlice';
import {shallowEqual, useSelector} from 'react-redux';
import {useCalendar} from '@/Components/hooks';
import {format} from 'date-fns';
import {useTheme} from '@/Theme';
import {Icon} from '@/Components';

const WeekNavigator = () => {
  const {Layout, Colors, Gutters, Fonts} = useTheme();
  const weekSelector = useSelector(selectWeek, shallowEqual);
  const {nextWeek, prevWeek} = useCalendar();

  return (
    <View
      style={[
        Layout.fullWidth,
        Layout.rowCenter,
        Gutters.smallVPadding,
        Layout.justifyContentSpaceAround,
        {backgroundColor: Colors.primary},
      ]}>
      <Icon symbol="<" onPress={() => prevWeek()} />
      <View style={[Layout.row]}>
        <Text style={[Fonts.textWhite]}>
          {format(weekSelector.firstDay, 'd')}
        </Text>
        <Text style={[Fonts.textWhite]}>-</Text>
        <Text style={[Fonts.textWhite]}>
          {format(weekSelector.lastDay, 'd MMMM')}
        </Text>
      </View>
      <Icon symbol=">" onPress={() => nextWeek()} />
    </View>
  );
};

export default React.memo(WeekNavigator);
