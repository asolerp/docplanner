import React, {useCallback, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {format} from 'date-fns';

import {groupedSlots, parseDate} from '@/Utils/slots.js';
import {useTheme} from '@/Theme';

import {
  daysSlots,
  getDaySlots,
  firstDayWeek,
} from '@/Store/Calendar/calendarSlice';

import {useDispatch, useSelector} from 'react-redux';
import SlotItem from './SlotItem';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SlotsViewer = () => {
  const dispatch = useDispatch();
  const {Layout, Gutters, Colors} = useTheme();
  const firstDayWeekSelector = useSelector(firstDayWeek);
  const slots = useSelector(daysSlots);

  const getSlotsHandler = useCallback(() => {
    dispatch(getDaySlots(format(firstDayWeekSelector, 'yyyyMMdd')));
  }, [dispatch, firstDayWeekSelector]);

  useEffect(() => {
    getSlotsHandler();
  }, [firstDayWeekSelector, getSlotsHandler]);

  const renderSlot = ({item}) => {
    return <SlotItem slot={item} />;
  };

  const renderDay = ({item: [key, value]}) => {
    return (
      <View style={{flex: 1, width: '100%'}} key={key}>
        <View
          style={[
            Layout.fill,
            Gutters.smallHPadding,
            Gutters.smallVPadding,
            {
              backgroundColor: Colors.white,
            },
            Layout.boxShadow,
          ]}>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {format(parseDate(key), 'EEEE, d MMMM')}
          </Text>
        </View>
        <FlatList
          data={value}
          keyExtractor={(item, i) => i}
          renderItem={renderSlot}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, width: '100%'}}>
      {slots && (
        <FlatList
          style={{width: '100%'}}
          data={Object.entries(groupedSlots(slots))}
          keyExtractor={(item, i) => i}
          renderItem={renderDay}
        />
      )}
    </SafeAreaView>
  );
};

export default React.memo(SlotsViewer);
