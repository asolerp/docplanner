import {format} from 'date-fns';
import React from 'react';
import {useTheme} from '@/Theme';

import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {books} from '@/Store/Calendar/calendarSlice';
import {slotIsTaken} from '@/Utils/slots';

interface Props {
  Start: string;
  End: string;
  Taken?: boolean;
}

const SlotItem = ({slot}: Props) => {
  const {Layout, Gutters, Colors} = useTheme();
  const navigation = useNavigation();
  const booksState = useSelector(books);

  const handleClickSlot = slot => {
    navigation.navigate('Slot', {slot});
  };

  return (
    <View style={[Layout.row, Gutters.smallVPadding]}>
      <View style={[{flex: 1}, Layout.rowCenter]}>
        <Text style={{color: Colors.text}}>
          {format(new Date(slot.Start), 'p')}
        </Text>
      </View>
      {slotIsTaken(slot, booksState) ? (
        <TouchableOpacity
          onPress={() => handleClickSlot(slot)}
          style={[
            Gutters.regularVPadding,
            Gutters.smallHPadding,
            {
              flex: 2,
              backgroundColor: Colors.active,
              borderWidth: 1,
              borderColor: Colors.border,
              borderRadius: 5,
              borderLeftWidth: 3,
              borderLeftColor: Colors.booked,
            },
          ]}>
          <Text style={{color: Colors.link}}>Slot booked</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => handleClickSlot(slot)}
          style={[
            Gutters.regularVPadding,
            Gutters.smallHPadding,
            {
              flex: 2,
              backgroundColor: Colors.white,
              borderWidth: 1,
              borderColor: Colors.border,
              borderRadius: 5,
            },
          ]}>
          <Text style={{color: Colors.link}}>+ Book Slot</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default React.memo(SlotItem);
