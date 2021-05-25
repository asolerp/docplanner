import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../../Store';

import {addDays, subDays, startOfWeek, endOfWeek} from 'date-fns';
import {getSlots} from '@/Services/Slots';

export const getDaySlots = createAsyncThunk(
  'calendar/getSlotsByDay',
  async (date: string) => getSlots(date),
);
interface Slot {
  Start: string;
  End: string;
  Taken?: boolean;
}
interface CalendarState {
  firstDayWeek: Date;
  lastDayWeek: Date;
  fetchingDataSlots?: string;
  slots?: Slot[];
  books?: Slot[];
}

const initialState: CalendarState = {
  firstDayWeek: startOfWeek(new Date(), {weekStartsOn: 1}),
  lastDayWeek: endOfWeek(new Date(), {weekStartsOn: 1}),
  books: [],
  slots: [],
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    nextWeek: state => {
      state.firstDayWeek = addDays(state.firstDayWeek, 7);
      state.lastDayWeek = addDays(state.lastDayWeek, 7);
    },
    prevWeek: state => {
      state.firstDayWeek = subDays(state.firstDayWeek, 7);
      state.lastDayWeek = subDays(state.lastDayWeek, 7);
    },
    book: (state, {payload}) => {
      const slotIndex = state.slots?.findIndex(
        (slot: Slot) => slot.Start === payload.Start,
      );
      const clonedSlots = [...state.slots];
      clonedSlots[slotIndex].Taken = true;
      state.books = [...state.books].concat([payload]);
    },
  },
  extraReducers: {
    [getDaySlots.pending.toString()]: state => {
      state.fetchingDataSlots = 'loading';
    },
    [getDaySlots.fulfilled.toString()]: (state, {payload}) => {
      state.fetchingDataSlots = 'success';
      state.slots = payload;
    },
    [getDaySlots.rejected.toString()]: state => {
      state.fetchingDataSlots = 'error';
    },
  },
});

// SELECTORS
export const selectWeek = (state: RootState) => ({
  firstDay: state.calendar.firstDayWeek,
  lastDay: state.calendar.lastDayWeek,
});
export const firstDayWeek = (state: RootState) => state.calendar.firstDayWeek;
export const books = (state: RootState) => state.calendar.books;
export const daysSlots = (state: RootState) => state.calendar.slots;

// ACTIONS
export const {nextWeek, prevWeek, book} = calendarSlice.actions;

export default calendarSlice.reducer;
