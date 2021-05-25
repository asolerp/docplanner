import React, {useCallback} from 'react';
import {Button} from '@/Components';
import {View, Text} from 'react-native';
import {useTheme} from '@/Theme';
import {Header} from '@/Components';
import {useRoute} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {book, books} from '@/Store/Calendar/calendarSlice';
import {slotIsTaken} from '@/Utils/slots';

interface Props {
  navigation: any;
}

const Slot = ({navigation}: Props) => {
  const {Layout, Gutters} = useTheme();
  const route = useRoute();
  const dispatch = useDispatch();
  const booksState = useSelector(books);

  const handleBook = useCallback(
    slotToBook => {
      dispatch(book({...slotToBook}));
      navigation.pop();
    },
    [dispatch, navigation],
  );

  const {slot} = route.params;

  return (
    <View style={[Layout.fill]}>
      <Header />
      <View style={[Gutters.largeTMargin, Gutters.regularHPadding]}>
        <Text style={[Gutters.smallBMargin]}>From: {slot?.Start}</Text>
        <Text style={[Gutters.smallBMargin]}>To: {slot?.End}</Text>
        <Button
          disabled={slotIsTaken(slot, booksState)}
          title={slot?.Taken ? 'Slot booked' : 'Book a slot'}
          onPress={() => {
            !slot?.Taken && handleBook(slot);
          }}
        />
      </View>
    </View>
  );
};

export default Slot;
