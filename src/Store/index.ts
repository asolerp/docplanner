import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import {calendarReducer} from '@/Store/Calendar';

const reducers = combineReducers({
  calendar: calendarReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
    });
    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }
    return middlewares;
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
