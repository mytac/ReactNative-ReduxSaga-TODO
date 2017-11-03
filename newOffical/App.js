import React, { Component } from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import todoApp from './js/reducer';
import App from './js';

const store = createStore(todoApp);

export default class Wrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Provider store={store}><App /></Provider>);
  }
}

