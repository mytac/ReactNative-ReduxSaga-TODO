import React, { Component } from 'react';

/* redux相关 */
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
/* 路由相关 */
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import AppRouteConfigs from './js/route/configs';

import todos from './js/reducer';

/* ------------连接redux与navigator--------------*/

/* 路由配置 */
const AppNavigator = StackNavigator(AppRouteConfigs);

/* 初始路由 */
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('App'));

/* 配置路由的reducer */
const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

/* 与其他reducer组合起来 */
const appReducer = combineReducers({
  nav: navReducer,
  todos,
});


/* ---------------构建根组件----------------- */
class App extends React.Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  todos: state.todosav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(appReducer);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default Root;
