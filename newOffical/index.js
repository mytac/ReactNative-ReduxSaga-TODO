import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import AppWithNavigationState from './js/route/AppNavigator';

import configureStore from './js/configureStore';

const store = configureStore();

class ReduxExampleApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('newOffical', () => ReduxExampleApp);

export default ReduxExampleApp;
