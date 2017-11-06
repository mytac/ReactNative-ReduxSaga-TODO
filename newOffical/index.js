import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './js/reducer';
import AppWithNavigationState from './js/route/AppNavigator';

class ReduxExampleApp extends React.Component {
  constructor(props) {
    super(props);
    this.store = createStore(AppReducer);
  }


  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('newOffical', () => ReduxExampleApp);

export default ReduxExampleApp;
