import {useCallback} from 'react';
import {nextWeek, prevWeek, selectWeek} from '@/Store/Calendar/calendarSlice';
import {useDispatch, useSelector} from 'react-redux';

const useCalendar = () => {
  const weekSelector = useSelector(selectWeek);
  const dispatch = useDispatch();

  const nextWeekHandler = useCallback(() => dispatch(nextWeek()), [dispatch]);
  const prevWeekHandler = useCallback(() => dispatch(prevWeek()), [dispatch]);

  const prevWeekManager = () => {
    if (weekSelector?.firstDay >= new Date()) {
      prevWeekHandler();
    }
  };

  return {
    nextWeek: nextWeekHandler,
    prevWeek: prevWeekManager,
  };
};

export default useCalendar;
