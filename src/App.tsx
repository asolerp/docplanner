import React from 'react';
import store from '@/Store';
import {Provider} from 'react-redux';

import ApplicationNavigator from '@/Navigator/Application';

const App = () => {
  return (
    <Provider store={store}>
      <ApplicationNavigator />
    </Provider>
  );
};

export default App;
