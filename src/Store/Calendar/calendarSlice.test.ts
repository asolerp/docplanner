import store from '../../Store';
import {startOfWeek} from 'date-fns';

test('Next Week', () => {
  let firstDayTest = startOfWeek(new Date(), {weekStartsOn: 1});
  let fistDayWeek = store.getState().calendar.firstDayWeek;
  expect(firstDayTest).toBe(fistDayWeek);
});
