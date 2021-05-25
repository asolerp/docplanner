import {format} from 'date-fns';

export const parseDate = date => {
  let year = date.substring(0, 4);
  let month = date.substring(4, 6);
  let day = date.substring(6, 8);

  return new Date(year, month - 1, day);
};

export const groupedSlots = slots =>
  slots.reduce((acc, slot) => {
    const day = format(new Date(slot?.Start), 'yyyyMMdd');
    return {
      ...acc,
      [day]: acc?.[day] ? acc?.[day].concat([slot]) : [slot],
    };
  }, {});

export const slotIsTaken = (slot, booksState) => {
  if (slot.Taken) {
    return true;
  }
  const existsBook = booksState.some(book => book.Start === slot.Start);
  return existsBook;
};
